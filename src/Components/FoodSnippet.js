import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class FoodSnippet extends Component {

    render() {
        return (
            <Link to={"/food/" + this.props.data.idMeal} >
                <div id="foodSnippet" className="card mx-2 mt-2 col">
                    <img className="rounded img-thumbnail" src={this.props.data.strMealThumb} alt="" />
                    <p>{this.props.data.strMeal}</p>
                </div>
            </Link>
        );
    }
}