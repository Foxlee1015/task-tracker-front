import React from "react";
import TextField from '@material-ui/core/TextField';


const InputBasic = ({
    ref = null,
    value,
    setValue,
    placeholder,
    handleBlur = () => {},
    keyEnterEvent = () => {},
    errMsg = "",
    type = "text",
    autoFocus = false,
}) => {  

    // const handleKeyEvent = (e) => {
    //     if (e.key === "Enter") {
    //         handleBlur()
    //         keyEnterEvent();
    //     }
    // };


    return (
        <div>
            <TextField
                inputRef={ref}
                id="standard-textarea"
                label={placeholder}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={e=>setValue(e.target.value)}
                autoFocus={autoFocus}
                multiline
                helperText={errMsg}
                error={errMsg !== ""}
            />
            {/* <input
                ref={ref}
                value={value}
                type={type}
                className={className}
                onChange={e=>setValue(e.target.value)}
                onBlur={e=>handleBlur()}
                onKeyPress={handleKeyEvent}
                placeholder={placeholder}
            ></input> */}
            <div>
                {/* <label>{placeholder}</label> */}
            </div>
            <p>{errMsg}</p>
        </div>
    );
};

export default InputBasic;