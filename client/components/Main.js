import React from 'react';
import { connect } from 'react-redux'
import { fetchCampusesFromServer, fetchStudentsFromServer } from '../store'
import StudentList from './StudentList'
import CampusList from './CampusList'
import Nav from './Nav'
import SingleStudent2 from './SingleStudent2'
import SingleCampus from './SingleCampus'

class Main extends React.Component {
  async componentDidMount(){
    this.props.fetchCampusesFromServer()
    this.props.fetchStudentsFromServer()
  }

  render(){
    return (
      <div id="main">
          <Nav />
          {this.props.selectedStudent.id ? <SingleStudent2 /> : 
            this.props.selectedCampus.id ? <SingleCampus /> : 
            this.props.selectedButton === 0 ? <StudentList /> : <CampusList />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedButton: state.selectedButton,
    selectedStudent: state.selectedStudent,
    selectedCampus: state.selectedCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampusesFromServer: () => dispatch(fetchCampusesFromServer()),
    fetchStudentsFromServer: () => dispatch(fetchStudentsFromServer()),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Main)
