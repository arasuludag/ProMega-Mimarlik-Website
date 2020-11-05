import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Carousel from './Carousel.jsx'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div key = {props.key}>
      <Button onClick={handleClickOpen} key = {props.key}>
        Daha Fazla
      </Button>
      <Dialog
        key = {props.key}
        maxWidth="md"
        open={open}
        scroll="paper"
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle>
        <DialogContent key = {props.key}>
          <Carousel
            image = {props.image}
            title = {props.title}
            key = {props.key}/>
        </DialogContent>
        <DialogActions key = {props.key}>
          <Button onClick={handleClose} key = {props.key}>
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
