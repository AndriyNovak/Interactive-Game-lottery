import * as React from 'react';
export class Menu extends React.Component {   
    render() {
        return (            
            <section className="menu-wrap">
                <a href="#" className="menu__btn">Pizza</a>
                <a href="#" className="menu__btn">Drinks</a>
                <a href="#" className="menu__btn">Dessert</a>
                <a href="#" className="menu__btn">Promo %</a>
            </section>           
        )
      
    }
}