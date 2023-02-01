import { forwardRef } from "react";

const InputComponent = forwardRef(({ label, ...props }, ref ) => {
    return (
        <>
            <label className="form-label" >{label}</label>
            <input className="form-control"  {...props} ref={ref} />
        </>
    );
} )

export default InputComponent;