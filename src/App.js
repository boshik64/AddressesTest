import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import './App.css';
import Address from './Components/Address/Address';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='content-wrapper'>
        <Route exact path='/' component={News}/>
        <Route path='/address' component={Address}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
