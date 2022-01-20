import React, {Component} from "react"
import { connect } from "react-redux"
import { updateStudent, selectedStudent } from "../store"
import { Link } from 'react-router-dom';


class StudentUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: props.selectedStudent.first_name,
            last_name: props.selectedStudent.last_name,
            email: props.selectedStudent.email,
            gpa: props.selectedStudent.gpa,
            campus_name: props.selectedStudent.campus_name
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
        console.log("CHANGE: " + ev.target.value)
    }
    handleSubmit (ev) {
        ev.preventDefault()
        const { first_name, last_name, email, gpa } = this.state
        const campus_name = document.getElementById(`campus_name`).value
        console.log("SUBMIT: " + campus_name)
        console.log(this.props.selectedStudent.id)
        this.props.updateStudent({id: this.props.selectedStudent.id, first_name, last_name, email, gpa, campus_name})
    }
    render(){
        const {first_name, last_name, email, gpa, campus_name } = this.state
        const { handleChange, handleSubmit} = this

        return (
            <form id="student-update-form" onSubmit={handleSubmit}>
                 <input 
                    name='first_name' 
                    placeholder="first name"
                    onChange={handleChange} 
                    value={first_name} 
                 />
                 <input 
                    name="last_name" 
                    placeholder="last name"
                    onChange={handleChange} 
                    value={last_name}
                />
                 <input 
                    name="email" 
                    placeholder="email"
                    onChange={handleChange} 
                    value={email}
                /> 
                <input 
                    name="gpa" 
                    placeholder="gpa"
                    onChange={handleChange} 
                    value={gpa}
                />  
                <select onChange={handleChange} id="campus_name">
                    <option key={this.props.selectedStudent.id} 
                        value={this.props.selectedStudent.id}> 
                        {this.props.selectedStudent.campus_name} 
                    </option>
                    {this.props.campuses.filter(campus => campus.name !== this.props.selectedStudent.campus_name)
                    .map((campus) => (
                        <option key={campus.id} value={campus.name}>{campus.name}</option>
                        ))}
                </select>   
                 <button type='submit'> update </button>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectedStudent: state.selectedStudent,
        campuses: state.campuses
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateStudent: (student) => dispatch(updateStudent(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentUpdate)

/*
<select defaultValue='campuses' id="campuses" >
                    <option key={this.props.selectedStudent.id} 
                        value={this.props.selectedStudent.id}> 
                        {this.props.selectedStudent.campus_name} 
                    </option>
                    {this.props.campuses.map((campus) => (
                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                    ))}
                    </select>
                    */