// async function render(){
//     debugger;
//     await jQuery.get("assets/mock/stack.json", undefined, function(data) {
//         let stack = data.stack;
//         return stack;
//     });
// }

$(document).ready(function() {
    jQuery.get("assets/mock/stack.json", undefined, function(data) {
let stack = data.stack;
$("#dock").load(getStackHtml(stack));
});
});

var getStackHtml = function(stackList) {
    var html = "<ul>";

    for(stack in stackList) {
        let name = stack.name;
        html += `<li id='${name}>'`;
        html += `<a href='#${name}>'`;
        html += "<em>";

        html += `<span>${name}</span>`;
        html += "</em>";

        html += `<img src="../../${stack.image}}" />`;

        html += "</a>";
        html += "</li>";
    }

    var html = "</ul>";
    return html;
}
