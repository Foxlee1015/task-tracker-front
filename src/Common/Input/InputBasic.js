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
    );
};

export default InputBasic;