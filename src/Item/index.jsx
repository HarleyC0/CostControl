import React from "react";

function Item(props) {
    return(
        <li>{props.value} {props.description}</li>
    );
}

export {Item};