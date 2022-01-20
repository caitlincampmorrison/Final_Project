import React from "react"
import { connect } from "react-redux"
import { selectedStudent, selectCampus } from "../store";
import StudentUpdate from "./StudentUpdate";

function findCampusId(name, campuses) {
    const campus = campuses.find(campus => campus.name === name)
    console.log("CAMPUS: " + campus.name)
    return this.props.selectCampus(campus)
}
const SingleStudent = ({selectedStudent, campuses, selectCampus}) => {
    return (
        <div className="student-details"> 
            <img src={selectedStudent.imageUrl} />
            <h3>Detail page for {selectedStudent.first_name}</h3>
            <p>{selectedStudent.first_name} -  
                <a onClick={() => findCampusId(selectedStudent.campus_name, campuses)}>
                    attends {selectedStudent.campus_name}</a>
            </p>
            <StudentUpdate />
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      selectedStudent: state.selectedStudent,
      campuses: state.campuses
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        selectCampus: (campus) => dispatch(selectCampus(campus))
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);