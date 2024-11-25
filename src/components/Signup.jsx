import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


function Signup() {

    // states for input data
    const [ inputText, setInputText ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("")
    const [ showInput, setShowinput ] = useState(false);

    // navigate
    const navigate = useNavigate();

    function signFunc() {
        if (inputText != "" && email != "" && password != "") {
            localStorage.setItem("name", `${inputText}`);
            localStorage.setItem("email", `${email}`);
            localStorage.setItem("password", `${password}`);

            // navigate to dashboard page
            setTimeout(()=> {
                navigate("/dashboard")
            }, 2000)
        }
        else {
            setError("Set all fields carefully");
            setTimeout(() => {
                setError("");
            }, 2000)
        }
    }

    useEffect(()=> {
        if (inputText.length > 0) {
            setShowinput(true);
        }
        else {
            setShowinput(false)
        }
    }, [inputText])


    return(
        <>
            <div className="signup w-screen h-screen flex justify-center items-start pt-20 gap-12">
                
                {
                    error.length > 0 &&
                    <h1 className="bg-black py-2 w-9/12 text-center text-white text-xl absolute top-20">
                        {error}
                    </h1>
                }

                <div className="hidden md:block">
                    <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
                    height="200px" width="200px"/>
                </div>
                <div className="h-auto w-96">
                    <h2 className="text-gray-500">
                        INTRODUCE YOURSELF
                    </h2>
                    <h1 className="text-2xl mt-4 mb-1">
                        Hi there! My name is
                    </h1>
                    <input onChange={(e) => setInputText(e.target.value)}
                        type="text" className="border-2 py-2 px-2 w-full
                        focus:outline-2 outline-cyan-500 focus:shadow-xl transition-all duration-300 mb-6" required/>
                    
                    {
                        showInput &&
                        <div className="transition-all duration-300 w-full mb-7">
                            <label htmlFor="email" className="text-lg">
                                Here’s my <b>email address</b>:
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} 
                                id="email" type="email" className="border-2 py-2 px-2 w-full
                                focus:outline-2 outline-cyan-500 focus:shadow-xl transition-all duration-300 mb-6 mt-2" required/>
                            
                            <label htmlFor="password" className="text-lg">
                                And here’s my <b>password</b>:
                            </label>
                            <input onChange={(e) => setPassword(e.target.value)} 
                                id="password" type="password" className="border-2 py-2 px-2 w-full
                                focus:outline-2 outline-cyan-500 focus:shadow-xl transition-all duration-300 mt-2" required/>
                        </div>
                    }
                    

                    <div className="mt-4 w-full flex justify-start items-center py-1 gap-7 transition-all duration-300">
                        <button onClick={signFunc} className="signup-btn py-3 px-2 rounded-lg text-white hover:bg-cyan-500 transition-all duation-150">
                            Sign me up!
                        </button>
                        <span>or</span>
                        <button className="border-2 py-1 px-2">
                            Sign up with Google
                        </button>
                    </div>
                    <p className="text-sm text-blue-500 cursor-pointer hover:underline hover:text-slate-700">
                        By signing up, you accept the Splitwise Terms of Service.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Signup;