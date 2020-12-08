import {Route, Switch} from 'react-router-dom';
import global from './halaman/global';
import indonesia from './halaman/indonesia';
import provinsi from './halaman/provinsi';
import negara from './halaman/negara';
import Navbar from './navbar';
import Home from './halaman/home';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path ='/global' component={global}/>
        <Route path ='/indonesia' component={indonesia}/>
        <Route path ='/provinsi' component={provinsi}/>
        <Route path ='/negara/:id' component={negara}/>
      </Switch>
     
    </div>
  );
}

export default App;