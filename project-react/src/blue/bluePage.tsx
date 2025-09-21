import './bluePageCss.css';
import 'antd/dist/reset.css';
import { Input, Button } from 'antd';

const { TextArea } = Input;

function BluePage() {
    return (
        <div className="any">
            <div style={{
                textAlign: 'center',
                backgroundColor: 'white',
                marginTop: '25px'
            }}>
                <label className="heading-main-three">CONTACT US</label>
            </div>
            <br />
            <div style={{
                textAlign: 'center'
            }}>
                <Input
                    placeholder='First Name'
                    className="input-1"
                />
            </div>

            <div style={{
                textAlign: 'center'
            }}>
                <Input
                    placeholder='Last Name'
                    className="input-1"
                />
            </div>



            <div style={{
                textAlign: 'center'
            }}>
                <Input
                    placeholder='What is your e-mail?'
                    className="input-1"
                />
            </div>


            <div style={{
                textAlign: 'center'
            }}>
                <TextArea
                    rows={3}
                    placeholder='Your Question'
                    className="input-1"
                />


            </div>


            <div style={{
                textAlign: 'center'
            }}>
                <Button
                    className="input-2"
                >Send Message</Button>


            </div>

<br />





        </div>
    );
};

export default BluePage;