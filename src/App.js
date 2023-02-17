import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Component/Navbars';
import Banner from './Component/Banner';
import FeatureCont from './Component/FeatureCont';
import ExtensionCont from './Component/ExtensionCont';
import FaqCont from './Component/FaqCont';
import StayCont from './Component/StayCont';
import FooterCont from './Component/FooterCont';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <Banner/>
      <FeatureCont/>
      <ExtensionCont/>
      <FaqCont/>
      <StayCont/>
      <FooterCont/>
    </div>
  );
}

export default App;