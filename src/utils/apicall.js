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

    // axios({
    //     method: "post",
    //     url: `${process.env.REACT_APP_API_URL}/tokens`,
    //     data: formData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //     .then(function (response) {
    //       if (response.status === 201) {
    //           localStorage.setItem('token', response.data.result);
    //           history.push('/main')
    //       }
    //     })
    //     .catch(function (res) {
    //         console.log(res.response.status);
    //         if (res.response.status === 404) {
    //             setUsernameError("Check your id");
    //         } else if (res.response.status === 400) {
    //             setPasswordError("Check your password");
    //         }
    //     })
    //     .finally(function () {  
    //         finishSumbit();
    //     })
};