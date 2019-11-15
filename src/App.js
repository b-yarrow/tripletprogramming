import React, {Component} from 'react';
import logo from './logo.svg';
import PieChart from './components/charts.js'
import './App.css';
import PieData from './data/pie.js';

class App extends Component {
  render(){
  return (
    <div className="App">
      <PieChart title="Superhero Chart" data={PieData} height={20} width={20}/>
    </div>
  );
}
}
export default App;
