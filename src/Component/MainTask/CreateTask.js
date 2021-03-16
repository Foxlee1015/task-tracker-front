import React, {useState} from "react";
import axios from "axios";

import InputBasic from "../../Common/Input/InputBasic";

// import postWithFetch from "../../utils/hooks/postWithFetch";

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
            url: `${process.env.REACT_APP_API_URL}/tasks/group`,
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