import React from "react";
import { CostContext } from "../CostContext";

function Create (props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };


    return (
        <button
            onClick={onClickButton}
        >
            New Value
        </button>
    );
}

export { Create };