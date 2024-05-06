import React, { useState } from 'react';
import './AppleDownloadStyles.css'; 
import logo from './icons/logo.png';
import webdl2 from './icons/webdl1.png';
import webdl1 from './icons/webdl2.png';
import engimg from './icons/engimg.png';
import engimg1 from './icons/engimg1.png';
import engimg2 from './icons/engimg2.png';
import engimg3 from './icons/engimg3.png';
import engimg4 from './icons/engimg4.png';
import engimg5 from './icons/engimg5.png';
import engimg6 from './icons/engimg6.png';


const AppleDownload = () => {

    const link1 = () => {
        window.location.href = "https://h5.shafayouxi.org/"; // Redirect to the specified URL
      };

      const link2 = () => {
        window.location.href = "https://h5.laiwanpai.com/"; // Redirect to the specified URL
      };


    return (
        <div>
            <header>
                <div className="header">
                    <img src={logo} alt="Logo" className="logo" />
                    <p className="come-and-play">GoPlay360</p>
                    <div className="header-right">
                        <a className="active" href="#home">Home Page</a>
                        <a className="glossary-link" href="https://www.shafayouxi.org/glossary">Texas Hold'em Poker Glossary</a>
                    
                    
                    </div>
                </div>
            </header>


            <div className="container">

                <div class ="container1">
                        <div h1 className="Info">  Apple iPhone accounts registered in mainland China are currently unable to download the GoPlay360 app. </div>
                    </div>

                <div className="webcontainer">
                    <p class="choice"> There are two ways to play GoPlay360:</p> 

                    <div class="underline"></div> 

                    <p class = "ways"> <b>Option 1:</b> Access the web version of GoPlay360 to play without downloading.</p>
                    <p className='details'> 
                        <ul>
                            <li> GoPlay360's web version allows gaming without downloads, accessible on PC, iOS, and Android devices. </li>
                        </ul> 
                        </p>  
                        <p class ="details"> <i> Click on the web link to access it:</i> </p> 
                    

                    <div className="weblink">
                        <a href="https://h5.shafayouxi.org/" target="_blank" rel="noopener noreferrer" onClick={link1}>
                            <img src={webdl1} alt="Website Link" />
                        </a>

                        <a href="https://h5.laiwanpai.com/" target="_blank" rel="noopener noreferrer" onClick={link2}>
                        <img src={webdl2} alt="Website Link" />
                        </a> 
                    </div>

                    
                </div>

                <div className="dlcontainer">
                    <p class="ways"> <b> Option 2:</b> Re-register an Apple iPhone account from another country or region to download it. </p>

                    <div className="steps">
                        <h2 className='step'> Step 1: Register a new Apple ID and download GoPlay360 </h2>
                            <ul>
                                <li className='details'>Open the web page on your computer: <a href="https://appleid.apple.com/" target="_blank" rel="noopener noreferrer">https://appleid.apple.com/</a> Scroll to the bottom of the page to create a new Apple ID </li>
                            </ul>

                        <img src={engimg} class="img" alt="Step1 Guide" />

                            <ul>
                                <li className='details'>When registering, ensure you provide all required information and remember your security questions.</li>
                            </ul>
                        <p className="note">Note: If encountering issues registering an Apple ID, it could be due to network problems. Try switching networks or toggling airplane mode.</p>
                    
                    <div class="underline"></div>

                    <h2 className='step'> Step 2: Log in to the IOS AppStore </h2>
                        <ul>
                            <li className='details'>Log into the App Store on your iOS device with the Apple ID you just registered for the mainland China region.</li>
                        </ul>
                        <ul>
                            <li className='details'>Enter the new registered account and password in the App Store. Since this is the first time logging into the App Store with the new account, a verification pop-up will appear after clicking 'Log In'. Click 'Verify' as shown in the image below:</li>
                        </ul>

                            <img src={engimg1} class="img1" alt="Step2 Guide" />

                        <ul>
                            <li className='details'>Select the payment method as 'None' and then click 'Next'.</li>
                        </ul>

                            <img src={engimg2} class="img2" alt="Step3 Guide" />

                        <ul>
                            <li className='details'>After completing the process, log out of the new account.</li>
                        </ul>

                    <div class="underline"></div>

                    <h2 className='step'> <b>Step 3: </b> Switch countries </h2>
                        <ul>
                            <li className='details'>Open the web page again: <a href="https://appleid.apple.com/" target="_blank" rel="noopener noreferrer">https://appleid.apple.com/</a></li>
                        </ul>
                        <ul>
                            <li className='details'>Log in to the account you just registered and click 'Edit' in the upper right corner.</li>
                        </ul>

                                <img src={engimg3} class="img3" alt="Step4 Guide" />

                        <ul>
                            <li className='details'>Foreign Address Generation Tool: <a href="https://shenfendaquan.com" target="_blank" rel="noopener noreferrer">https://shenfendaquan.com</a></li>
                        </ul>
                        <p className='note'>Note: Change the country/region to the United States, and fill in the corresponding information. The information can be obtained from the overseas address generation tool above.</p>
                        <ul>
                            <li className='details'>After selecting the country or region you want to change to, there will be a pop-up window as shown in the image below. Click 'Continue to Update'.</li>
                        </ul>

                        <img src={engimg4} class="img4" alt="Step5 Guide" />

                        <ul>
                            <li className='details'>Then you can directly select the payment method as 'None'.</li>
                        </ul>

                            <img src={engimg5} class="img5" alt="Step6 Guide" />

                        <ul>
                            <li className='details'>Finally, fill in the remaining information with the address information you prepared in advance, then click 'Done' in the top right corner.</li>
                        </ul>
                    <div class="underline"></div>

                    <h2 className='step'> <b>Step 4: </b> Download and play GoPlay360 </h2>
                        <ul>
                            <li className='details'>Log in with the newly registered Apple ID. The App Store language will now be switched to the corresponding country's language. In the search bar, search for 'GoPlay360' and click 'GET' to download it.</li>
                        </ul>
                        <p className="note">If you previously downloaded the 'GoPlay360' app using a mainland China account, please uninstall it first before reinstalling.</p>
                        
                            <img src={engimg6} class="img6" alt="Step7 Guide" />
                    </div>
                </div>
            </div>

            <div id="footer">
                <p>2018©LaiWan</p>
            </div>
            
        </div>
    );
};

export default AppleDownload;