
import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { getFacilities, getFacility, addFacility, updateFacility, deleteFacility } from './facilityThunks';
import { Facility } from "../../features/facility-card/FacilityCard";
import { RootState } from '../store';

export const facilityReducers = {

}
export const facilityExtraReducers = (builder: ActionReducerMapBuilder<RootState>): void => {
    builder
        .addCase(getFacilities.pending, (state) => {
        })
        .addCase(getFacilities.fulfilled, (state, action: PayloadAction<Facility[]>) => {
            state.facilities = action.payload;
        })

        .addCase(getFacility.pending, (state) => {
        })
        .addCase(getFacility.fulfilled, (state, action: PayloadAction<Facility>) => {
        })

        .addCase(addFacility.pending, (state) => {
        })
        .addCase(addFacility.fulfilled, (state, action: PayloadAction<Facility>) => {
        })
        .addCase(updateFacility.pending, (state) => {
        })
        .addCase(updateFacility.fulfilled, (state, action: PayloadAction<Facility>) => {
        })

        .addCase(deleteFacility.pending, (state) => {
        })
        .addCase(deleteFacility.fulfilled, (state, action: PayloadAction<Facility>) => {
        });
}