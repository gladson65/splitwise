import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../utils/groupSlice";

function ExpenseCard(props) {

    const {date, description, groupName, lent, month, paid, year} = props.data;
    let d = String(month);
    
    const [ expenses, setExpenses ] = useState([]);

    // dispatch an action
    const dispatch = useDispatch()

    const [ toggle, setToggle ] = useState(false) 

    function removeExpense() {
        dispatch(deleteExpense(props.id))
    }
 
    console.log("props", props.data)

    // useEffect(()=> {

    //     setExpenses(props);

    //     // setTimeout(() => {
            
    //     // }, 1000);
        
    // }, [props])


    return(
        <>

            {
                props.data.map((item, i) => {
                    if (item.id == props.groupIndex) {

                    
                    props.setDevide(item.devide)
                    props.setYear(item.year)
                    props.setMonth(item.month)
                    return (
                        <>
                            <div key={props.id} className={`flex flex-col border-b-2 py-1 relative`}>
                            <div className="flex justify-between items-center pl-2">
                                <div className="flex gap-2">
                                    <div>
                                        <p className="text-center">{String(item.month).slice(0,3)}</p>
                                        <p className="text-center">{item.date}</p>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <img src="/expense-logo.png" width="40px"/>
                                        <h1>{item.description}</h1>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pr-12">
                                    <div>
                                        <p style={{fontSize:'12px'}}>you paid</p>
                                        <p>$ {item.paid}</p>
                                    </div>
                                    <div>
                                        <p style={{fontSize:'12px'}}>you lent</p>
                                        <p className="text-teal-500">$ {item.lent}</p>
                                    </div>
                                </div>

                                <div className="absolute right-2">
                                    <button onClick={removeExpense} className="text-red-500 hover:text-red-700">
                                        X
                                    </button>
                                </div>
                            </div>
                        </div>

                        </>
                    )
                    }
                })
            }
            
        </>
    )
}

export default ExpenseCard;




// props.data.map((item, i) => {
                //     props.setDevide(item.devide)
                //     props.setYear(item.year)
                //     props.setMonth(item.month)
                //     return (
                //         <>
                //             <div key={i} className={`flex flex-col border-b-2 py-1 relative`}>
                //             <div className="flex justify-between items-center pl-2">
                //                 <div className="flex gap-2">
                //                     <div>
                //                         <p className="text-center">{String(item.month).slice(0,3)}</p>
                //                         <p className="text-center">{item.date}</p>
                //                     </div>
                //                     <div className="flex justify-start items-center gap-2">
                //                         <img src="/expense-logo.png" width="40px"/>
                //                         <h1>{item.description}</h1>
                //                     </div>
                //                 </div>
                //                 <div className="flex items-center gap-4 pr-12">
                //                     <div>
                //                         <p style={{fontSize:'12px'}}>you paid</p>
                //                         <p>$ {item.paid}</p>
                //                     </div>
                //                     <div>
                //                         <p style={{fontSize:'12px'}}>you lent</p>
                //                         <p className="text-teal-500">$ {item.lent}</p>
                //                     </div>
                //                 </div>

                //                 <div className="absolute right-2">
                //                     <button onClick={removeExpense} className="text-red-500 hover:text-red-700">
                //                         X
                //                     </button>
                //                 </div>
                //             </div>
                //         </div>

                //         </>
                //     )
                // })