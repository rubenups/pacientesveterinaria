import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';

class App extends Component{
  state = {

  }
  render(){
    return(
      <div class = "Container">
          <Header
            titulo = 'Administrador pacientes veterinaria'>
          </Header>

      </div>
    );
  }
}


export default App;
