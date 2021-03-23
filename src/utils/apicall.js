import axios from 'axios';

export const apiPostCall = ({endpoint, formData=null, responseCallback=()=>{}, failCallback=()=>{}, finalCallback=()=>{}}) => {
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data",
                    "Authorization": localStorage.getItem('token')},
      })
        .then(res => responseCallback(res))
        .catch(res => failCallback(res))
        .finally(finalCallback())
};