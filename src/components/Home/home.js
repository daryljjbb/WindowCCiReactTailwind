import '../Home/home.css';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <section className="bg-black h-auto flex flex-col w-[90%]">
            <div className="w-[100%] flex justify-center"> {/* This is the container that position the text center of the screen  */}
                <div className="mt-12">
                    <div className="text-[#aeaea9] text-xl md:text-2xl lg:text-3xl">
                        Experience What the Cloud
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center"> {/* This is the container that position the text center of the screen  */}
                <div className="mt-2">
                    <div className="text-[#aeaea9] text-xl md:text-2xl lg:text-3xl">
                        Can do for you
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex"> 
                <div className="mt-10 ml-[5%] md:ml-[10%] lg:ml-[20%]">
                    <div className="text-[#aeaea9] text-md md:text-lg lg:text-xl ">
                        <ul  id="top_section_list">
                            <li>Policy Forms</li>
                            <li>Policy Management</li>
                            <li>Dedicated Support</li>
                        </ul>

                        
                    </div>
                </div>
            </div>
            <div className="w-[90%]"> {/* This is the container that position the text center of the screen  */}
                <div className="mt-[10%]">
                    <div className="border-solid border border-gray-500 rounded-lg shadow-lg shadow-violet-500/50 p-4 ml-[10%] w-[90%]">
                        <div className=" text-[#d4d4d0]">Try CCiOnline <span className="text-red-600 text-md font-bold">FREE</span> for 14 days.</div>
                        <div className="w-[100%] flex flex-row">
                            <div className="w-[70%] text-[#d4d4d0] mt-2 text-xs md:text-sm lg:text-md italic font-light">Try any product right now with no obligation.</div>
                            <div className=" w-[100%] flex flex-row justify-end ">
                                <button className="text-red-600 border border-solid border-gray-500 rounded-md shadow-lg shadow-violet-500/50 p-4 ml-3 "><NavLink to="/demo">Free Demo</NavLink></button>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center"> {/* This is the container that position the text center of the screen  */}
                <div className="mt-[8%]">
                    <div className="text-[#aeaea9] italic text-xl md:text-2xl lg:text-3xl">
                    Simply Better Agency Management
                    </div>
                </div>
            </div>

            <section className="w-[100%] flex flex-col justify-center lg:flex lg:flex-row mt-[5%]">
                <div className="w-[100%] flex justify-center"> {/* This is the container that positions the text center of the screen */}
                    <div className="w-[100%] flex justify-center">
                        <div className="w-[100%] flex justify-center mt-[8%] lg:flex lg:flex-row">
                        <div className="card w-[60%] p-4 bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg">
                            <div className="card_image text-center ">⌛</div>
                            <div className="card_title font-bold text-red-600 text-center">Save Time</div>
                            <p className="home_card_body text-[#d4d4d0] text-center mt-[5%]">Intuitive and easy to use, our software offers a great user experience which means less time spent on input and more time spent on sales.</p>
                            <button className="flex flex-row w-[100%] justify-center text-gray-400"><NavLink to="/demo">Try Now</NavLink></button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] flex justify-center "> {/* This is the container that positions the text center of the screen */}
                    <div className="w-[100%] flex justify-center">
                        <div className="w-[100%] flex justify-center mt-8">
                        <div className="card w-[60%] p-4 bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg">
                            <div className="card_image text-center">📈</div>
                            <div className="card_title font-bold text-red-600 text-center">Increase Sales</div>
                            <p className="home_card_body text-[#d4d4d0] text-center mt-[5%]">Tools you need to get and keep business, like fast and accurate quoting,
                            custom letter generator, and extensive reports.</p>
                            <button className="flex flex-row w-[100%] justify-center text-gray-400"><NavLink to="/demo">Try Now</NavLink></button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] flex justify-center"> {/* This is the container that positions the text center of the screen */}
                    <div className="w-[100%] flex justify-center">
                        <div className="w-[100%] flex justify-center mt-8">
                        <div className="card w-[60%] p-4 bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg">
                            <div className="card_image text-center ">📞</div>
                            <div className="card_title font-bold text-red-600 text-center">Get Results</div>
                            <p className="home_card_body text-[#d4d4d0] text-center mt-[5%]">With the included online agency rater, your customers can shop the carriers
                            you represent on your website from their home computer or mobile device.</p>
                            <button className="flex flex-row w-[100%] justify-center text-gray-400"><NavLink to="/demo">Try Now</NavLink></button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-[100%] flex justify-center"> {/* This is the container that position the text center of the screen  */}
                <div className="mt-[8%]">
                    <div className="text-[#aeaea9] italic">
                        ACCURATE, FAST, COMPLETE
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center"> {/* This is the container that position the text center of the screen  */}
                <div>
                    <div className="text-[#aeaea9] text-center p-4">
                        <p>Built for the Independent Agent and packed with features, CCiOnline are the best choice for agency automation.</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center mt-[5%]"> 
                <div>
                    <div className="w-[15rem] md:w-[20rem] lg:w-[30rem] text-red-600 text-center bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg pt-4 pb-4">
                        CCiOnline Features                       
                    </div>
                    <div className="flex justify-center mt-[10%]" id="feature_list">
                    <ul className="text-[#aeaea9]">
                            <li>Agency Management</li>
                            <li>All Nationwide Forms</li>
                            <li>All State Specific Forms</li>
                            <li>Certificates of Insurance</li>
                            <li>Self-Serve Certificates</li>
                            <li>Print, Email or Download Forms</li>
                            <li>Inter-office Communication</li>
                            <li>Task Calendar</li>
                            <li>Mobile Companion App</li>
                            <li>Extensive Reports</li>
                            </ul>


                    </div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center"> {/* This is the container that position the text center of the screen  */}
                <div className="mt-[8%]">
                    <div className="text-[#aeaea9] italic">
                    YOUR SATISFACTION IS OUR TOP PRIORITY
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center"> {/* This is the container that position the text center of the screen  */}
                <div>
                    <div className="text-[#aeaea9]  text-center p-4 ">
                        <p>Our goal is 100% satisfaction in the products we offer and support we provide.</p>
                    </div>
                </div>
            </div>

            
            
           
        </section>

    )
  };
  
  export default Home;