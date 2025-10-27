import React from 'react';
function Hero() {
    return ( 
        <section className ="container-fluid" id="supportHero">
            <div className="p-3 mt-5 mb-5 " id="supportWrapper">
                <h4>Support Portal</h4>
                <a href=""><b>Track Tickets</b></a>
            </div>
             <div className=" row p-3 m-3 ">
                <div className=" col p-5">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg:how do i activate F&O, why is my order getting rejected.' /><br/>
                    <br/>
                    <a href="" ><b>Track account Opening</b></a> 
                    <a href=""><b>Track segment activation</b></a>
                    <a href=""><b>Intraday margins</b></a><br/>
                    <a href=""><b>Kite user manual</b></a>
                </div>
                <div className=" col p-5 " >
                    <h1 className="fs-3" >Featured</h1>
                    <ol>
                        <li><a  href=""><b>Current Takeovers and Delisting - January 2024</b></a></li>
                        <li><a href=""><b>Latest Intraday leverages - MIS & CO</b></a></li>
                    </ol>
                    
                    
                </div>
                
            </div>
        </section>
     );
}

export default Hero;