import React, {Component} from "react";
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Experience extends Component {
    render(){
        return (
            <section>
                <h3>All Experiences</h3>
                <div className="cards">
                    {this.props.reviews.map(card => <Cards key={card.id} card={card} />)}
                </div>
            </section>
        )
    };
}

export default Experience;