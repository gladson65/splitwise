import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addGroup, addMembers } from "../utils/groupSlice";
import { useSelector } from "react-redux";


function Group() {

    const [ showInput, setShowinput ] = useState(false);
    const [ group, setGroup ] = useState("");
    const [ one, setOne ] = useState("");
    const [ two, setTwo ] = useState("");
    const [ three, setThree ] = useState("");

    let length = group.length;

    // dispatch an action
    const dispatch = useDispatch()


    // get item from local storage
    let admin_name = localStorage.getItem("name");
    let admin_email = localStorage.getItem("email");

    const navigate = useNavigate();

    // create group function
    function createGroup() {

        const mem = [];
        one.length > 0 ? mem.push(one) : '';
        two.length > 0 ? mem.push(two) : '';
        three.length > 0 ? mem.push(three) : '';

        if (group.length > 0) {
            // store group in redux store
            dispatch(addGroup(group)); 
            setTimeout(()=> {
                navigate("/dashboard")
            }, 1000)  
        }

        if (mem.length > 0) {
            dispatch(addMembers(mem));
        }
        else {
            dispatch(addMembers([]));
        }
    }

    useEffect(()=> {

        if (group.length > 0) {
            setShowinput(true);
        }
        else {
            setShowinput(false);
        }

    }, [length])

    return(
        <>
            <div className="signup w-screen h-auto pb-14 flex justify-center items-start pt-20 gap-12">
                
                <div>
                    <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
                    height="200px" width="200px"/>
                </div>
                <div className="h-auto w-96">
                    <h2 className="text-gray-500">
                        START A NEW GROUP
                    </h2>
                    <h1 className="text-2xl mt-4 mb-1">
                        My group shall be called
                    </h1>
                    <input onChange={(e) => setGroup(e.target.value)}
                        type="text" className="border-2 py-3 text-xl px-2 w-full
                        focus:outline-2 outline-cyan-500 focus:shadow-xl transition-all duration-300 mb-6" required placeholder="Funkytown"/>
                    
                    {
                        showInput &&
                        <div className="transition-all duration-300 w-full mb-2">
                            <h1 className="text-xl text-gray-400 mb-2">
                                Group Members
                            </h1>
                            <p className="mb-2">Tip: Lots of people to add? Send your friends an invite link.</p>
                            <div className="flex items-center gap-2 mb-4">
                                <img src="/user-logo.png" className="rounded-full w-7"/>
                                <h2>{admin_name} ({admin_email})</h2>
                            </div>

                            <div className="members mb-2 flex flex-col gap-2">
                                <div className="flex items-center gap-1">
                                    <img src="/user-logo.png" className="rounded-full w-7"/>
                                    <input onChange={(e)=> setOne(e.target.value)} type="text" className="py-1 px-2 w-32 border-2" placeholder="Name"/>
                                    <input type="email" className="py-1 px-2 w-72 border-2" placeholder="Email address (optional)"/>
                                    <span className="px-1 cross">❌</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <img src="/user-logo.png" className="rounded-full w-7"/>
                                    <input onChange={(e)=> setTwo(e.target.value)} type="text" className="py-1 px-2 w-32 border-2" placeholder="Name"/>
                                    <input type="email" className="py-1 px-2 w-72 border-2" placeholder="Email address (optional)"/>
                                    <span className="px-1 cross">❌</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <img src="/user-logo.png" className="rounded-full w-7"/>
                                    <input onChange={(e)=> setThree(e.target.value)} type="text" className="py-1 px-2 w-32 border-2" placeholder="Name"/>
                                    <input type="email" className="py-1 px-2 w-72 border-2" placeholder="Email address (optional)"/>
                                    <span className="px-1 cross">❌</span>
                                </div>
                            </div>
                            
                            <p className="text-blue-600 text-sm mt-4 mb-7 hover:text-blue-800 cursor-pointer">
                                + Add a person
                            </p>
                            <hr />

                            <div className="mt-4 flex flex-col gap-4 mb-6">
                                <h1 className="text-gray-400 text-xl">GROUP TYPE</h1>
                                <button className="text-sm w-20 py-1 px-2 bg-gray-200 hover:bg-gray-300 rounded-md">
                                    Home ~
                                </button>
                                <h1 className="text-gray-400 text-xl">SETTLE UP DAY: OFF</h1>
                                <p className="text-sm text-gray-600">
                                    Currently, the settle up day can only be changed on the Splitwise app. Please use the app to update this setting.
                                </p>
                            </div>

                            <hr />

                            <p className="text-blue-600 text-sm mt-4 mb-7 hover:text-blue-800 cursor-pointer">
                                Advanced settings
                            </p>
                        </div>
                    
                    }
                    

                    <div className="w-full flex justify-start items-center py-1 gap-7 transition-all duration-300">
                        <button onClick={createGroup} className="signup-btn w-32 py-1 px-1 rounded-lg text-white hover:bg-cyan-500 transition-all duation-150">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Group;