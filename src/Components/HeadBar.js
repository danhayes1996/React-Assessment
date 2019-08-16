import React, {Component} from 'react';

export default class HeadBar extends Component {
    
    render() {
        return (
            <nav id="navBar" className="navbar navbar-light bg-light">
                <button id="sidebarBtn" className="navbar-brand navbar-toggler" value="SideBar" onClick={this.props.sideBarBtnEvent}>
                    <span className="navbar-toggler-icon"></span>
                </button>       

                <div id="searchBar" className="form-inline my-2 my-lg-0 justify-content-center container">
                    <input className="form-control"  type="text" placeholder="search" />
                    <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle ml-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Food</a>
                        <a className="dropdown-item" href="#">Areas</a>
                        <a className="dropdown-item" href="#">Food Types</a>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}