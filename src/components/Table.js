import * as React from 'react';

let arrRow = [1,2,3,4,5];
let arrColumn = [1,2,3,4];
export class Table extends React.Component { 
       
    render() {
        
        return (   
                  
            <table className={this.props.tableClass}>
                <tbody>
                
                {
                    arrRow.map((elem1,i)=>{
                        
                        return (
                            <tr key={i}>
                                {
                                    arrColumn.map((elem2,j)=>{                                   
                                        if(this.props.arrIdCell.indexOf(i*4+j+1+"a"+this.props.k)!==-1 ){                                            
                                            if(this.props.winCell==true &&  this.props.randomArray[this.props.k].indexOf(i*4+j+1)!==-1  ){

                                                this.props.getResult(this.props.winCell==true &&  this.props.randomArray[this.props.k].indexOf(i*4+j+1)!==-1,this.props.k)                                                
                                                
                                                return <td   className="table__cell winCell"  key={j}>{i*4+j+1}</td>
                                            }
                                            else {
                                                return <td onClick={()=>{this.props.handlerClickHideCross(i*4+j+1,this.props.k)}}  className="table__cross" key={j}>{i*4+j+1}</td> 
                                            }
                                        }                                 
                                        else {
                                            return <td onClick={()=>{this.props.handlerClickShowCell(i*4+j+1,this.props.k)}}  className="table__cell"  key={j}>{i*4+j+1}</td>
                                        }  
                                       
                                    })
                                }
                                
                            </tr>
                            
                        )
                        
                    })
                   
                }
                
                </tbody>
            </table>
           
        )
      
    }
}