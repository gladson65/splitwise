

function Features() {

    return(
        <>
            <div className="features pt-24">
                <h1 className="text-center text-2xl">The Whole nine yards</h1>

                {/* features lists */}
                <div className="features-lists grid grid-cols-3 mb-4 mt-12">
                    <ul>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Add group and friends</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Split expenses, record debts</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span>Equal or unequal splits</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Split by % or shares</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Calculate total balances</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Simplify debts</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Recurring expenses</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Offline mode</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Cloud sync</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Spending totals</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Categorize expenses</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> 7 + languages</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> 100 + currencies</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Payment integration</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Unlimited expenses</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Transaction import</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span>Currency conversion</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Receipt scanning</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Itemization</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Charts and graphs</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Expense search</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Save default splits</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> A totally ad-free expenses</span>
                        </li>
                        <li>
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Early access to new features</span>
                        </li>
                    </ul>
                </div>

                <div className="w-screen flex justify-center items-center">
                    <ul className="flex justfy-center items-center gap-4">
                        <li className="flex gap-2">
                            <i>
                                <img src="https://assets.splitwise.com/assets/core/core-feature.svg"/>
                            </i>
                            <span> Core features</span>
                        </li>
                        <li className="flex gap-2">
                            <i>
                                <img src="https://assets.splitwise.com/assets/pro/pro-feature.svg"/>
                            </i>
                            <span> Pro features</span>
                        </li>
                    </ul>
                </div>

                {/* features box */}
                <div className="features-div w-screen h-auto px-12 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12 md:p-4">
                        
                        <div className="features-box shadow-2xl drop-shadow-[0px_10px_10px_black]
                            transition-all duration-300 hover:shadow-sm p-7 flex flex-col gap-12">
                            
                            <p className="overflow-y-hidden">
                                "Fundamental" for tracking finance. As good as WhatsApp for containing awkwardness.
                            </p>
                            <div className="flex items-center gap-4 overflow-hidden">
                                <i className="w-14">
                                    <img src="/ft.png"/>
                                </i>
                                <span>Financial Times</span>
                            </div>
                        </div>

                        <div className="features-box shadow-2xl drop-shadow-[0px_10px_10px_black]
                            transition-all duration-300 hover:shadow-sm p-7 flex flex-col gap-12">
                            
                            <p className="overflow-y-hidden">
                                Life hack for group tips. Amazing tool to use when traveling with friends! Makes life so easy.
                            </p>
                            <div className="flex items-center gap-4 overflow-hidden">
                                <i className="w-14">
                                    <img src="/bi.png"/>
                                </i>
                                <span>Ahah S, iOS</span>
                            </div>
                        </div>

                        <div className="features-box shadow-2xl drop-shadow-[0px_10px_10px_black]
                            transition-all duration-300 hover:shadow-sm p-7 flex flex-col gap-12">
                            
                            <p className="overflow-y-hidden">
                                Makes it easy to split everything from your dinner bill to rent.
                            </p>
                            <div className="flex items-center gap-4 overflow-hidden">
                                <i className="w-14">
                                    <img src="/ny.png"/>
                                </i>
                                <span>NY Times</span>
                            </div>
                        </div>

                        <div className="features-box shadow-2xl drop-shadow-[0px_10px_10px_black]
                            transition-all duration-300 hover:shadow-sm p-7 flex flex-col gap-12">
                            
                            <p className="overflow-y-hidden">
                                So amazing to have this app manage balance and help keep money out of relationships. Love it!
                            </p>
                            <div className="flex items-center gap-4 overflow-hidden">
                                <i className="w-14">
                                    <img src="/bi.png"/>
                                </i>
                                <span>Haseena C, Android</span>
                            </div>
                        </div>

                        <div className="features-box shadow-2xl drop-shadow-[0px_10px_10px_black]
                            transition-all duration-300 hover:shadow-sm p-7 flex flex-col gap-12">
                            
                            <p className="overflow-y-hidden">
                                I never fight with roommates over bills because of this genius expense-splitting app.
                            </p>
                            <div className="flex items-center gap-4 overflow-hidden">
                                <i className="w-14">
                                    <img src="/bi.png"/>
                                </i>
                                <span>Business Insider</span>
                            </div>
                        </div>

                        <div className="features-box shadow-2xl drop-shadow-[0px_10px_10px_black]
                            transition-all duration-300 hover:shadow-sm p-7 flex flex-col gap-12">
                            
                            <p className="overflow-y-hidden">
                                I use it everyday. I use it for trips, roommates, loans. I love splitwise
                            </p>
                            <div className="flex items-center gap-4 overflow-hidden">
                                <i className="w-14">
                                    <img src="/bi.png"/>
                                </i>
                                <span>Trickseyus, iOS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;