import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';

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
    // console.log('DishDetail Menu Component render invoked');
    // const dish = props.selectedDish;
    // console.log("Dish : " + JSON.stringify(dish));
    if(props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
            <div className="row">
                <RenderDish dish={props.dish} />
                <h2>Comments</h2>
                <RenderComments comments ={props.comments} />
            </div>
          </div>
        
      );
    }
    else {
      return(
        <div></div>
      );
    }
  }



export default DishDetail;
