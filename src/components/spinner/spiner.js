import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
    display: "flex",
    justifyContent: "center",
    margin: "66px auto",
    padding: "40px"

};


const Spiner = (props) => {
    return (
        <div>
            <PropagateLoader color={props.color} cssOverride={override} size={props.size} />
        </div>
    );
};

export default Spiner;