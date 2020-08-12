import React, {Component} from 'react';
import {connect} from "react-redux"
import {deleteTask, updateTask} from "../actions/TaskActions";
import RemoveModal from "./remove-modal";
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Timer from './timer'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class TaskItem extends Component {
  state = {
    name: this.props.item.name,
    time: this.props.item.time,
    start: this.props.item.start,
    isOn: this.props.item.isOn,
    isOpenModal: false
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (!this.state.isOn) return;
      this.setState({
        time: Date.now() - this.state.start
      })
    }, 1);
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.item !== this.props.item) {
      this.setState({
        name: this.props.item.name,
        time: this.props.item.time,
        start: this.props.item.start,
        isOn: this.props.item.isOn,
      })
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  startTimer = () => {
    const newState = {
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true,
    };
    this.setState(newState, () => {
      const {isOpenModal, ...rest} = this.state;
      this.props.updateTask(this.props.id, rest);
    })
  };

  stopTimer = () => {
    this.setState({isOn: false}, () => {
      const {isOpenModal,isOn, ...rest} = this.state;
      this.props.updateTask(this.props.id, rest)
    })
  };

  handleClickOpen = () => {
    this.setState({isOpenModal: true})
  };

  handleClose = () => {
    this.setState({isOpenModal: false})
  };

  render() {
    const {time, isOn, isOpenModal, name} = this.state;
    const {id} = this.props;

    return (
      <ListItem style={{borderBottom: '1px solid #aeaeae'}}>
        <ListItemText
          primary={`название задачи ${name}`}
          secondary={<Timer time={time}/>}
        />
        {!isOn && <PlayCircleOutlineIcon onClick={this.startTimer}/>}
        {isOn && <PauseCircleOutlineIcon onClick={this.stopTimer}/>}

        <DeleteIcon style={{cursor: "pointer"}}
                    onClick={this.handleClickOpen}/>
        <RemoveModal isOpenModal={isOpenModal}
                     handleClose={this.handleClose}
                     deleteTask={this.props.deleteTask}
                     id={id}/>
      </ListItem>
    )
  }
}

export default connect(null, {deleteTask, updateTask})(TaskItem)