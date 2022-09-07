import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {BsStarFill} from 'react-icons/bs';
import '../App.css';


class Cards extends Component {
    render(){
        return(
            <Card style={{ maxWidth: '15rem', border: 'none' }}>
                <Card.Img src={ this.props.card.img } alt="" />
                <Card.Body>
                    <Card.Text>
                        <BsStarFill style={{color: '#FE395C'}} />  {this.props.card.rate} <span className="gray">{this.props.card.countRate} • {this.props.card.country}</span><br/>
                        {this.props.card.title}<br/>
                        <span className="bold">{this.props.card.price}</span> / person
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
export default Cards;