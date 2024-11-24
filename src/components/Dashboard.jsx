import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Expense from "./Expense";
import ExpenseForm from "./ExpenseForm";
import ExpenseCard from "./ExpenseCard";
import SettleUp from "./SettleUp";


function Dashboard() {

    // state fot store groups
    const [ groups, setGroups ] = useState([]);
    const [ groupMembers, setGroupMembers ] = useState([]);
    const [ groupIndex, setGroupIndex ] = useState();
    const [ memberIndex, setMemberIndex ] = useState();
    const [ toggleExpense, setToggleExpense ] = useState(false);
    const [ toggleSettle, setToggleSettle ] = useState(false);
    const [ expenses, setExpenses ] = useState([]);
    const [ sharingMember, setSharingMember ] = useState([])
    const [ devide, setDevide ] = useState();
    const [ year, setYear ] = useState();
    const [ month, setMonth ] = useState()

    // get name from local storage
    const username = localStorage.getItem("name");

    // subscribe to the store
    const groupData = useSelector((store) => store.group.groups);
    const members = useSelector((store) => store.group.members);
    const expenseDetails = useSelector((store) => store.group.expense);

    // select group function
    function selectGroup(e) {
        let select = e.target.innerText;
        let group = select.split(" ")        
        let index = groups.indexOf(group[1])
        setMemberIndex(index);
        setGroupIndex(index);
    }

    // add expense function
    function addExpense() {
        setToggleExpense(!toggleExpense);
    }

    // function for toggle settle up form
    function settleUpToggle() {
        setToggleSettle(!toggleSettle);
    }



    useEffect(()=> {

        setTimeout(()=> {
            setGroups(groupData);
            setGroupMembers(members)
            setExpenses(expenseDetails);
            setGroupIndex(groups.length - 1);
            setMemberIndex(members.length - 1);
            setSharingMember(members);
            console.log(members)
            console.log(expenseDetails)
        }, 1000)
        
    }, [groups, expenses, members, expenseDetails])


    return (
        <>
            <div className={`dashboard-page w-screen h-screen flex justify-center lg:px-60 gap-3 ${toggleExpense ? "opacity-25": '' } ${toggleSettle ? "opacity-25":''}`}>
                <div className="leftmenu w-1/5">
                    <div>
                        <h1 className="flex items-start gap-2 pt-2 mb-2">
                            <span className="bg-teal-400 w-2 h-full"><span className="text-teal-400">_</span></span>
                            <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" 
                                className="w-5"/>
                                
                            Dashboard
                        </h1>

                        <h1 className="mb-2 pl-4">
                            <span className="text-sm">🏳️</span> Recent activity
                        </h1>

                        <h1 className="pl-4 mb-2">
                            <span className="text-sm">☰</span> All expenses
                        </h1>
                    </div>

                    <div className="mt-2 text-gray-500">
                        <div className="flex items-center justify-between py-1 px-1 bg-gray-100 hover:bg-gray-200">
                            <h1 className="text-sm">
                                GROUPS
                            </h1>
                            <Link to="/groups/new">
                                <button className="text-sm hover:text-teal-500">
                                    <span className="add"><sup>➕</sup></span> add
                                </button>
                            </Link>
                        </div>
                        <div className={`flex ${groups == null? "" : 'flex-col gap-1'} items-senter h-auto`}>
                            
                            {
                                groups.length > 0 ?                                
                                groups.map((group , i) => {
                                    return (
                                        <p onClick={selectGroup} key={i} className="text-black text-sm pl-2 cursor-pointer hover:text-teal-400 active:text-teal-400">
                                            🏷️ {group}
                                        </p>
                                    )
                                })
                                :
                                <>
                                    <p className="text-center text-sm mt-2">
                                        You do not have any groups yet.
                                    </p>
                                </>
                                
                                
                                
                            }
                            
                        </div>
                    </div>

                    <div className="mt-2 text-gray-500">
                        <div className="flex items-center justify-between py-1 px-1 bg-gray-100 hover:bg-gray-200">
                            <h1 className="text-sm">
                                FRIENDS
                            </h1>
                            <button className="text-sm hover:text-teal-500">
                            <span className="add"><sup>➕</sup></span> add
                            </button>
                        </div>
                        <div className={`flex justify-center items-senter ${members.length > 0 ? "flex-col gap-2" : ""}`}>
                            
                            {
                                groupMembers.length > 0 ?                                
                                groupMembers[memberIndex].map((member , i) => {
                                    return (
                                        <p key={i} className="text-black text-sm pl-2 cursor-pointer hover:text-teal-400 active:text-teal-400">
                                            {member}
                                        </p>
                                    )
                                })
                                :
                                <>
                                    <p className="text-center text-sm px-2 mt-2">
                                        You have not added any friends yet.
                                    </p>
                                </>
                                
                                
                                
                            }
                            
                            
                            
                        </div>
                    </div>

                    <div className="border-2 mt-4">
                        <h1 className="bg-teal-400 text-white border-2">Invite friends</h1>
                        <input type="email" className="py-1 w-11/12 ml-2 mt-1 px-2 border-2" placeholder="enter an email"/>
                        <button className="w-1/2 bg-gray-200 text-sm px-1 py-2 mt-2 ml-2 rounded-lg mb-1 hover:bg-gray-300">
                            Send invite
                        </button>
                    </div>

                    <div className="flex justify-center px-1 py-2 gap-2 mt-4">
                        <button className="w-1/2 h-6 lg:h-8 overflow-hidden">
                            <img src="/f.png" className="w-full"/>
                        </button>
                        <button className="w-1/2 h-6 lg:h-8 overflow-hidden">
                            <img src="/twt.jpg"/>
                        </button>
                    </div>
                </div>

                <div className="dashboard-content border-2 w-3/5 shadow-2xl">

                    <div className="dash-header bg-gray-200 flex justify-between items-center py-2 px-4">
                        <h1 className="text-2xl font-bold">
                            {
                                groupData.length > 0 && groupData != undefined ?
                                groupData[groupIndex]
                                :

                                <>
                                    Dashboard
                                </>
                            } 
                        </h1>
                        <div className="flex justify-center items-center gap-2 w-auto px-1">
                            <button onClick={addExpense} className="bg-orange-500 text-white text-sm py-2 px-2 rounded-lg hover:bg-orange-600">
                                Add an expense
                            </button>
                            <button onClick={settleUpToggle} className="bg-teal-400 text-white text-sm py-2 px-2 rounded-lg hover:bg-teal-500">
                                Settle up
                            </button>
                        </div>
                    </div>
                        
                    {
                        expenses.length > 0 ?
                        <>
                            <div className="bg-gray-200 flex justify-between px-2">
                                <p>{month} {year}</p>
                                <p className="text-sm text-blue-400">view printable summary</p>
                            </div>
                            <div className="dash-content h-auto flex flex-col gap-2">
                                {
                                    expenseDetails.map((item, i) => {
                                        return <ExpenseCard key={i} id={i} data={item} setDevide={setDevide} setYear={setYear} setMonth={setMonth}/>
                                    })
                                }
                            </div>
                        </>
                        :

                        <div className="dash-content">

                            {
                                groups.length > 0 ?

                                <Expense data={groups[groupIndex]} />
                                

                                :

                                <>

                                    <div className="flex justify-center items-center pt-7">
                                        <div className="px-2">
                                            <img src="/welcome-img.png" width="140px"/>
                                        </div>
                                        <div className="flex flex-col gap-2 py-2 px-2">
                                            <h1 className="text-3xl py-1 font-bold">
                                                Welcome to Splitwise!
                                            </h1>
                                            <h2 className="text-gray-500 text-lg w-11/12">
                                                Splitwise helps you split bills with friends.
                                            </h2>
                                            <p className="text-gray-500 text-lg w-11/12">
                                                Click “Add an expense” above to get started, or invite some friends first!
                                            </p>

                                            <button className="bg-orange-500 text-white text-xl w-3/4 py-2 rounded-lg">
                                                Add friends on Splitwise
                                            </button>
                                        </div>
                                    </div>
                                
                                </>
                            }
                            
                        </div>


                    }    
                    

                </div>

                {
                    groups.length > 0 &&
                    <>
                    
                    <div className="rightmenu w-1/5">
                        <div className="flex items-center justify-between mt-2">
                            <span className="border-2 px-1 cursor-pointer">☰</span>
                            <span className="border-2 px-1 cursor-pointer">🗒</span>
                            <span className="border-2 px-1 cursor-pointer">📊</span>
                            <span className="border-2 px-1 cursor-pointer">🗨</span>
                            <span className="border-2 px-1 cursor-pointer">⚙️</span>
                        </div>

                        <h1 className="text-sm text-gray-500 mt-4">GROUP BALANCES</h1>

                        <div className="flex items-center gap-2 mt-4 hover:bg-gray-200 cursor-pointer p-1">
                            <img src="/user-logo.png" className="rounded-full w-10"/>
                            <div >
                                <h1 className="text-md">{username}</h1>
                                <p style={{fontSize: '12px'}}>Settled up</p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col h-auto gap-4 pb-2 mb-7 mt-7">
                            {
                                    sharingMember ?
                                    sharingMember.map((member, i) => {
                                        
                                        return(
                                        <>
                                        <div key={i}>
                                            <div className="flex items-center gap-3 hover:bg-gray-200 cursor-pointer p-1">
                                                <img src="/member-logo.png" className="rounded-full w-10"/>
                                                <div>
                                                    <p>{member[0]}</p>
                                                    <p style={{fontSize: '11px'}}>Owes: <span className="text-red-500 text-sm">{devide}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 hover:bg-gray-200 cursor-pointer p-1">
                                                <img src="/member-logo.png" className="rounded-full w-10"/>
                                                <div>
                                                    <p>{member[1]}</p>
                                                    <p style={{fontSize: '11px'}}>Owes: <span className="text-red-500 text-sm">{devide}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 hover:bg-gray-200 cursor-pointer p-1">
                                                <img src="/member-logo.png" className="rounded-full w-10"/>
                                                <div>
                                                    <p>{member[2]}</p>
                                                    <p style={{fontSize: '11px'}}>Owes: <span className="text-red-500 text-sm">{devide}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        </>  
                                        )
                                    })
                                    :
                                    ""
                            }
                        </div>
                        

                        <span className="text-blue-500 hover:text-slate-600 hover:underline cursor-pointer">
                            view details
                        </span>
                    </div>
                    
                    </>
                }
                
                
            </div>
            {
                toggleExpense &&
                <ExpenseForm data={groups[groupIndex]} setToggleExpense={setToggleExpense} members={members[groupIndex]}/>
            }

            {
                toggleSettle &&
                <SettleUp setToggleSettle={setToggleSettle}/>
            }
        </>
    )
}

export default Dashboard;