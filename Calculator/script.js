let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
            console.clear();
        }
        else if(e.target.innerHTML == '<i class="ri-delete-back-2-line"></i>'){
            let myarray = string.split("")
            myarray.pop()
            string = myarray.toString()
            document.querySelector('input').value = string;
        }
        else{
            if(e.target.innerHTML == "x"){
                e.target.innerHTML = "*"
            }
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})