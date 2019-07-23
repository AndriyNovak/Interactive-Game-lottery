import * as React from 'react';
let interval;
export class Slider extends React.Component {
    constructor(state,props){       
        super(state,props); 
        this.state = {           
            arrUrl:["/src/img/1.jpg","/src/img/2.jpg","/src/img/3.jpg","/src/img/4.jpg","/src/img/5.jpg","/src/img/6.jpeg","/src/img/7.jpg"],
            itemSliderURL:"/src/img/1.jpg",
            indexItem:0
        }
    }
    showInterval(){
        return interval = setInterval(()=>{
            this.setState({
                indexItem:this.state.indexItem+1
            })
            if(this.state.indexItem>this.state.arrUrl.length-2){
                this.setState({
                    indexItem:0
                })
            }
        },5000)
    }
    componentDidMount(){
       this.showInterval()
    }
    handlerClickNext(){
        clearInterval(interval);
        this.showInterval()
        this.setState({
            indexItem:this.state.indexItem+1
        })
        if(this.state.indexItem>this.state.arrUrl.length-2){
            this.setState({
                indexItem:0
            })
        }
      
    }
    handlerClickPrevious(){
        clearInterval(interval);
        this.showInterval()
        this.setState({
            indexItem:this.state.indexItem-1
        })
         if(this.state.indexItem===0){
            this.setState({
                indexItem:this.state.arrUrl.length-1
            })
        }
       
    }
    
    handlerClickCircle(i){
        clearInterval(interval);
        this.showInterval()
        this.setState({
            indexItem:i
        })
    }
    render() {
        return (            
            <section className="slider-wrap">
                <img onClick={()=>{this.handlerClickPrevious()}} className="slider__previous-arrow" src="/src/img/icons8-ios-glyph-60.png" alt="previous-arrow"></img>
                <div className="slider__picture">
                   <img className="item" src={this.state.arrUrl[this.state.indexItem]}></img>                   
                   
                   <div className="slider__circle-wrap">
                        <a href="#" className="btn-buy">Order</a>
                        {this.state.arrUrl.map((el,i)=>{
                            if(this.state.indexItem===i){
                                return <div key={i+"a"} onClick={()=>{this.handlerClickCircle(i)}} className="slider__circle color"></div>
                            }else 
                            return (
                                <div key={i} onClick={()=>{this.handlerClickCircle(i)}} className="slider__circle"></div>
                            )
                        })}
                    </div>                    
                </div>                
                <img onClick={()=>{this.handlerClickNext()}} className="slider__next-arrow" src="/src/img/icons8-ios-glyph-60.png" alt="next-arrow"></img>
                
            </section>
           
        )
      
    }
}