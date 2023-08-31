import { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        }
    }));
    return (
        <>
            { toggle && <p>Show Text Toggle</p>}
        </>
    );
});

export default Button;