import React from "react"
import { connect } from "react-redux"
import { clearCampus, selectStudent, selectedCampus, unregisterStudent } from "../store";
import CampusUpdate from "./CampusUpdate";

const SingleStudent = ({selectedCampus, students, unregisterStudent, clearCampus, selectStudent }) => {
    const campusstudents = students.filter(student => {
        return student.campus_name === selectedCampus.name
    })
    function findStudentId(name, students ) {
        const student = students.find(student => student.first_name === name)
        console.log("FIND STUDENT: " + student.first_name)
        return student
    }
    console.log(campusstudents.length)
    return (
        <div className="campus-details"> 
            <img src={selectedCampus.imageUrl} />
            <h2>{selectedCampus.name}</h2>
            <ul>
              <li>Address: {selectedCampus.address}</li>
              <li>Description: {selectedCampus.description}</li>
            </ul>
            <CampusUpdate />
            <p>Enrollees:</p>
            {(campusstudents.length === 0) ? "no students are currently enrolled here" : 
                campusstudents.map(student => 
                    <p key={student.id}> 
                        <a onClick ={() => {
                            clearCampus()
                            selectStudent(findStudentId(student.first_name, students))
                        }}>
                        {student.first_name} 
                        </a>
                        <button onClick={()=>unregisterStudent(student)}>unregister</button> 
                    </p>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      selectedCampus: state.selectedCampus,
      students: state.students
    };
  };

  const mapDispatchToProps = (dispatch) => {
      return {
          unregisterStudent: (student) => dispatch(unregisterStudent(student)),
          selectStudent: (student) => dispatch(selectStudent(student)),
          clearCampus: () => dispatch(clearCampus())
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

  /*
  students.filter(student => {
                    return student.campus_name === selectedCampus.name
                    }).map(student => 
                     <p key={student.id}>{student.first_name} 
                        <button onClick={()=>unregisterStudent(student)}>unregister</button> 
                    </p>
                )
  */