import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

    const [ isSign, setIsSign ] = useState(false);
    const [ showDrop, setShowDrop ] = useState(false);
    const [ username, setUsername ] = useState("");

    // get item from local storage
    let name = localStorage.getItem("name");
    let nameLength = name.length;

    // navigate
    const navigate = useNavigate();

    // dropdown function
    function dropdown() {
        setShowDrop(!showDrop);
    }

    // logout function
    function logout() {
        localStorage.setItem("name", 'null');
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        setShowDrop(false)

        setTimeout(()=> {
            navigate("/");
        }, 1000)
    }
    
    useEffect(()=> {
        if (name && name != "null") {
            setIsSign(true);
            setUsername(name);
        }
        else {
            setIsSign(false);
        }
    }, [nameLength])
    

    return (
        <>
            <header>
                {
                    isSign ?
                    <>

                        <nav className="w-screen h-12 bg-teal-300 flex justify-between items-center px-24 lg:px-40 overflow-hidden">
                            <img className='cursor-pointer' id="logo" src="/Splitwise_logo.svg.png"/>
                            <div className="h-16 flex justify-center items-center gap-2 w-auto px-4">
                                <img src="/user-logo.png" className="rounded-full w-7"/>
                                <p>{username}</p>
                                <i onClick={dropdown} className="cursor-pointer">▼</i>
                            </div>
                            
                            <div className={`dropdown absolute right-40 top-10 bg-white shadow-2xl rounded-lg py-2 z-50
                                    ${showDrop ? "block" : "hidden"}`}>
                                <ul className="text-sm flex flex-col gap-1">
                                    <li className="cursor-pointer hover:bg-teal-400">
                                        <span className="px-3">Your account</span>
                                    </li>
                                    <li className="cursor-pointer hover:bg-teal-400">
                                        <span className="px-3">Create a group</span>
                                    </li>
                                    <li className="cursor-pointer hover:bg-teal-400">
                                        <span className="px-3">Fairness calculators</span>
                                    </li>
                                    <li className="cursor-pointer hover:bg-teal-400">
                                        <span className="px-3">Contact support</span>
                                    </li>
                                    <li onClick={logout} className="cursor-pointer hover:bg-teal-400">
                                        <span className="px-3">Logout</span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    
                    </>

                    :

                    <>
                        <nav className="w-screen h-20 bg-white flex justify-between items-center px-24 lg:px-40">
                            <img className='cursor-pointer' id="logo" src="Splitwise_logo.svg.png"/>
                            <div className="h-16 flex justify-center items-center gap-2 w-auto px-4">
                                <Link to="/login">
                                    <button id="login" className="text-green-300">Log in</button>
                                </Link>
                                
                                <Link to="/signup">
                                    <button id="signup" className="text-white px-2 py-2 rounded-lg">Sign up</button>
                                </Link>
                                
                            </div>
                        </nav>           
                    </>
                }
                
            </header>
        </>
    )
}

export default Header;