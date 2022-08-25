import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Pricing from './Components/Pricing';
import Nfts from './Components/Nfts';
import Header from './Components/HEADER/Header';
import Footer from './Components/Footer';
import Community from './Components/COMMUNITY/Community';
import Support from './Components/SUPPORT/Support';
import Home from './Components/HOME/Home';
import Home2 from './Components/HOME2/Home2';
import Registration from './Components/Registration';
import UserDashboard from './User/UserDashboard';
import Profile from './User/Profile';
import Visit from './User/Visit';

function App() {
  return (
    <div className=' text-light '  style={{backgroundColor :'#EAE7D6'}}>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/login/registration" element={<Registration/>}/>
        <Route path='/pricing' element= {<Pricing/>}/>
        <Route path='/nfts' element={<Nfts/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/' element ={<Home/>} />
        <Route path='/userdashboard' element ={<UserDashboard />} />
        <Route path='/profile' element ={<Profile />} />
        <Route path='/home2' element ={<Home2/>} />
        <Route path='/visit' element ={<Visit/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;