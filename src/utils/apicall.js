import axios from 'axios';

export const apiPostCall = ({formData, responseCallback, failCallback, finalCallback}) => {
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/tokens`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(res => responseCallback(res))
        .catch(res => failCallback(res))
        .finally(finalCallback())
};