import React, { } from "react"; 
function LeftSide(props) {
    return (
        <section className="bg-[#1E213A] flex flex-col w-screen h-screen overflow-hidden md:w-[30%] md:min-w-[380px] md:m-auto">
            
            {props.children}

        </section>
    )
}

export { LeftSide };

