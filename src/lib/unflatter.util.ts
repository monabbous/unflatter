
export function unflatter(json) {
  const newJson = {};
  for (const key of Object.keys(json)) {
    const value = json[key];
    if (value === undefined || value === 'undefined') {
      continue;
    }
    if (/(?!\s*\[\s*hidden\s*]\s*)|\s*\[\s*[\w]+\s*]\s*/g.test(key)) {
      const keys = key.split(/\[\s*([\w]+)\s*]/g)
        .filter(f => f !== '');
      keys.reduce((b, k, i) => {
        if (keys[i] === '__proto__' || keys[i] === 'constructor' || keys[i] === 'prototype') {
          return b;
        }
        if (b === undefined) {
          b = {};
        }
        if (i < keys.length - 1) {
          b[k] = b[k] || {};
          return b[k];
        } else {
          b[k] = value;
        }
        return b;
      }, newJson);
    } else {
      newJson[key] = value;
    }
  }
  return newJson;
}
