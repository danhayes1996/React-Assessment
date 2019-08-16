import React, {Component} from 'react';
import Axios from 'axios';

export default class FoodDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: false
        }
    }

    componentDidMount() {
        Axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
            .then(value => {
                this.setState({data: value.data.meals[0]});
            })
    }

    render() {
        let ingredients = [];
        for(let i = 1; i <= 20; i++) {
            if(this.state.data['strIngredient' + i] === "") break;
            ingredients[i] = this.state.data['strIngredient' + i];
        }

        return (
            <div className="col mt-2 text-center justify-content-center">
                <div className="card-header">
                    {this.state.data.strMeal}
                </div>

                <div className="card-body">
                    <div id="instructions">
                        <h4>Instructions</h4>
                        {this.state.data.strInstructions}
                    </div>

                    <div id="ingredients" className="text-left mt-4">
                        <h4>Ingredients</h4>
                        {
                            ingredients.map((val, i) => {
                                return <li key={"ingredient"+ i}>{val}</li>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}