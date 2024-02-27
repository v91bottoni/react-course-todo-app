import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAlert, showAlert } from "../reducer/alertSlice";

const Alert = ({ msg }) => {
    const refContainer = useRef();
    const alert = useSelector(selectAlert);
    const dispatch = useDispatch()

    useEffect(() => {
        refContainer.current.style.left = `${alert.show ? "15px" : "-100%"}`;

        const timeout = setTimeout(() => {
            refContainer.current.style.left = "-100%";
            dispatch(showAlert(false, alert.msg));
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <p ref={refContainer} className='alert'>
            {msg}
        </p>
    );
};

export default Alert;