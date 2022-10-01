import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js'
/**Componentes */
import Inicial from './components/Inicial/Inicial.js';
import Principal from './components/principal/Principal.js';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Footer from './components/Footer/Footer'
import Activities from './components/Activities/Activities';
import AddActivity from './components/Activities/AddActivity/AddActivity';
import ModifyActivity from './components/Activities/ModifyActivity/ModifyActivity';
import DeleteActivity from './components/Activities/DeleteActivity/DeleteActivity';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Route exact path='/' component={Inicial} />
        <Route exact path='/countrys' component={Principal} />
        <Route exact path='/countrys/:name' component={CountryDetail} />
        <Route exact path='/activities' component={Activities} />
        <Route exact path='/activities/add' component={AddActivity} />
        <Route exact path='/activities/modify' component={ModifyActivity} />
        <Route exact path='/activities/delete' component={DeleteActivity} />
      </div>
      <Footer />
    </>
  );
}

export default App;
