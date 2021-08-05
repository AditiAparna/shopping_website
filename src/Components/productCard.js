import React from 'react';
import './productCard.css';

export default class ProductCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            pressed: false,
        };
    };
    
    // modalDisplay(){
    //     return(
    //       <Modal
    //         isOpen={this.state.modalVisible}
    //         className="modal"
    //         onRequestClose={() => this.setState({modalVisible: false})}
    //       >
    //         <div className="modalInside">
    //           <div>
    //             <img src={this.props.url} alt={this.props.name} className="modalImage"/>
    //           </div>
    //           <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
    //               <div>
    //                   <text>{this.props.name}</text>
    //               </div>
    //               <div>
    //                   <text>asdrfhjvguyftdiyrxcfgvbygftrxcfvg</text>
    //               </div>
    //               <div>
    //                   <text>Rs. {this.props.price}</text>
    //               </div>
    //               <div>
    //                   <text>Add to Cart</text>
    //               </div>
    //           </div>
    //         </div>
    //       </Modal>
    //     )
    //   }
    render(){
        return(
            <div className="card" >
                <img src={this.props.url} alt={this.props.name} className="image"/>
                <div style={{flexDirection:'row', paddingTop:'5px'}}>
                    <div>
                        <text style={{fontWeight:'500'}}>{this.props.name}</text>
                    </div>
                    <div style={{paddingTop:'5px'}}>
                        <text>Rs. {this.props.price}</text>
                    </div>
                </div>
                {this.state.pressed?
                <div className="addCart" onClick={null}>
                  <div><text>Added</text></div>
                  <div><img alt='cart' src="https://as2.ftcdn.net/v2/jpg/03/10/70/79/500_F_310707936_iickgWF7S3Gd3EXm6pyFCKA7gYSzI5Tr.jpg" style={{height: '20px', width: '20px', color:'white'}} /></div>
                </div>
                :
                <div className="addCart" onClick={()=>{
                    this.props.addToCart(this.props.data)
                    this.setState({pressed: true})
                }}>
                  <div><text>Add to cart</text></div>
                  <div><img alt='cart' src="https://img-premium.flaticon.com/png/512/2543/premium/2543369.png?token=exp=1628106377~hmac=9a5cf7221ce3e85abd6cb4b4f439a3d5" style={{height: '20px', width: '20px', color:'white'}} /></div>
                </div>
                }
            </div>
        )
    }
}