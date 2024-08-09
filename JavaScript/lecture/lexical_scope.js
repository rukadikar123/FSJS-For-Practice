function outer(){
    let username="siddharth"

    function inner(){
        let id=1234
        console.log(username);
        
    } inner()
    console.log(id);
    
}
outer()

// from this example we understand that parents variables can be access by the child functions but child variables cant access by the parent function .this is lexical scope
