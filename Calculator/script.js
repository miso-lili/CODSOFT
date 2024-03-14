const input = document.getElementById('displayBox');
const buttons = document.querySelectorAll('button');

let str = "";

let arr = Array.from(buttons);

arr.forEach(function(button) {
    button.addEventListener('click',  function(btns) {
        if (btns.target.value == '=') {
            str = eval(str);
        } else if (btns.target.value == 'AC'){
            str = "";
        } else if (btns.target.value == 'DEL') {
            str = str.substring(0, str.length-1);
        } else {
            str += btns.target.value;
        }

        input.value = str;

    })

})
