import React, { useEffect } from "react";


const InputBasic = ({
    ref = null,
    value,
    setValue,
    placeholder,
    className = "input",
    handleBlur = () => {},
    keyEnterEvent = () => {},
    errMsg = "",
    type = "text",
}) => {  

    const handleKeyEvent = (e) => {
        if (e.key === "Enter") {
            handleBlur()
            keyEnterEvent();
        }
    };

    useEffect(() => {
        if (value) {
            handleBlur()
        }
    }, []);

    return (
        <div>
            <input
                ref={ref}
                value={value}
                type={type}
                className={className}
                onChange={e=>setValue(e.target.value)}
                onBlur={e=>handleBlur()}
                onKeyPress={handleKeyEvent}
                placeholder={placeholder}
            ></input>
            <div>
                {/* <label>{placeholder}</label> */}
            </div>
            <p>{errMsg}</p>
        </div>
    );
};

export default InputBasic;