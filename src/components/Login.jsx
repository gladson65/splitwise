import "../App.css";
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() {

    const navigate = useNavigate();

    // google auth function
    const login = useGoogleLogin({
        onSuccess: async (response) => {
          try {
            const res = await axios.get(
              "https://www.googleapis.com/oauth2/v3/userinfo",
              {
                headers: {
                  Authorization: `Bearer ${response.access_token}`,
                },
              }
            );
            console.log(res);
            navigate("/");
          } catch(error) {
            console.log(error);
          }
        }
    });




    return(
        <>
            <div className="login w-screen h-screen flex justify-center items-center">
                <div className="w-3/4 lg:w-1/2 h-4/5 bg-white shadow-2xl rounded-xl py-4 px-12 lg:px-20">
                    <div className="w-full h-full flex flex-col">
                        <h1 className="text-3xl py-1 mb-5">Log in</h1>
                        <form className="flex flex-col justify-evenly h-3/5 w-full">
                            <label htmlFor="email">Email address</label>
                            <input id="email" type="email" className="border-2 px-2 py-2"/>

                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="border-2 px-2 py-2"/>

                            <button className="bg-teal-400 text-white py-2 rounded-lg mt-4">
                                Log in
                            </button>

                            <h2 className="text-center">Forgot your password?</h2>

                            <h2 className="text-center mt-7">or</h2>

                        </form>
                        
                        <button className="bg-blue-200 mt-10 w-full border-2 rounded-lg mx-auto py-2 shadow-xl" 
                            onClick={()=> login()}>
                            Sign in with google
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;