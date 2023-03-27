import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Button from "../Shared/TextButton";

const fn = () => undefined;

const DeleteOrderConfirmation = ({
  orderId,
  title,
  content,
  onHandleConfirm: handleConfirm = fn,
  onHandleCancel: handelCancel = fn,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm}>Confirm</Button>
        <Button onClick={handelCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteOrderConfirmation;
