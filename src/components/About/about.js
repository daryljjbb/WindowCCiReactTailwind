import "../About/about.css"
const About = () => {
    return (
        <section className="bg-black w-[80%] h-auto flex flex-col">
            <div className="bg-indigo-400 text-white text-xl md:text-2xl lg:text-3xl text-center italic font-bold w-[100%] ml-[5%] mt-5 p-8" id="top_header">A business you can rely on for over 30 years.</div>
            <section className="flex flex-col w-[90%] ml-[5%] gap-6 mt-8">
                        <div className="card w-[90%] ml-2 p-4 bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg ">
                            <div className="card_title font-bold text-gray-400 ">Our Story</div>
                            <p className="about_card_body text-[#d4d4d0]">In the early 1980s, brothers Luther and Michael were intrigued by the emergence of affordable
                             personal computing. They read all they could on the subject and even built their own computer from parts they had acquired. To share their
                             knowledge and enthusiasm for this new field, they founded a computer literacy school to teach small business owners how to use this powerful
                             technology. One of their students, an independent insurance agent, asked the prophetic question: "Can personal computers be used to rate and
                             compare multiple insurance companies to find the best rate?" The answer was of course, "Yes". They authored the first version of CCiRater
                             shortly thereafter and introduced comparative rating to the insurance industry.</p>
                        </div>
                        <div className="card w-[90%]  ml-2 p-4  bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg">
                            <div className="card_title font-bold text-gray-400">Pioneers in Comparative Rating</div>
                            <p className="about_card_body text-[#d4d4d0]">Since 1983, CCiComputer Services, Inc. has provided Comparative Rating and Policy Management
                             solutions to independent insurance agents across the Gulf South and, now, the nation. We pioneered computer-based comparative rating and were
                             the first to offer a comprehensive all-in-one solution for rating and policy management.</p>
                        </div>
                        <div className="card w-[90%] ml-2 p-4  bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg">
                            <div className="card_title font-bold text-gray-400">Commitment to Quality</div>
                            <p className="about_card_body text-[#d4d4d0]">For over three decades, our commitment to providing quality agency products at an affordable price has 
                            made us a leader in the field. Easy to use and intuitive, CCiRater sets the mark for agency management software. We help independent agents 
                            navigate the challenging and competitive environment in which they operate.</p>
                        </div>
                        <div className="card w-[90%] ml-2 p-4  bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg">
                            <div className="card_title font-bold text-gray-400">Since 1983</div>
                            <p className="about_card_body text-[#d4d4d0]">Based in the Greater New Orleans area in Louisiana, CCiComputer Services, Inc. brings southern hospitality
                             to the business world. Our dedicated support team shares a genuine concern for our customer's success, and we will do whatever it takes to make
                             you happy and your agency profitable.</p>
                        </div>
                        <div className="card w-[90%] ml-2 p-4  bg-none border border-solid border-gray-400 shadow-lg shadow-violet-500/50 rounded-tl-lg">
                            <div className="card_title font-bold text-gray-400">Give us a call</div>
                            <p className="about_card_body text-[#d4d4d0]">Call us today at 800-899-2831 or email us at ccirater@ccirater.com. We look forward to hearing from you!</p>
                        </div>
                        <br/>
                        <hr/>
            </section>
           
        </section>
    )
  };
  
  export default About;