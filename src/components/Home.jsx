import Landing from "./Landing";
import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import Welcome from "./Welcome";
import { useState, useEffect } from "react";

function Home() {

    const [ toggleContent, setToggleContent ] = useState(false);

    // get item from local storage
    let name = localStorage.getItem("name");
    let nameLength = name.length;


    useEffect(()=> {
        if (name && name != "null") {
            setToggleContent(true);
        }
        else {
            setToggleContent(false);
        }
    }, [nameLength])

    return (
        <>
            {
                toggleContent ?
                <Welcome />

                :

                <>
                    <Landing />
                    <About />
                    <Features />
                    <Footer />    
                </>
            }
            
        </>
    )
}

export default Home;