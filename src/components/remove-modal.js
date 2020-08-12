import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import React from "react";


const RemoveModal = ({isOpenModal, handleClose, deleteTask, id}) => {
  return (
    <Dialog
      open={isOpenModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{"Удалить задачу"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">Вы действительно хотите удалить задачу? </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Отмена</Button>
        <Button onClick={() => {
          handleClose();
          deleteTask(id);
        }} color="primary" autoFocus>
          Да
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveModal;