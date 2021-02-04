import React, { Component } from 'react';
import './testimonal.css'
import Test1 from '../../images/test1.png';
import Test2 from '../../images/test2.png';
import Test3 from '../../images/test3.png';
// import Test2 from '../images/test2.png';
// import Test3 from '../images/test3.png';
class Testimonal extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <h1 className="ef-head">What Others Says<hr className="hori"/></h1>
            
            <div className="ef-main">
                <div className="ee_main">
                    <img className="ee_image" alt="test1" src={Test1}/>
                    <h4 className="ee_head">Shetty</h4>
                    <h6 className="ee_para">But I must explain to you how all this<br/>
                     mistaken idea of denouncing pleasure<br/>
                      and praising pain was born and I will <br/>
                      give you a complete account of the <br/>
                      system, and expound the actual<br/>
                       teachings of the great explorer</h6>
                       <h5 className="ee_end">@Trip.com</h5>
                </div>
                <div className="ee_main">
                    <img className="ee_image" alt="test1" src={Test2}/>
                    <h4 className="ee_head">John</h4>
                    <h6 className="ee_para">But I must explain to you how all this<br/>
                     mistaken idea of denouncing pleasure<br/>
                      and praising pain was born and I will <br/>
                      give you a complete account of the <br/>
                      system, and expound the actual<br/>
                       teachings of the great explorer</h6>
                       <h5 className="ee_end">@Trip.com</h5>
                </div>
                <div className="ee_main">
                    <img className="ee_image" alt="test1" src={Test3}/>
                    <h4 className="ee_head">Arun</h4>
                    <h6 className="ee_para">But I must explain to you how all this<br/>
                     mistaken idea of denouncing pleasure<br/>
                      and praising pain was born and I will <br/>
                      give you a complete account of the <br/>
                      system, and expound the actual<br/>
                       teachings of the great explorer</h6>
                       <h5 className="ee_end">@Trip.com</h5>
                </div>
            </div>

                    
            </>
         );
    }
}
 
export default Testimonal;