import React, {Component} from 'react';

export default class SideBar extends Component {
    render() {
        if(this.props.shouldDisplay === false) return false;
        return (
            <div id="sidebar" className="col-2 h-100">
                <ul className="list-group sticky-top">
                    <li>Menu item..</li>
                    <li>Menu item..</li>
                </ul>
            </div>
        );
    }   
}