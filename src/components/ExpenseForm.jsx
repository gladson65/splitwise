import { useState, useEffect } from "react";
import { addExpense } from "../utils/groupSlice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ExpenseForm(props) {

    const groupName = props.data;
    const members = props.members;

    // dispatch an action
    const dispatch = useDispatch();
    // subscribing to the store
    const expenseDetails = useSelector((store)=> store.group.expense);

    // states for expense
    const [ description, setDescription ] = useState("");
    const [ amount, setAmount ] = useState(0);
    const [ devideMoney, setDevideMoney ] = useState(0.00);
    const [ youLent, setYouLent ] = useState(0);
    const [ isLoading, setIsLoading ] = useState()

    
    // data state
    const [ month, setMonth ] = useState();
    const [ date, setDate ] = useState();
    const [ year, setYear ] = useState();

    // cancelPage function
    function cancelPage() {
        props.setToggleExpense(false);
    }

    // save expense function
    function saveExpense() {
        setIsLoading(true);

        const data = [{
            groupName: groupName,
            members: members,
            description: description,
            paid: amount,
            lent: youLent,
            year: year,
            month: month,
            date: date,
            devide: devideMoney
        }]
        dispatch(addExpense(data));

        setTimeout(()=> {
            setIsLoading(false);
            props.setToggleExpense(false);
        }, 2000)
    }


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(()=> {
        let d = new Date()
        let month = d.getMonth();
        let date = d.getDate();
        let year = d.getFullYear()
        setMonth(months[month]);
        setDate(date);
        setYear(year);

        // calculation
        let persons = members.length+1;
        let devide = Math.floor(amount / persons);
        let lent = Math.floor(amount - devide);
        setDevideMoney(devide);
        setYouLent(lent);
        
        
    }, [month, amount]);

    return(
        <>
            <div className="absolute top-0 w-screen h-screen flex justify-center items-center">
                <div className="w-96 h-auto pb-7 bg-white shadow-2xl">
                    <h1 className="flex justify-between items-center text-lg bg-teal-400 text-white px-4 py-2 font-bold">
                        Add an expense <span onClick={cancelPage} className="cursor-pointer">x</span>
                    </h1>
                    
                    <h2 className="py-1 pl-4">
                        With <b>you</b> and: <span className="rounded-xl bg-white px-2 ml-1 text-sm cursor-pointer">All of {groupName}</span>
                    </h2>

                    <div className="mt-3 flex items-center mt-7 pl-3">
                        <img src="/expense-logo.png" width="115px"/>
                        <div className="flex flex-col gap-3">
                            <input onChange={(e)=> setDescription(e.target.value)} 
                                type="text" className="w-60 border-b-2 border-dashed py-1 text-lg px-2 outline-0" placeholder="Enter a description"/>
                            
                            <input onChange={(e)=> setAmount(e.target.value)} 
                                type="number" className="w-60 border-b-2 border-dashed py-1 px-2 text-4xl outline-0" placeholder="$ 0.00"/>
                        </div>
                    </div>

                    <p className="py-1 text-center mt-3">Paid by 
                        <span className="text-teal-400 bg-gray-200 py-1 px-1 rounded-xl hover:bg-gray-300 mx-1 cursor-pointer text-sm"> you </span>
                         and split
                        <span className="text-teal-400 bg-gray-200 py-1 px-1 rounded-xl hover:bg-gray-300 mx-1 cursor-pointer text-sm"> equally</span>
                    </p>

                    <p className="text-center">
                        (${devideMoney}/person)
                    </p>

                    <div className="flex justify-evenly items-center mt-3">
                        <button className="px-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-xl">
                            {month} {date} {year}
                        </button>
                        <button className="px-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-xl">
                            Add image/notes
                        </button>
                    </div>

                    <div className="flex justify-center items-center mt-3">
                        <button className="px-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-xl">
                            {groupName}
                        </button>
                    </div>

                    <div className="py-1 flex justify-end items-center gap-2 pr-2 mt-4">
                        <button onClick={cancelPage} className="py-2 w-20 bg-gray-200 hover:bg-gray-300 rounded-md">
                            Cancel
                        </button>
                        <button onClick={saveExpense} className={`py-2 w-20 bg-teal-400 hover:bg-teal-600 text-white rounded-md
                                ${isLoading && 'cursor-wait'}`}>
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ExpenseForm;