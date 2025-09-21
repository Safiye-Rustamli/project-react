import TopSection from './main/TopSection';
import './App.css';
import './main/TopSectionCss.css';
import BottomPage from './bottom/BottomPage';
import BottomBottomPage from './bottombottom/bottomBottom';
import DigitalBlank from './digital/digitalBlank';
import SixthPage from './altinci/altinciPage';
import TablePage from './table/tablePage';
import GrayPage from './gray/grayPage';
import AlumniPage from './alumni/alumniPage';
import PartnerPage from './partner/partnerPage';
import BluePage from './blue/bluePage';
import LastPage from './last/lastPage';

function App() {
  return (
    <>
      <TopSection />
      <main className="main-section">
        <div className="left-content" style={{ marginTop: '60px' }}>

          <div style={{

            fontSize: '35px',
            fontFamily: 'Montserrat',
            color: '#333333',
            fontWeight: '400',
            textAlign: 'left',
            marginLeft: '50px',

          }}>
            Up to <span className="glowing-number">60%</span> of success in Digital
          </div>
          <div style={{
            fontSize: '35px',
            fontFamily: 'Montserrat',
            color: '#333333',
            fontWeight: '400',
            textAlign: 'left',
            marginLeft: '50px',

          }}>
            Product Development depends
          </div>
          <div style={{
            fontSize: '35px',
            fontFamily: 'Montserrat',
            color: '#333333',
            fontWeight: '400',
            textAlign: 'left',
            marginLeft: '50px',
            marginBottom: '30px'
          }}>
            on Agile Communication
          </div>
          <br />

          <div style={{

            fontSize: '20px',
            fontFamily: 'Montserrat',
            color: '#333333',
            textAlign: 'left',
            marginLeft: '50px',

          }}>
            The language of Digital Product Creates a
          </div>
          <div style={{
            fontSize: '20px',
            fontFamily: 'Montserrat',
            color: '#333333',
            textAlign: 'left',
            marginLeft: '50px',

          }}>
            Structured & Standardized Terminologies for
          </div>
          <div style={{
            fontSize: '20px',
            fontFamily: 'Montserrat',
            color: '#333333',
            textAlign: 'left',
            marginLeft: '50px',
            marginBottom: '15px'
          }}>
            easy Implementation of Agile Communication
          </div>
          <br />
          <button style={{
            backgroundColor: '#2968B4',
            fontFamily: 'Montserrat',
            marginLeft: '50px',
            width: '150px',
            height: '50px'
          }}>Contact us</button>
        </div>


        <div className="right-content">
          <img src="https://videos.openai.com/vg-assets/assets%2Ftask_01k5ef4kjterfsk2kkhwe1skgq%2F1758201110_img_0.webp?st=2025-09-18T11%3A54%3A55Z&se=2025-09-24T12%3A54%3A55Z&sks=b&skt=2025-09-18T11%3A54%3A55Z&ske=2025-09-24T12%3A54%3A55Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2B3tmipuIfHPAFJB%2B2LEAZ6Dli3ilLC4aX4793OsPQPQ%3D&az=oaivgprodscus" alt="Main picture" />
        </div>

      </main>
      <BottomPage />
      <BottomBottomPage />
      <DigitalBlank />
      <SixthPage />
      <TablePage />
      <GrayPage />
      <AlumniPage />
      <PartnerPage />
      <BluePage />
      <LastPage />

    </>

  );
}

export default App;