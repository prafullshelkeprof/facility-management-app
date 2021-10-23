import { createSlice } from '@reduxjs/toolkit';
import { facilityReducers, facilityExtraReducers } from './facilityReducers';
import { Facility } from '../../features/facility-card/FacilityCard';

export interface FacilityState {
    facilities: Facility[];
}

const initialState: FacilityState = {
    facilities: [] as Facility[]
};

export const facilitySlice = createSlice({
    name: 'facility',
    initialState,
    reducers: facilityReducers,
    extraReducers: facilityExtraReducers
});

export default facilitySlice.reducer;
