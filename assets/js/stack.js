async function render(){
    debugger;
    jQuery.get("assets/mock/stack.json", undefined, function(data) {
        let stack = data.stack;
        return stack;
    });
}

