import { useState, useEffect, useRef } from "react";
import "../App.css";

function Landing() {

    // state for text
    const [ text, setText ] = useState("");
    // state for url
    const [ url, setUrl ] = useState("");
    // state for count
    const [ count, setCount ] = useState(0);
    
    let val = useRef(0);

    // storing dynamic changes texts 
    const texts = ["on trips", "with housemates", "with your partner", "with anyone"];
    // storing icons url
    const iconUrl = ["/flight.png", "/home.png", "/heart.png", "/any.png"] ;

    useEffect(()=> {

        // fade in
        setTimeout(()=> {
            document.querySelector("#img").style.opacity = 1;
        }, 500)
        // fade out
        setTimeout(()=> {
            document.querySelector("#img").style.opacity = 0;
        }, 10000)
    
        let timerId = setInterval(()=> {

            if (count > 2) {
                setCount(0);
            }
            else {
                setCount(count + 1);
            }
            
        }, 12000);
        


        return () => {
            clearInterval(timerId);
        }
        
    }, [count])
    

    return(
        <>
            {/* landing page section */}
            <main className="main w-screen flex lg:flex-row justify-center items-center lg:gap-32 px-32 py-8 
                    flex-col gap-2">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:gap-4 gap-4 text-center">
                    <h1 className="w-full text-3xl lg:text-4xl lg:w-1/2 py-1 overflow-hidden">Less stress when sharing expenses</h1>
                    <h1 className={`text-xl lg:text-4xl w-full lg:w-auto py-1 transition-all delay-500 duration-700 ${count == 0 && 'text-teal-300'}
                        ${count == 1 && 'text-purple-500'} ${count == 2 && 'text-red-500'} ${count == 3 && 'text-teal-300'} overflow-hidden`}>
                        {texts[count]}.
                    </h1>
                    <div className="w-auto px-2 py-2 h-22 overflow-hidden">
                        <ul className="w-full flex justify-evenly items-center gap-7 py-1 overflow-hidden">
                            <li className={`${count == 0 && 'bg-black rounded-full'} p-2 transition-all delay-150 duration-700`}>
                                <img src="flight.png" className={`w-10`}/>
                            </li>
                            <li className={`${count == 1 && 'bg-green-300 rounded-full'} p-2 transition-all delay-150 duration-700`}>
                                <img src="home.png" className="w-9 purple-400"/>
                            </li>
                            <li className={`${count == 2 && 'bg-purple-500 rounded-full'} transition-all delay-150 duration-700`}>
                                <img src="heart.png" className="w-14"/>
                            </li>
                            <li className={`${count == 3 && 'bg-teal-400 rounded-full'} transition-all delay-150 duration-700`}>
                                <img src="any.png" className="w-14"/>
                            </li>
                        </ul>
                    </div>

                    <p className="w-1/2 hidden lg:block">Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
                    <button id="signup" className="w-40 hidden lg:block text-white px-2 py-4 rounded-lg">Sign up</button>
                    <p className="hidden lg:block">Free for  
                        <span> <i className="fa-brands fa-apple"></i> </span> iphone, 
                        <span> <i className="fa-brands fa-android"></i> </span> Android, 
                        and web
                    </p>
                </div>
                <div className="w-1/2 justify-center hidden lg:block overflow-hidden">
                    <img id="img" className="transition-all duration-300" src={iconUrl[count]} width="400px" height="400px"/>
                </div>
                {/* for medium and less screen size */}
                <div className="w-1/2 justify-center h-82 py-2 lg:hidden overflow-hidden">
                    <img id="img" className="transition-all duration-300" src={iconUrl[count]} width="400px" height="400px"/>
                </div>
                
                {/* for medium and less screen size */}
                <div className="lg:hidden w-full h-52 px-2 flex flex-col gap-4 items-center text-center">
                    <button className={`w-40 lg:hidden text-white px-2 py-4 rounded-lg transition-all duration-300
                        ${count == 0 && 'bg-black'} ${count == 1 && 'bg-green-400 text-black'} ${count == 2 && 'bg-purple-500'} ${count == 3 && 'bg-teal-400 text-black'}`}>
                        Sign up
                    </button>
                    <p className="para w-full lg:hidden">Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
                    <p className="lg:hidden">Free for  
                        <span> <i className="fa-brands fa-apple"></i> </span> iphone, 
                        <span> <i className="fa-brands fa-android"></i> </span> Android, 
                        and web
                    </p>
                </div>
            </main>
        </>
    )
}

export default Landing;