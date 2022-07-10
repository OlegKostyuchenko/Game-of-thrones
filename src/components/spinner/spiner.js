import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
    display: "flex",
    justifyContent: "center",
    margin: "66px auto",
    padding: "40px"

};


const Spiner = () => {
    return (
        <div>
            <PropagateLoader color='black' cssOverride={override} size={25} />
        </div>
    );
};

export default Spiner;