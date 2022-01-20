import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom" //new
import Main from './Main' //new
import { selectButton, clearStudent, clearCampus } from "../store";


const Nav = (props) => {
  const campus_length = props.campuses.length
  const student_length = props.students.length
  return (
     <div>
        <h1>    
          <button onClick={() => {
            props.selectButton(0)
            props.clearCampus()
            props.clearStudent()
            }} id="student_button"> Students ({student_length})
          </button>
          <button onClick={() => {
            props.clearCampus()
            props.clearStudent()
            props.selectButton(1)
            }} id="campus_button"> Campuses ({campus_length})
          </button>
        </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectButton: (val) => dispatch(selectButton(val)),
    clearStudent: () => dispatch(clearStudent()),
    clearCampus: () => dispatch(clearCampus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);