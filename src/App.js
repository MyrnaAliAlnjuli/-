
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPass from './pages/ForgetPass';
import Code from './pages/Code';
import ReseatPass from './pages/ReseatPass';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Single from './pages/Single';
import Favorite from './pages/Favorite';
import Restourants from './pages/Restourants';
import Caffees from './pages/Caffees';
function App() {
  
  return (
    <div className="App">

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/forgot' element={<ForgetPass/>}/>
  <Route path='/code' element={<Code/>}/>
  <Route path='/reseat' element={<ReseatPass/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/single/:userId' element={<Single/>}/>
  <Route path='/favorites' element={<Favorite/>}/>
  <Route path='/restourants' element={<Restourants/>}/>
  <Route path='/caffees' element={<Caffees/>}/>
</Routes> 
<Footer/>
    </div>
  );
}

export default App;
