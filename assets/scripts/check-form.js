
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

checkDate();
