

function SettleUp(props) {

    // function for cancel settle page
    function cancelSettle() {
        props.setToggleSettle(false)
    }

    return(
        <>

            <div className="absolute top-0 w-screen h-screen flex justify-center items-center">
                <div className="w-96 h-auto pb-7 bg-white shadow-2xl">
                    <h1 className="flex justify-between items-center text-lg bg-teal-400 text-white px-4 py-2 font-bold">
                        Settle up <span onClick={cancelSettle} className="cursor-pointer">x</span>
                    </h1>
                    
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="py-1 pl-4 text-center mt-2">
                            Choose a payment method
                        </h2>

                        <button className="bg-teal-400 text-white py-2 px-1 w-72 rounded-md">
                            Record a cash payment
                        </button>

                        <button className="bg-gray-200 py-2 px-1 w-72 rounded-md">
                            PayPal
                        </button>

                        <p className="text-center px-7" style={{fontSize: '10px'}}>
                            When you use a payment service, your payment is shared with that company under its Privacy Policy and Terms, including any fees if applicable. Splitwise charges no additional fees.
                        </p>
                        
                    </div>

                    <div className="py-1 flex justify-end items-center gap-2 pr-2 mt-4">
                        <button onClick={cancelSettle} className="py-2 w-20 bg-gray-200 hover:bg-gray-300 rounded-md">
                            Cancel
                        </button>
                        <button className="py-2 w-20 bg-teal-400 hover:bg-teal-600 text-white rounded-md">
                            Save
                        </button>
                    </div>
                    
                </div>
            </div>
        
        </>
    )
}

export default SettleUp;