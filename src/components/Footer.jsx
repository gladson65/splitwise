
function Footer() {
    return (
        <>
            <div className="footer w-screen h-auto pt-14">
                <div className="footer-links grid grid-cols-3 px-2 lg:px-0">
                    <div className="flex flex-col items-center text-sm lg:text-lg">
    
                        <ul>
                            <li className="text-teal-500">
                                Splitwise
                            </li>
                            <li>About</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Calculators</li>
                            <li>API</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                        
                        <ul>
                            <li className="text-orange-600">
                                Account
                            </li>
                            <li>Log in</li>
                            <li>Sign up</li>
                            <li>Reset password</li>
                            <li>Settings</li>
                            <li>Splitwise Pro</li>
                            <li>Splitwise Pay</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                       
                        <ul>
                            <li className="text-slate-700">
                                More
                            </li>
                            <li>Contact us</li>
                            <li>FAQ</li>
                            <li>Terms of Service</li>
                            <li>Privacy</li>
                            <li>
                                <i className="mr-2 cursor-pointer hover:text-teal-500">𝕏</i>
                                <i className="mr-2 cursor-pointer hover:text-teal-500">ⓕ</i>
                                <i className="mr-2 cursor-pointer hover:bg-teal-500">🅾</i>
                            </li>
                            <li> -</li>
                        </ul>
                    </div>
                </div>

                {/* footer box */}
                <div className="h-auto py-1 flex justify-center items-center gap-7 mt-7">
                    <div className="h-14 w-32 overflow-y-hidden 
                        flex justify-center items-center">
                        <img src="/playstore.png" width="100%" className="bg-black rounded-lg"/>                
                    </div>
                    <div className="h-14 w-32 overflow-y-hidden
                        flex justify-center items-center">
                        <img src="/applestore.png" width="100%" className="bg-black h-14 rounded-lg"/>
                    </div>
                </div>

                <p className="text-center mt-4">
                    Made with :) in Providence, INDIA
                </p>

                <div className="footer-img h-40 overflow-hidden">
                    <img src="/footer.png" width="100%"/>
                </div>
            </div>
        </>
    )
}

export default Footer;