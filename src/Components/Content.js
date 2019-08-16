import React, {Component} from 'react';
import Axios from 'axios';

import FoodSnippet from './FoodSnippet';

export default class Content extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            foods: []
        };
    }

    componentDidMount() {
        let data = [];        
        for(let i = 0; i < 5; i++){
            Axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
                .then (value => {
                    //not efficient but it works!
                    data[i] = value.data.meals[0];
                    this.setState({foods: data});
                });
        }
        //doesnt work because axios isnt synchronous
        //console.log(data);
        //this.setState({foods: data});
    }
    
    render() {
        return (
            <div className="col mt-2 row text-center justify-content-center">
                <div className="w-100">Random Foods</div>
                {
                    this.state.foods.map((food, i) => {
                        return <FoodSnippet key={"Food" + i} data={food}/>
                    })
                }
            </div>
        );
    }
}