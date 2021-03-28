import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';


const InputBasic = ({
    id = "standard-textarea",
    ref = null,
    value,
    setValue,
    placeholder,
    handleBlur = () => {},
    keyEnterEvent = () => {},
    errMsg = "",
    type = "text",
    autoFocus = false,
    multiline = false,
    rowsMax = 1,
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
                id={id}
                label={placeholder}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={e=>setValue(e.target.value)}
                autoFocus={autoFocus}
                multiline
                rowsMax={rowsMax}
                helperText={errMsg}
                error={errMsg !== ""}
            />
    );
};

export default InputBasic;

export const useTextField = ({
    id, 
    label, 
    initvalue="", 
    autoComplete="", 
    autoFocus=false,
    variant="outlined",
    margin="normal",
    multiline=false,
    rowsMax=1,
}) => {
    const [value, setValue] = useState(initvalue);
  
    return {
        id : `${id}-${Math.random().toString(36).substring(7)}`,
        label,
        type: id,
        name: id,
        autoFocus,
        value,
        onChange: e=> setValue(e.target.value),
        variant,
        margin,
        multiline,
        rowsMax,
        required: true,
        fullWidth: true,
        autoComplete
    };
};

export const useHelperText = ({
    initErrMsg="", 
}={}) => {
    const [helperText, setHelperText] = useState(initErrMsg);

    return {
        helperText,
        setHelperText,
        error: helperText !== ""
    }
}