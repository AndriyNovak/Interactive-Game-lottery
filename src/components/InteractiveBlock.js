import * as React from 'react';

let arrIdCell =[];
let error ="";
let disabledBtn=false;
let resultValue=0;
let arrTable = [1,2,3,4,5];

import {Table} from './Table';
export class InteractiveBlock extends React.Component {
    constructor(state,props){       
        super(state,props); 
        this.state = {           
            arrCurentTableIndex:[],
            arrObjectTable:[],
            objectTable:{},
            arrIdCell:[],
            arrClickCounter:[],
            clickCounter0:0,
            clickCounter1:0,
            clickCounter2:0,
            clickCounter3:0,
            clickCounter4:0,
            clickCounter:0,
            randomArray:[],
            numberCell:0,
            winCell:false,
            arrNumberCell:[],
            numberTable:0,
            btnPlayAgain:false
            // resultValue:0
            
        }
    }
    random(min,max){
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand
    }
    getRandomArrayFromServer(){
        return Promise.resolve([
            [this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20)],
            [this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20)],
            [this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20)],
            [this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20)],
            [this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20),this.random(1,20)]
            
        ])
    }
    componentDidMount(){        
        let arr = [
            this.state.clickCounter0,
            this.state.clickCounter1,
            this.state.clickCounter2,
            this.state.clickCounter3,
            this.state.clickCounter4
        ];
        this.getRandomArrayFromServer()
            .then(res => {
                this.setState({                        
                    randomArray:res
                })
            })
         
        this.setState({
            arrClickCounter:arr           
        })
        
    }
    handlerClickShowCell(curentIndex,curentTableIndex){ 
        console.log(arrIdCell)
        arrIdCell.push(curentIndex+"a"+curentTableIndex);   
            this.state.arrClickCounter.map((counter,i,arr)=>{
                if(i===curentTableIndex){
                    let arrAll = [];
                    arr[i]=counter+1;
                    arrAll.push(...this.state.arrObjectTable,{
                            tableId:curentTableIndex,
                            clickCounter:arr[i],
                            arrIdCell:arrIdCell 
                    })

                    this.setState({  
                        arrObjectTable:arrAll ,
                        clickCounter:arr[i],           
                        arrIdCell:arrIdCell
                    
                    })  
                }
            })
    }
    handlerClickHideCross(curentIndex,curentTableIndex){
        if(arrIdCell.indexOf(curentIndex+"a"+curentTableIndex)!==-1){
            arrIdCell.splice(arrIdCell.indexOf(curentIndex+"a"+curentTableIndex),1);
        }        
        this.state.arrClickCounter.map((counter,i,arr)=>{
            if(i===curentTableIndex){
                let arrAll = [];
                arr[i]=counter-1
                arrAll.push(...this.state.arrObjectTable,{
                        tableId:curentTableIndex,
                        clickCounter:arr[i],
                        arrIdCell:arrIdCell 
                })               
                this.setState({  
                   
                    arrObjectTable:arrAll.splice(-1,1) ,
                    clickCounter:arr[i],           
                    arrIdCell:arrIdCell
                
                })  
            }
        })        
    }
    
    verificationClickCounter(curentTableIndex){
       
        for(let element of this.state.arrObjectTable){
            if( element.clickCounter>5 && element.tableId===curentTableIndex){
                error ="You must select only 5 items on the card";
                disabledBtn=false
                return false
            }
        }
        for(let element of this.state.arrObjectTable){
           
            if(element.clickCounter===5 && element.tableId===curentTableIndex){
                error ="",
                disabledBtn=true
                return true
            }            
        }
    }

    handlerClickSubmit(){
       
        if(this.state.btnPlayAgain===true){
            arrIdCell=[]
            this.setState({                              
                
                arrObjectTable:[],
                
                arrIdCell:[],
               
                
                arrClickCounter:[0,0,0,0,0],
                
                clickCounter:0,
               
                // numberCell:0,
                winCell:false,
                // arrNumberCell:[],
                // numberTable:0,
                
               
                
                btnPlayAgain:false                                  
               
            })
            this.getRandomArrayFromServer()
            .then(res => {
                this.setState({                        
                    randomArray:res
                })
            })
        }else{
            this.setState({
                btnPlayAgain:true
            });
            let arrNumberCell =[] 
            this.state.arrObjectTable.map((elem1,i1)=>{            
                 this.state.randomArray.map((elem2,i2)=>{                              
                        elem1.arrIdCell.map((elem3,i3)=>{                        
                            let splitelem = elem3.split("a")
                            let numberCell =Number(splitelem[0]);
                            let numberTable = Number(splitelem[1]);
                            if(i2===elem1.tableId){                            
                                if(elem2.indexOf(numberCell)!==-1 ){                                
                                    arrNumberCell.push(numberCell)
                                    this.setState({
                                        numberCell:numberCell,
                                        arrNumberCell:arrNumberCell,
                                        winCell:true,
                                        numberTable:numberTable                                    
                                    })
                                    
                                }else{
                                    this.setState({                               
                                        
                                        numberCell:numberCell,
                                        arrNumberCell:arrNumberCell,                                    
                                        numberTable:numberTable
                                    })
                                }
                            }
                        })    
                    
                })
            })
        }
        
        
    }
    
     getResult(result,tableIndex){
        
        if(result==true){
            resultValue +=1
                      
        }
        if( (arrTable.length-1)=== tableIndex  ){
            console.log("Your Result = ",resultValue);
                
        }
     
               
       
       
    }
    render() {
       
        return (
            <section className="interactiveBlock-wrap">
                <div className="interactiveBlock__title">
                    <h1>Interactive Game</h1>
                    
                </div>
                

                <div className="interactiveBlock__tables">
                {  
                    arrTable.map((el,k)=>{ 
                        
                        if(this.verificationClickCounter(k)===true ){
                            return(                            
                                <Table key={k}
                                    handlerClickShowCell = {this.handlerClickShowCell.bind(this)}
                                    handlerClickHideCross = {this.handlerClickHideCross.bind(this)}
                                    tableClass={"table border-green"}                                    
                                    k={k}                                   
                                    arrObjectTable={this.state.arrObjectTable}                                  
                                    arrIdCell={this.state.arrIdCell}
                                    numberCell={this.state.numberCell}
                                    winCell={this.state.winCell}
                                    arrNumberCell={this.state.arrNumberCell}
                                    randomArray={this.state.randomArray}
                                    numberTable={this.state.numberTable}
                                    getResult={this.getResult.bind(this)}
                                    
                                />
                            )
                        }else if(this.verificationClickCounter(k)===false ){                           
                            return(                            
                                <Table key={k}
                                    handlerClickShowCell = {this.handlerClickShowCell.bind(this)}
                                    handlerClickHideCross = {this.handlerClickHideCross.bind(this)}
                                    tableClass={"table border-red"}                                    
                                    k={k}                                   
                                    arrObjectTable={this.state.arrObjectTable}                                  
                                    arrIdCell={this.state.arrIdCell}
                                    numberCell={this.state.numberCell}
                                    winCell={this.state.winCell}
                                    arrNumberCell={this.state.arrNumberCell}
                                    randomArray={this.state.randomArray}
                                    numberTable={this.state.numberTable}
                                    getResult={this.getResult.bind(this)}                                   
                                />
                            )  
                        } else return(                            
                                <Table key={k}
                                    handlerClickShowCell = {this.handlerClickShowCell.bind(this)}
                                    handlerClickHideCross = {this.handlerClickHideCross.bind(this)}
                                    tableClass={"table"}                                    
                                    k={k}                                   
                                    arrObjectTable={this.state.arrObjectTable}                                  
                                    arrIdCell={this.state.arrIdCell}
                                    numberCell={this.state.numberCell}
                                    winCell={this.state.winCell}
                                    arrNumberCell={this.state.arrNumberCell}
                                    randomArray={this.state.randomArray}
                                    numberTable={this.state.numberTable}
                                    getResult={this.getResult.bind(this)}                                   
                                />
                            )  
                        
                    })
                }
                </div>
                <div className="message">
                    <p>{ error}</p>                   
                    <a onClick={()=>{this.handlerClickSubmit()}} href="#" className={(this.state.arrIdCell.length==25 && disabledBtn===true)?"btn-error ":"btn-error disabled"}>{this.state.btnPlayAgain===true?"Play Again":"Submit"}</a>
                    
                </div>
                
            </section>
            
           
        )
      
    }
}
