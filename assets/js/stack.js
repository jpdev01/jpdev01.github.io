// async function render(){
//     debugger;
//     await jQuery.get("assets/mock/stack.json", undefined, function(data) {
//         let stack = data.stack;
//         return stack;
//     });
// }

$(document).ready(function() {
    jQuery.get("../../assets/mock/stack.json", undefined, function(data) {
let stack = data.stack;
console.log(stack);
$(".dock").html(getStackHtml(stack));
});
});

var getStackHtml = function(stackList) {
    var html = "<ul>";
    stackList.forEach(stack => {
        let name = stack.name;
        html += `<li id='${name}'>`;
        html += `<a href='#${name}'>`;
        html += "<em>";

        html += `<span>${name}</span>`;
        html += "</em>";

    
        html += `<img src="${getImageSrc(stack)}" />`; 

        html += "</a>";
        html += "</li>";
    });

    html += "</ul>";
    return html;
}

var getImageSrc = function(stack){
    if (stack.image) {
        return `../../assets/images/stack/${stack.image}`; 
    } else if(stack.link) {
       return stack.link; 
    }
    return "";
}
