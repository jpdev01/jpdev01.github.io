// async function render(){
//     debugger;
//     await jQuery.get("assets/mock/stack.json", undefined, function(data) {
//         let stack = data.stack;
//         return stack;
//     });
// }

$(document).ready(function() {
    let text = await jQuery.get("assets/mock/stack.json", undefined, function(data) {
let stack = data.stack;
console.log(stack);
});
});