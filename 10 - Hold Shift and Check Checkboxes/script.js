const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"');

let lastChecked;

function handleCheck(e){

    // check if they had the shift key down and they are checking
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }

   lastChecked = this ; 
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));