import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DishdetailsComponent extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                {this.props}
            </div>
        );
    }
}

DishdetailsComponent.propTypes = {

};

export default DishdetailsComponent;


// renderComments(dish) {
    //     if (dish != null)
    //     return(
    //         <div>
    //           {dish.comments.map((item) => {
    //                      return(
    //                         <div key={item.id}>
    //                             <p > {item.author} : </p>
    //                             <p > {item.comment}</p>
    //                         </div>
    //                      )
    //                      })}
                
    //         </div>
    //     );
    // else
    //     return(
    //         <div></div>
    //     );
    // }