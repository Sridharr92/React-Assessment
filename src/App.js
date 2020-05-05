import React,{Component} from 'react';
import './App.css';
import NewData from './NewData';
import Questions from './Questions';
import Applications from './Applications';

class App extends Component{  

  render(){
    return (
      <div>
        <NewData />
        <Questions />
        <Applications />
      </div>
    );
  }
}

export default App;

