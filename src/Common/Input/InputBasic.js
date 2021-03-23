import React, {useState} from "react";
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

export const useTextField = ({id, label, initvalue="", autoComplete="", autoFocus=false}) => {
    const [value, setValue] = useState(initvalue);
  
    return {
        id,
        label,
        type: id,
        name: id,
        autoFocus,
        value,
        onChange: e=> setValue(e.target.value),
        variant:"outlined",
        margin: "normal",
        required: true,
        fullWidth: true,
        autoComplete,
    };
};

export const useHelperText = ({initErrMsg=""}={}) => {
    const [helperText, setHelperText] = useState(initErrMsg);

    return {
        helperText,
        setHelperText
    }
}