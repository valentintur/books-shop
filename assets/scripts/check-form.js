
let totalPrice = localStorage.getItem('price');
console.log(totalPrice);

document.querySelector('.total-price-from-shop').innerHTML = totalPrice;

const checkDate = () => {
    let dateControl = document.querySelector('input[type="date"]');
    let today = new Date();
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    let dayTomorrow = tomorrow.getDate(); 

    dateControl.min = formatDate(new Date(today.getTime() + (24 * 60 * 60 * 1000)));
    dateControl.value = formatDate(new Date(today.getTime() + (24 * 60 * 60 * 1000)));
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const checkBoxLimit = () => {
	let checkBoxGroup = document.forms['order-form']['check-gift'];			
	let limit = 2;
	for (let i = 0; i < checkBoxGroup.length; i++) {
		checkBoxGroup[i].onclick = function() {
			let checkedcount = 0;
			for (let i = 0; i < checkBoxGroup.length; i++) {
				checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select maximum of " + limit + " checkboxes.");
				alert("You can select maximum of " + limit + " checkboxes.");						
				this.checked = false;
			}
		}
	}
}


   
    
    

const checkForm = () => {
    let elements = document.forms['order-form'].elements;
    let checkingArr = Array.from(elements);
    let cansubmit = true;
    for(let i = 0; i < checkingArr.length; i++) {
        if((checkingArr[i].value.length == 0 || !checkingArr.some(el => el.checked)) && checkingArr[i].type != "button")
        {
            //checkingArr[i].classList.add('error');
            cansubmit = false;
        } 
    }
    document.getElementById("submit-button").disabled = !cansubmit;  
};

checkForm();

let elements = document.forms['order-form'].elements;
let checkingArr = Array.from(elements);
checkingArr.forEach((el) => {
    el.addEventListener('change', checkForm);
})

const orderConfirmationText = document.querySelector('.order-confirmation-text');



checkDate();
checkBoxLimit();
//checkForm();
//setInterval(checkForm, 1000);

document.getElementById("submit-button").addEventListener('click', () => {
    //orderConfirmationText.innerHTML = `The order created. The delivery address is ${document.querySelector('#lstreet').value} street, house ${document.querySelector('#lhouse').value}, flat ${document.querySelector('#lflat').value}. Customer: ${document.querySelector('#fname').value} ${document.querySelector('#lname').value}`;
    alert(`The order created. The delivery address is ${document.querySelector('#lstreet').value} street, house ${document.querySelector('#lhouse').value}, flat ${document.querySelector('#lflat').value}. Customer: ${document.querySelector('#fname').value} ${document.querySelector('#lname').value}`);
})
//();