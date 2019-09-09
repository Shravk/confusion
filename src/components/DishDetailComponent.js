import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  function RenderDish ({dish}) {
    if(dish !== null) {
      return (
        <Card>
          <CardImg width="100%" src={ dish.image } alt={ dish.name } />
          <CardBody>
            <CardTitle>{ dish.name }</CardTitle>
            <CardText>{ dish.description }</CardText>

          </CardBody>
        </Card>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  function RenderComments ({comments}) {

    if(comments !== null) {
      const commentsList = comments.map((c) => {
        return (

          <div key={c.id}>

            <ul className="list-unstyled">
              <li>
                <p>{ c.comment }</p>
                <p> -- { c.author }, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
              </li>
            </ul>
          </div>
        )
      });
      return commentsList;


    }
  }

  const DishDetail=(props)=> {
    console.log('DishDetail Menu Component render invoked');
    const dish = props.selectedDish;
    console.log("Dish : " + JSON.stringify(dish));
    if(dish === null) {
      return <div>Null data</div>
    }
    else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={dish} onClick={props.onClick} />
            </div>

            <div className="col-12 col-md-5 m-1">
              <h2>Comments</h2>
              <RenderComments comments ={props.dish.comments} />
            </div>
          </div>
        </div>
          )
        }
  }


export default DishDetail;
