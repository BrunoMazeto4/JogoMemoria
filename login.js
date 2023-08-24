let input = document.querySelectorAll("input");
let button = document.querySelectorAll("button");


let validateInput = ({target}) => {
    if(target.value.length > 3) {
        button.removeAttribute("disabled");
        return;
    }

    button.setAttribute("disabled", "");
    }

    let handleSubmit = (event) => {
        event.preventDefault();
    }
    
    input.addEventListener("input", validateInput);