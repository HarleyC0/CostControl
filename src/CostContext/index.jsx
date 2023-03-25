import React from "react";

const CostContext = React.createContext();

function CostProvider(props) {

    const [openModal, setOpenModal] = React.useState(false);
    
    return (
        <CostContext.Provider value={{
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </CostContext.Provider>
    );
}

export { CostContext, CostProvider};