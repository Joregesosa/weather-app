import React from "react";

function RightSide(props) {

    return (

        <div className="w-full h-fit min-h-screen flex flex-col items-center bg-[#100E1D] md:w-[70%]">

            {props.children}

        </div>
    )
}
export { RightSide }