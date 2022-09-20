import { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button } from 'reactstrap';
// import DishdetailsComponent from './DishdetailsComponent';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    };
  
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
        console.log(this.state.selectedDish)
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>  
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(dish) {
        if (dish != null)
        return(
            <div>
              {dish.comments.map((item) => {
                         return(
                            <div key={item.id}>
                                <p > {item.author} : </p>
                                <p > {item.comment}</p>
                            </div>
                         )
                         })}
                
            </div>
        );
    else
        return(
            <div></div>
        );
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle bold>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });


        // console.log('Menu componenet render is invoked')
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div  className="col-5 col-md-5 m-1">
                    <h2> Comments </h2>
                    {/* <DishdetailsComponent selectedDish={this.state.selectedDish}/> */}
                    {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;