
import "../App.css"

function About() {
    return (
        <>
            <div className="about w-screen grid lg:grid-cols-2">
                <div className="track overflow-y-hidden flex justify-center">
                    <div className="w-2/5 h-full flex flex-col items-center pt-8">
                        <h1 className="py-1 text-2xl text-center text-white">
                            Track balance
                        </h1>
                        <p className="py-1 px-7 text-center text-white">
                            Keep track of shared expenses, balances, and who owes who.
                        </p>
                        <img src="/track.png" className="pt-4"/>
                    </div>
                </div>

                <div className="organize overflow-y-hidden flex justify-center">
                    <div className="w-2/5 h-full flex flex-col items-center pt-8">
                        <h1 className="py-1 text-2xl text-center text-white">
                            Organize expenses
                        </h1>
                        <p className="py-3 lg:py-1 px-2 text-center text-white">
                            Split expenses with any group: trips, housemates, friends, and family.
                        </p>
                        <img src="/organize.png" className="pt-4"/>
                    </div>
                </div>

                <div className="addExpense overflow-y-hidden flex justify-center">
                    <div className="w-2/5 h-full flex flex-col items-center pt-8">
                        <h1 className="py-1 text-2xl text-center text-white">
                            Add expenses easily
                        </h1>
                        <p className="py-1 px-7 text-center text-white">
                            Quickly add expenses on the go before you forget who paid.
                        </p>
                        <img src="/addexpense.png" className="pt-4"/>
                    </div>
                </div>

                <div className="pay overflow-y-hidden flex justify-center">
                    <div className="w-2/5 h-full flex flex-col items-center pt-8">
                        <h1 className="py-1 text-2xl text-center text-white">
                            Pay friends back
                        </h1>
                        <p className="py-1 px-7 text-center text-white">
                            Settle up with a friend and record any cash or online payment.
                        </p>
                        <img src="/pay.png" className="pt-4"/>
                    </div>
                </div>
            </div>

            <div className="pro w-screen h-auto flex justify-evenly pt-32">
                <div className="w-2/5 flex justify-start items-center text-center relative">
                    <div className="w-1/2 flex flex-col justify-center items-center gap-4 absolute left-32">
                        <h1 className="text-2xl text-white">
                            Get even more with PRO
                        </h1>
                        <p className="text-white">
                            Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!
                        </p>
                        <button className="w-40 text-white px-2 py-4 rounded-lg border-2">
                            Sign up
                        </button>
                    </div>
                </div> 

                <div className="w-2/5 flex justify-center items-center pl-14">
                    <img src="/pro.png"/>
                </div>
            </div>
        </>
    )
}

export default About;