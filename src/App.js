import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Burger from './components/Burger/Burger';

class App extends React.Component {
  render(){
    return (
    <div className="App">
      
     <Layout>
       <BurgerBuilder />
     </Layout>
      
    </div>
  );
    }
}

export default App;
