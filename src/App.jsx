import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Css/locomotive-scroll.css';
import Hero from './Hero/Hero';
import CssePage from './Pages/Societypages/CssePage';
// import SocietyShowCard from './Society/SocietyShow';
// import InfoForm from './InfoForm/InfoForm';
import MembersPages from './components/MembersPages';
// import Events from './components/Events/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        
        <Route path='/csse' element={<CssePage />} />
        {/* <Route path='/showSo' element={<SocietyShowCard/>}/> */}
        {/* <Route path='/infoform' element={<InfoForm/>}/> */}
        <Route path='/members' element={<MembersPages />} />
        <Route path='/events' element={<Events/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
