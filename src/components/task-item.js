import React, {Component} from 'react';
import moment from "moment";
import {connect} from "react-redux"
import {deleteTask, updateTask} from "../actions/TaskActions";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class TaskItem extends Component {
  state = {
    name: '',
    time: 0,
    start: 0,
    isOn: false,
    isOpenModal: false
  };

  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);

    const {isOpenModal, ...rest} = this.state;
    this.props.updateTask(this.props.id, rest)
  }

  stopTimer = () => {
    const {isOpenModal, ...rest} = this.state;
    this.props.updateTask(this.props.id, rest)
    this.setState({isOn: false})
    clearInterval(this.timer)

  }


  handleClickOpen = () => {
    this.setState({isOpenModal: true})
  };

  handleClose = () => {
    this.setState({isOpenModal: false})
  };


  componentDidMount() {
    this.setState({
      name: this.props.item.name,
      time: this.props.item.time,
      start: this.props.item.start,
      isOn: this.props.item.isOn
    })
  }

  render() {
    const {time, isOn, isOpenModal, name} = this.state;
    const {id} = this.props;

    const start = (!isOn) ? <button onClick={this.startTimer}>start</button> : null;
    const stop = (isOn) ? <button onClick={this.stopTimer}>stop</button> : null;

    const tempTime = moment.duration(time);
    const seconds = tempTime.seconds();
    const minutes = tempTime.minutes();
    const hours = tempTime.hours();
    const days = tempTime.days();


    return (
      <div>
        название задачи {name}
        <div>
          {days}: д {hours}: ч {minutes}: м {seconds}: с
        </div>
        {start}
        {stop}

        <Dialog
          open={isOpenModal}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Удалить задачу"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">Вы действительно хотите удалить
              задачу? </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={() => {
              this.handleClose();
              this.props.deleteTask(id);
            }} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        <button onClick={this.handleClickOpen}>delete</button>
      </div>
    )
  }
}

export default connect(null, {deleteTask, updateTask})(TaskItem)