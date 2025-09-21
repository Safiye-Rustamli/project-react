import './grayPageCss.css';

function GrayPage() {
    return (
        <div>
            <div style={{
                textAlign: 'center',
                backgroundColor: 'white',

            }}>
                <label className="heading-main-three">BENEFITS OF THE LANGUAGE OF DIGITAL PRODUCT</label>
            </div>

            <div className="main-div-here-one">


                <div className='container-of-ninty'>
                    <div className="accuracy-left-container">
                        <div className="rotated-text">
                            <span className="style-h3">Up to</span>
                            <span className="style-h1">90%</span>
                        </div>
                    </div>
                    <div className="accuracy-right-container">
                        <div className="labels-columns">
                            <label className="labels-labels">Requirement Analysis Accuracy</label>
                            <label className="labels-labels">Information Flow Accuracy</label>
                            <label className="labels-labels">API Documentation Accuracy</label>
                            <label className="labels-labels">User Story Documentation Accuracy</label>
                            <label className="labels-labels">Digital Services Analysis Accuracy</label>
                        </div>
                        <div className="labels-columns">
                            <label className="labels-labels">Form Design Accuracy</label>
                            <label className="labels-labels">Project Duration Estimation Accuracy</label>
                            <label className="labels-labels">DB Documentation Accuracy</label>
                            <label className="labels-labels">Project Management Accuracy</label>
                            <label className="labels-labels">Issue Management Accuracy</label>
                        </div>
                    </div>



                </div>

                <div className="second-main-div" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{
                        fontSize: '35px',
                        color: '#333333',
                        fontFamily: 'Montserrat',
                        whiteSpace: 'nowrap',
                        marginLeft:'50px',
                        marginTop:'30px'
                    }}>Up to</span>
                    <span style={{
                        fontSize: '100px',
                        color: '#333333',
                        fontFamily: 'Montserrat',
                        whiteSpace: 'nowrap',
                        lineHeight: '0.8',
                        marginLeft:'50px',
                        marginTop:'20px',
        
                    }}>100%</span><br />

                    <label className='second-labels'>Business Communication Accuracy</label>
                    <label className='second-labels'>DevTeam Communication Accuracy</label>
                </div>




            </div>
            

        </div >




    );
}

export default GrayPage;