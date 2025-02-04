const Demo = () => {
    return (
        <section className="w-[100%] mt-[5%]" >
            <div class="flex border-2 border-gray-400 border-solid rounded-lg bg-green-300 p-8">
                <div class="w-24 flex-none"></div> {/* this sets the width of the left flex item and doesn't change size */}
                <div class="text-white text-center italic text-xl md:text-2xl lg:text-3xl  grow">Free Demo</div>  {/* this sets the width of the center flex item and allows to change size */}
                <div class="w-24 flex-none"></div> {/* this sets the width of the left flex item and doesn't change size */}
            </div>
            <div class="flex mt-[5%]">
                <div class="w-24 flex-none"></div>
                <div class="text-white text-center text-lg md:text-xl lg:text-2xl  grow">Try CCiOnline <span class="text-red-600 italic"> FREE </span>for 14 days with no obligation.</div>
                <div class="w-24 flex-none"></div>
            </div>
            <div class="flex mt-[2%]">
                <div class="w-24 flex-none"></div>
                <div class="text-white text-center text-sm md:text-md lg:text-lg  grow">To speak with a representative call 800-899-2831 or email us at ccirater@ccirater.com</div>
                <div class="w-24 flex-none"></div>
            </div>
            <section className="w-[80%] mt-[5%] ml-[2.5%]">
            <div class="flex mt-[5%]">
                <div class="w-14 flex-none"></div>
                <div class="w-14 flex-none"></div>
                <div class="text-white text-lg md:text-xl lg:text-2xl  grow"><span class="text-red-600 ">CCi </span>Online</div>

            </div>
            <div class="flex mt-[2%]">
                <div class="w-14 flex-none"></div>
                <div class="w-14 flex-none"></div>
                <div class="text-white text-md md:text-lg lg:text-xl  grow">Online Insurance Forms & Management learn more</div>

            </div>
            <div class="flex mt-[2%]">
                <div class="w-14 flex-none"></div>
                <div class="w-14 flex-none"></div>
                <div class="text-white font-light text-xs grow">To begin your CCiForms FREE demo please fill in the required information below.</div>

            </div>

            <div class="flex mt-[4%]">
                <div class="w-14 flex-none"></div>
                <div class="w-14 flex-none"></div>
                <div class="text-white text-xs grow">We will send your login credentials to the email address your provide.</div>
            </div>
            <div class="flex mt-[1%]">
                <div class="w-14 flex-none"></div>
                <div class="w-14 flex-none"></div>
                <div class="text-white text-xs grow">If you have questions or need assistance please call us at (800) 899-2831 M-F 8AM-4PM CST.</div>

            </div>           
            </section>
            <section className="w-[90%] mt-[5%]">
                <div className="w-[100%] flex justify-center mt-[10%]">
                <div className="w-14 grow-0"></div>
                <div className="w-14 grow-0"></div>
                    <div className="w-xl min-h-lg h-auto grow max-w-[400px] border-2 border-solid border-gray-500 rounded-md w-[50%] p-4">
                    <div className="flex">
                        <div className="text-white text-xs grow"><label htmlFor="txt_business_name">Business Name</label></div>
                        <div className="grow max-w-[300px]"><input name="txt_business_name" id="txt_business_name" className="w-full"></input></div>
                    </div>
                    <div className="flex mt-4">
                        <div className="text-white text-xs grow"><label htmlFor="txt_business_email">Business Email</label></div>
                        <div className="grow max-w-[300px]"><input name="txt_business_email" id="txt_business_email" className="w-full"></input></div>
                    </div>
                    <div className="flex mt-4">
                        <div className="text-white text-xs grow"><label htmlFor="txt_contact_name">Contact Name</label></div>
                        <div className="grow max-w-[300px]"><input name="txt_contact_name" id="txt_contact_name" className="w-full"></input></div>
                    </div>
                    <div className="flex mt-4">
                        <div className="text-white text-xs grow"><label htmlFor="txt_opt_pass">Opt Password</label></div>
                        <div className="grow max-w-[300px]"><input name="txt_opt_pass" id="txt_opt_pass" className="w-full"></input></div>
                    </div>
                    <div className="flex mt-4">
                        <div className="text-white text-xs grow"><label htmlFor="txt_promo_code">Promo Code</label></div>
                        <div className="grow max-w-[300px]"><input name="txt_promo_code" id="txt_promo_code" className="w-full"></input></div>
                    </div>
                    <div className="flex mt-4">
                        <div className="text-white text-xs grow"><label htmlFor="select_state">Your State</label></div>
                        <div className="grow max-w-[300px]">
                        <select name="select_state" id="select_state" className="w-full">
                            <option>AL</option>
                            <option>FL</option>
                            <option>GA</option>
                            <option>LA</option>
                            <option>MS</option>
                        </select>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="text-white text-xs grow"></div>
                        <div className="grow max-w-[300px]"><button className="border-2 border-solid border-gray-500 rounded-lg text-white p-2 w-full">Try CCiOnline</button></div>
                    </div>
                    </div>

                </div>
            </section>


        </section>
    );
  };
  
  export default Demo;