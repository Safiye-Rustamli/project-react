import './BottomPageCss.css';

function BottomPage() {
    return (
        <div className="bottom-container">
        <img className="bottom-pic" alt="second pic" src="https://videos.openai.com/vg-assets/assets%2Ftask_01k5gcnk36e0dt0t7bg3cfj5vx%2F1758265621_img_0.webp?st=2025-09-19T05%3A25%3A25Z&se=2025-09-25T06%3A25%3A25Z&sks=b&skt=2025-09-19T05%3A25%3A25Z&ske=2025-09-25T06%3A25%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=1Qg3r5V55Pauf7I1QYpY5H6LLKW4Ls187fODnxYgH3M%3D&az=oaivgprodscus" />
         <div className="div-main" >
            <div style={{
                fontFamily:'Montserrat',
                padding:'50px',
                fontSize:'30px',
               
            }}>Get big picture of a Digital Product by <br />
         Learning <strong>5 languages </strong><br />
         <button style={{
               backgroundColor: '#F07122',
               fontFamily:'Montserrat',
               width:'200px',
               height:'50px',
               fontSize:'20px',
               marginTop:'20px'
         }}>View all</button>
         </div>
         </div>
        </div>
    );
}

export default BottomPage;