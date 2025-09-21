import './bluePageCss.css';
import 'antd/dist/reset.css'; 
import antd from 'antd';
const { Input } = antd;

function BluePage() {
    return (
        <div className="any">
            <div style={{
                textAlign: 'center',
                backgroundColor: 'white',
            }}>
                <label className="heading-main-three">CONTACT US</label>
            </div>

            <div>
                <Input
                    placeholder='First Name'
                     
                />
            </div>
        </div>
    );
};

export default BluePage;