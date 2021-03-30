import jwt from 'jsonwebtoken';

export function getDateTime({addYear=0, addMonth=0, addDay=0}={}) {
    const now     = new Date();
    const oldDate = new Date();
    now.setDate(oldDate.getDate() + addDay);
    let year    = now.getFullYear();
    let month   = now.getMonth()+1; 
    let day     = now.getDate();
    let hour    = now.getHours();
    let minute  = now.getMinutes();
    let second  = now.getSeconds();

    year += addYear;
    month += addMonth;

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

export function getUserInfoFromToken() {
     try {
          const jsonWebToken = localStorage.getItem('token');
          const token = jsonWebToken.split(' ')[1];
          const decodedToken=jwt.decode(token, {complete: true});
          const dateNow = new Date();

          if((decodedToken.payload.exp)*1000 < dateNow.getTime()) { // expired
               return null;
          } else {
               return decodedToken.payload;
          }
     } catch (error) {
          return null;
     }
}

export function formatDate(date) {
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