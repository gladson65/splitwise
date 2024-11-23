import "../App.css";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Welcome() {

    // state to toggle content
    const [ toggle, setToggle ] = useState(false);

    // get info from redux store
    const groupData = useSelector((store) => store.group.groups);


    function redirect() {
        setToggle(true);
    }


    useEffect(()=> {
        if (groupData.length > 0) {
            setToggle(true);
        }
    }, [groupData])

    return(
        <>
            {
                toggle ?
                <>
                    <Dashboard />
                </>

                :

                <>
                    <div className="welcome w-screen h-screen flex justify-center pt-10">
                        <div className="pt-7">
                            <img src="/w-img.png" width="150px"/>
                        </div>
                        <div className="px-2 w-auto">
                            <div className="px-2 w-auto h-20 flex items-end gap-2 overflow-hidden">
                                <i>
                                    <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
                                        width="50px" height="50px"/>
                                        
                                </i>
                                <span className="text-4xl py-1">
                                    Welcome to Splitwise!
                                </span>
                            </div>
                            
                            <h2 className="mt-4 text-lg text-center">
                                What would you like to do first?
                            </h2>

                            <div className="flex flex-col items-center gap-4 mt-5">
                                <button className="w-72 welcom-btn bg-orange-500 text-white py-2 text-2xl">
                                    Add your apartment
                                </button>

                                <button className="w-72 welcom-btn bg-orange-500 text-white py-2 text-2xl">
                                    Add a group trip
                                </button>

                                <button onClick={redirect} className="w-72 py-2 bg-gray-200 text-2xl hover:bg-gray-300">
                                    Skip setup for now
                                </button>
                            </div>

                            <p className="text-center text-sm mt-4">
                                Looking for our fairness calculators? 
                                <span className="text-blue-400 hover:underline"> Click here.</span>
                            </p>
                        </div>
                    </div>
                </>
            }
            
        </>
    )
}

export default Welcome;