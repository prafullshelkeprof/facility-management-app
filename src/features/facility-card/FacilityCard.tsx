import { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid
} from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";
import { DeleteFacility } from '../delete-facility/DeleteFacility';
import { EditFacility } from '../edit-facility/EditFacility';

export interface Facility {
  id: number;
  name: string;
  address: string;
  type: string;
}

export function FacilityCard(props: Facility) {
  const { id, name, address, type } = props;
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const [showEditDialog, setShowEditDialog] = useState<boolean>(false);
  const onCardClick = (): void => {
    setShowDeleteDialog(true)
  }
  const onClose = (): void => {
    setShowDeleteDialog(false);
  }
  const onSuccess = (): void => {
    setShowDeleteDialog(false)
  }
  const onEditCard = (): void => {
    setShowEditDialog(true);
  }
  const hideEditDialog = (): void => {
    setShowEditDialog(false);
  }
  const onFacilityUpdate = (): void => {
    setShowEditDialog(false);
  }
  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {type}
        </Typography>
        <address>
          {address}
        </address>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='contained'
          onClick={onEditCard}
          startIcon={<Edit />}>Edit Facility</Button>
        <Button
          color="error"
          size='small'
          variant='contained'
          onClick={onCardClick}
          endIcon={<Delete />}>Delete Facility</Button>

      </CardActions>
    </>
  );
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card variant='outlined' >{card}</Card>
      <DeleteFacility
        onClose={onClose}
        onSuccess={onSuccess}
        open={showDeleteDialog}
        id={id}
        name={name}
      />
      <EditFacility
        onClose={hideEditDialog}
        onSave={onFacilityUpdate}
        open={showEditDialog}
        facility={props}
      />
    </Grid>
  );
}