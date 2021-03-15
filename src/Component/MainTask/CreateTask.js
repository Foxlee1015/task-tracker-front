import React, {useEffect, useState} from "react";
import axios from "axios";

import InputBasic from "../../Common/Input/InputBasic";

import postWithFetch from "../../utils/hooks/postWithFetch";

function CreateTask() {
    const [showInputs, setShowInputs] = useState(false);
    return (
        <div>
            <button 
                onClick={e=>setShowInputs(!showInputs)}
            >
                {showInputs? "Close" : "Create a New task"}    
            </button>
            <div>
                {showInputs && <CreateTaskInputs />}
            </div>

        </div>
  );
}
export default CreateTask;


function CreateTaskInputs() {
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
        var bodyFormData = new FormData();
        bodyFormData.append('title', "z"); 
        bodyFormData.append('text', "b"); 
        bodyFormData.append('repeat_type', 0); 

        axios({
            method: "post",
            url: "http://54.180.93.113:16980/api/tasks/group",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
        // axios.post('http://54.180.93.113:16980/api/tasks/group', {
        //     title,
        //     "text": "a",
        //     "repeat_type": 0
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // postWithFetch({
        //     url: 'http://54.180.93.113:16980/api/tasks',
        //     token:'1', 
        //     body:{"title": title}})
    };

    return (
      <div>
        <InputBasic
            value={title} 
            setValue={setTitle} 
            placeholder="Title"
        />
        <button 
            onClick={e=>handleSubmit()}
        >Finish</button>
      </div>
    );
}