import React from 'react';
import './AppleDownloadStyles.css'; 
import logo from './icons/logo.png';
import webdl1 from './icons/download1.png';
import webdl2 from './icons/download2.png';
import chnsimg from './icons/chnsimg1.png';
import chnsimg1 from './icons/Chinese-img2.png';
import chnsimg2 from './icons/Chinese-img2.1.png';
import chnsimg3 from './icons/Chinese-img3.png';
import chnsimg4 from './icons/Chinese-img3.1.png';
import chnsimg5 from './icons/Chinese-img3.2.png';
import chnsimg6 from './icons/Chinese-img4.png';


const AppleDownloadChinese = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <img src={logo} alt="Logo" className="logo" />
                    <p className="come-and-play">来玩</p>
                    <div className="header-right">
                        <a className="active" href="#home">首页</a>
                        <a className="glossary-link" href="https://www.shafayouxi.org/glossary">德州扑克术语表</a>
                    </div>
                </div>
            </header>

            <div className="container">

                <div class ="container1">
                        <div h1 className="Info">  在中国大陆注册的苹果iPhone账户目前无法下载GoPlay360应用。 </div>
                    </div>

                <div className="webcontainer">
                    <p class="choice"> 玩GoPlay360有两种方式：</p> 

                    <div class="underline"></div> 

                    <p class = "ways"> <b>选项1：</b> 访问GoPlay360的网页版，无需下载即可玩游戏。</p>
                    <p className='details'> 
                        <ul>
                            <li> GoPlay360的网页版允许无需下载的游戏，可在PC、iOS和安卓设备上访问。 </li>
                        </ul> 
                        </p>  
                        <p class ="details"> <i> 点击网页链接以访问它：</i> </p> 
                    

                    <div className="weblink">
                        <img src={webdl1} alt="Website Link" />
                        <img src={webdl2} alt="Website Link" />
                    </div>
                </div>

                <div className="dlcontainer">
                    <p class="ways"> <b> 选项2：</b> 从其他国家或地区重新注册AppleiPhone帐户即可下载。 </p>

                    <div className="steps">
                        <h2 className='step'> <b> 第一步：</b> 注册新的苹果ID并下载GoPlay360 </h2>
                            <ul>
                                <li className='details'>在您的计算机上打开网页： <a href="https://appleid.apple.com/" target="_blank" rel="noopener noreferrer">https://appleid.apple.com/</a> 滚动到页面底部创建一个新的苹果ID</li>
                            </ul>

                        <img src={chnsimg} class="img" alt="Step1 Guide" />

                            <ul>
                                <li className='details'>注册时，请确保提供所有必需的信息并记住您的安全问题。</li>
                            </ul>
                        <p className="note">注意：如果在注册苹果ID时遇到问题，可能是由于网络问题。尝试切换网络或切换飞行模式。</p>
                    
                    <div class="underline"></div>

                    <h2 className='step'> <b> 第二步：</b> 登录IOS应用商店 </h2>
                        <ul>
                            <li className='details'>使用刚刚注册中国大陆地区的苹果IDiOS设备登录App Store。</li>
                        </ul>
                        <ul>
                            <li className='details'>在App Store中输入新注册的帐号和密码。由于这是第一次使用新帐号登录App Store，点击登录后会出现验证弹窗。点击验证，如下图所示：</li>
                        </ul>

                            <img src={chnsimg1} class="img1" alt="Step2 Guide" />

                        <ul>
                            <li className='details'>选择付款方式为“无”，然后单击“下一步”。</li>
                        </ul>

                            <img src={chnsimg2} class="img2" alt="Step3 Guide" />

                        <ul>
                            <li className='details'>完成该过程后，退出新帐户。</li>
                        </ul>

                    <div class="underline"></div>

                    <h2 className='step'> <b> 第三步： </b> 切换国家 </h2>
                        <ul>
                            <li className='details'>再次打开网页： <a href="https://appleid.apple.com/" target="_blank" rel="noopener noreferrer">https://appleid.apple.com/</a></li>
                        </ul>
                        <ul>
                            <li className='details'>登录你刚刚注册的帐号，点击右上角的“编辑”按钮。</li>
                        </ul>

                                <img src={chnsimg3} class="img3" alt="Step4 Guide" />

                        <ul>
                            <li className='details'>外地地址生成工具： <a href="https://shenfendaquan.com" target="_blank" rel="noopener noreferrer">https://shenfendaquan.com</a></li>
                        </ul>
                        <p className='note'>注：将国家/地区改为美国，并填写相应信息，信息可从上方海外地址生成工具获取。</p>
                        <ul>
                            <li className='details'>选择要更改为的国家或地区后，会出现如下图所示的弹窗。点击“继续更新”。</li>
                        </ul>

                        <img src={chnsimg4} class="img4" alt="Step5 Guide" />

                        <ul>
                            <li className='details'>然后您可以直接选择付款方式为“无”。</li>
                        </ul>

                            <img src={chnsimg5} class="img5" alt="Step6 Guide" />

                        <ul>
                            <li className='details'>最后，将剩下的信息填入你事先准备好的地址信息，然后点击右上角的“完成”。</li>
                        </ul>
                    <div class="underline"></div>

                    <h2 className='step'> <b>第四步： </b> 下载并播放GoPlay360 </h2>
                        <ul>
                            <li className='details'>使用新注册的AppleID登录。App Store语言现在将切换为相应国家的语言。在搜索栏中，搜索'GoPlay360'并单击'GET'进行下载。</li>
                        </ul>
                        <p className="note">如果您之前使用中国大陆帐户下载了“GoPlay360”应用程序，请先卸载后再重新安装。</p>
                        
                            <img src={chnsimg6} class="img6" alt="Step7 Guide" />
                    </div>
                </div>
            </div>

            <div id="footer">
                <p>2018©LaiWan</p>
            </div>

        </div>
    );
};

export default AppleDownloadChinese;