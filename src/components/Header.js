import * as React from 'react';

export class Header extends React.Component {
    
    render() {
        return (            
            <header>
                <div className="title">
                    <div className="header__logo">
                        <img className="logo" src="/src/img/italian-pizza-logo.jpg" alt="logo"></img>
                        
                    </div>
                    <h1>Italian Pizza</h1></div>
                <div className="header__btn">
                    <select>
                        <option>Kiev</option>
                        <option>Lviv</option>
                        <option>Odessa</option>
                    </select>
                    <a href="#" className="bttr tick">Sign in</a>
                    <a href="#" className="bttr tick">Sign up</a>
                </div>
            </header>
        )
    }
}