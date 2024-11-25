import { useState } from "react";

function Expense(props) {

    const data = props.data;

    return (
        <>
            <div className="flex justify-center items-center pt-7">
                <div className="px-2">
                    <img src="/group.png" width="140px"/>
                </div>
                <div className="flex flex-col gap-2 py-2 px-2">
                    <h1 className="text-lg md:text-3xl py-1 font-bold">
                        You have not added any expenses yet
                    </h1>
    
                    <p className="text-gray-500 md:text-lg w-11/12">
                        To add a new expense, click the orange “Add an expense” button.
                    </p>
                </div>
            </div>    
        </>
    )
}

export default Expense;