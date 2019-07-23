import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './components/Header';
import {Menu} from './components/Menu';
import {Slider} from './components/Slider';
import {InteractiveBlock} from './components/InteractiveBlock';
import {Footer} from './components/Footer';
import "./style.css";
class App extends React.Component {
    constructor(state,props){       
        super(state,props); 
        this.state = {           
            
        }
    }
    render() {
        return (
            <div className="main-wrap" >
                <Header/>
                <Menu/>
                <Slider/>
                <InteractiveBlock/>
                <Footer/>
                
            </div>
            
           
        )
      
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));