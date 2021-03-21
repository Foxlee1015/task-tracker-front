export function getDateTime({add_year=0, add_month=0}={}) {
    const now     = new Date(); 
    let year    = now.getFullYear();
    let month   = now.getMonth()+1; 
    let day     = now.getDate();
    let hour    = now.getHours();
    let minute  = now.getMinutes();
    let second  = now.getSeconds();

    year = year + add_year;
    month = month + add_month;

    if (month > 12) {
         year+= 1;
         month-= 12;
    }

    if(month.toString().length === 1) {
         month = '0'+month;
    }
    if(day.toString().length === 1) {
         day = '0'+day;
    }   
    if(hour.toString().length === 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length === 1) {
         minute = '0'+minute;
    }
    if(second.toString().length === 1) {
         second = '0'+second;
    }   
    const dateTime = `${year}-${month}-${day}T${hour}:${minute}`;
    return dateTime;
}
