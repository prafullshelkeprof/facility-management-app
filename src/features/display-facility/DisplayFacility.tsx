import React, { useState } from 'react';
import {
  Box,
  Radio,
  FormControl,
  TextField,
  RadioGroup,
  FormLabel,
  FormControlLabel
} from '@mui/material';

export enum RangeValues {
  Indoor = 'Indoor',
  Outdoor = 'Outdoor'
}
export interface DisplayFacilityProps {
  name: string;
  address: string;
  type: string;
  onAddressChange: (val: string) => void;
  onNameChange: (val: string) => void;
  onTypeChange: (val: string) => void;
}
export function DisplayFacility(props: DisplayFacilityProps) {
  const { onNameChange, onAddressChange, onTypeChange, name, address, type } = props;
  const [facilityName, setFacilityName] = useState<string>(name);
  const [facilityAddress, setFacilityAddress] = useState<string>(address);
  const [facilityType, setFacilityType] = useState<string>(type);
  const onFacilityNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const val = event.currentTarget.value;
    setFacilityName(val);
    onNameChange(val);
  }
  const onFacilityAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const val = event.currentTarget.value;
    setFacilityAddress(val);
    onAddressChange(val);
  }
  const onFacilityTypeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const val = event.currentTarget.value;
    setFacilityType(val);
    onTypeChange(val);
  }

  return (
    <FormControl sx={{
      width: 0.4
    }}>
      <Box sx={{
        mb: 1.5
      }}>
        <TextField
          variant='outlined'
          fullWidth
          value={facilityName}
          label='Facility Name'
          onChange={onFacilityNameChange}
        />
      </Box>
      <Box>
        <FormLabel component='legend'>Range</FormLabel>
        <RadioGroup
          aria-label='range'
          value={facilityType}
          name='radio-buttons-group'
          row
          onChange={onFacilityTypeChange}
        >
          <FormControlLabel value={RangeValues.Indoor} control={<Radio />} label='Indoor' />
          <FormControlLabel value={RangeValues.Outdoor} control={<Radio />} label='Outdoor' />
        </RadioGroup>
      </Box>
      <Box sx={{
        mb: 1.5
      }}>
        <TextField
          variant='outlined'
          fullWidth
          label='Facility Address'
          value={facilityAddress}
          onChange={onFacilityAddressChange}
        />
      </Box>
    </FormControl>
  );
}
