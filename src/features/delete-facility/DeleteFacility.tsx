
import { useAppDispatch } from '../../app/hooks';
import { deleteFacility } from '../../store/facility-slice/facilityThunks';
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Typography,
  IconButton,
  DialogContentText
} from '@mui/material';
import { Close } from '@mui/icons-material';

export interface DeleteFacilityProps {
  open: boolean;
  name: string;
  id: number;
  onClose: () => void;
  onSuccess: () => void
}
export function DeleteFacility(props: DeleteFacilityProps) {
  const { onClose, onSuccess, open, id, name } = props;
  const dispatch = useAppDispatch();
  const handleCancel = (): void => {
    onClose();
  };

  const handleDeleteFacility = (): void => {
    dispatch(deleteFacility(id));
    onSuccess();
  };
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>
        <Typography sx={{ mb: 1.5, mt: 0 }} color="text.secondary">
          Delete Facility
        </Typography>
        <IconButton aria-label="delete">
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          {
            `Are you sure you want to delete ${name} facility? You won't be able to recover this data.`
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={handleDeleteFacility}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}
