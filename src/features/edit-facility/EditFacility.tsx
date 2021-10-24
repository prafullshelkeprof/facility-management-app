import { useState } from 'react';
import {
    Button,
    DialogTitle,
    DialogContent,
    DialogActions,
    Dialog,
    Typography,
    IconButton
} from '@mui/material'
import { Close } from '@mui/icons-material';
import { Facility } from "../facility-card/FacilityCard";
import { DisplayFacility } from "../display-facility/DisplayFacility";
import { useAppDispatch } from '../../app/hooks';
import { updateFacility } from '../../store/facility-slice/facilityThunks';

export interface EditFacilityProps {
    open: boolean;
    onClose: () => void;
    onSave: () => void;
    facility: Facility

}
export function EditFacility(props: EditFacilityProps) {

    const dispatch = useAppDispatch();
    const { onSave, onClose, open, facility } = props;

    const [facilityName, setFacilityName] = useState<string>(facility.name);
    const [facilityAddress, setFacilityAddress] = useState<string>(facility.address);
    const [facilityType, setFacilityType] = useState<string>(facility.type);

    const handleUpdate = (): void => {
        const updatedFacility: Facility = {
            id: facility.id,
            name: facilityName,
            address: facilityAddress,
            type: facilityType
        }
        dispatch(updateFacility({ id: facility.id, updatedFacility }));
        onSave();
    }
    const onAddressChange = (val: string): void => {
        setFacilityAddress(val);
    }
    const onNameChange = (val: string): void => {
        setFacilityName(val);
    }
    const onTypeChange = (val: string): void => {
        setFacilityType(val);
    }
    const handleCancel = (): void => {
        onClose();
    }
    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            open={open}
        >
            <DialogTitle>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Edit Facility
                </Typography>
                <IconButton
                    aria-label="delete"
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8
                    }}
                    onClick={handleCancel}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <DisplayFacility
                    name={facility.name}
                    address={facility.address}
                    type={facility.type}
                    onAddressChange={onAddressChange}
                    onNameChange={onNameChange}
                    onTypeChange={onTypeChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleUpdate}>Update Facility</Button>
            </DialogActions>
        </Dialog>
    )
}