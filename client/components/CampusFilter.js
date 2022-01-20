import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom" //new
import Main from './Main' //new
import {updateCampusFilter} from '../store'

//NOT CURRENTLY WORKING
class CampusFilter extends React.Component {   
    render(){ 
        return (
        <div>
                <button onClick={() => {this.props.updateCampusFilter(1)}}>Filter By Enrollments</button>
        </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        updateCampusFilter: (num) => dispatch(updateCampusFilter(num))
    }
}


export default connect(null, mapDispatchToProps)(CampusFilter);
