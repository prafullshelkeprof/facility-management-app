import { useState } from 'react';
import {
  Grid,
  Button
} from '@mui/material';

import { useAppDispatch } from '../../app/hooks';
import { Facility } from '../facility-card/FacilityCard';
import { addFacility } from '../../store/facility-slice/facilityThunks';
import { DisplayFacility } from '../display-facility/DisplayFacility';
import { RangeValues } from '../display-facility/DisplayFacility';

export function AddFacility() {
  const dispatch = useAppDispatch();
  const [facilityName, setFacilityName] = useState<string>('');
  const [facilityAddress, setFacilityAddress] = useState<string>('');
  const [facilityType, setFacilityType] = useState<string>(RangeValues.Indoor);
  const [newFacility, setNewFacility] = useState<Facility>({
    id: Math.random(),
    name: facilityName,
    address: facilityAddress,
    type: facilityType
  } as Facility);

  const onAddressChange = (val: string): void => {
    setFacilityAddress(val);
  }
  const onNameChange = (val: string): void => {
    setFacilityName(val);
  }
  const onTypeChange = (val: string): void => {
    setFacilityType(val);
  }
  const onAddFacilityClick = (): void => {
    setNewFacility({
      name: facilityName,
      address: facilityAddress,
      id: Math.random(),
      type: facilityType
    })
    dispatch(addFacility(newFacility));
  }
  const addFacilityButton = (
    <Button
      onClick={onAddFacilityClick}
      color='primary'
      variant='contained'
    > Add Facility</Button>
  );

  return (
    <Grid container >
      <Grid item xs={12} sx={{
        mx: 'auto'
      }}>
        <DisplayFacility
          name={facilityName}
          address={facilityAddress}
          type={facilityType}
          onAddressChange={onAddressChange}
          onNameChange={onNameChange}
          onTypeChange={onTypeChange}
        />
        {addFacilityButton}
      </Grid>
    </Grid>
  );
}
