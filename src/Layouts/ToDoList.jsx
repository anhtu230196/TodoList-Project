import React, { Component } from 'react';
import { Container } from '../Components/Container';
import { ThemeProvider } from 'styled-components'
import { Dropdown } from '../Components/Dropdown';
import { Heading3 } from '../Components/Heading';
import { TextField } from '../Components/TextField';
import { Button } from '../Components/Button';
import { Table, Th, Thead, Tr } from '../Components/Table';
import { connect } from 'react-redux';
import { addTask, changeTheme, deleteTaskAction, doneTaskAction, fetchAllTaskList, rejectTaskAction } from '../Redux/Actions/actions/ToDoListActions'
import { arrTheme } from '../Theme/ThemeManager';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {

            taskName: '',
            disabled: true,
        }
    }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.status).map((task, index) => {
            return <Tr key={index}>
                <Th>{task.taskName}</Th>
                <Th className="text-right">

                    <Button onClick={() => {
                        this.props.dispatch(doneTaskAction(task.taskName))
                    }}><i className="fa fa-check"></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(deleteTaskAction(task.taskName))
                    }}><i className="fa fa-trash"></i></Button>
                </Th>
            </Tr>
        })
    }

    renderTaskComplete = () => {
        return this.props.taskList.filter(task => task.status).map((task, index) => {
            return <Tr key={index}>
                <Th>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick={() => {
                        this.props.dispatch(rejectTaskAction(task.taskName))
                    }}><i class="fa fa-refresh" aria-hidden="true"></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(deleteTaskAction(task.taskName))
                    }}><i className="fa fa-trash"></i></Button>
                </Th>
            </Tr>
        })
    }

    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }





    componentDidMount() {
        this.props.dispatch(fetchAllTaskList())
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container className="w-50">
                    <Dropdown onChange={(e) => {
                        let { value } = e.target;
                        this.props.dispatch(changeTheme(value))
                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField value={this.state.taskName} name="taskName" onChange={(e) => {

                        this.setState({
                            taskName: e.target.value
                        })

                    }} label="Task name" className="w-50"></TextField>
                    <Button onClick={() => {
                        //Lấy thông tin người dùng nhập vào
                        let { taskName } = this.state
                        console.log(taskName)
                        // Tạo ra 1 object
                        if (taskName.trim() === "") {
                            alert('Please input task name!')
                        }
                        else {
                            this.props.dispatch(addTask(taskName));
                        }

                        //dispatch object lên store



                    }} className="ml-2"><i class="fa fa-plus" aria-hidden="true"></i> Add task</Button>

                    <hr></hr>
                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <Heading3>Task complete</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskComplete()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        theme: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
    }
}

export default connect(mapStateToProp)(ToDoList);