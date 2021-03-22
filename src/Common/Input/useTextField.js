import React, {useState} from 'react';

const useTextField = ({id, label, initvalue="", initErrMsg="", autoComplete="", autoFocus=false}) => {
    const [value, setValue] = useState(initvalue);
    const [helperText, setHelperText] = useState(initErrMsg);
  
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
        helperText,
        error: helperText !== "",
        autoComplete,
        setHelperText
    };
};

export default useTextField;