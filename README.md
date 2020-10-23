# Unflatter

This library is used to unflatten an object to nested object form.

for example: 
    
    const data = {
        "name[value]": "Ali Baba",
        "name[operator]": "LIKE",
        "phone": "001135"
    }
    
    console.log(unflatter(data));

_output:_
    
    {
        "name" : {
            "value": "Ali Baba",
            "operator": "LIKE
        },
        "phone": "001135"
    }

that's it just install with `npm i @monabbous/unflatter` and start unflatting :D
