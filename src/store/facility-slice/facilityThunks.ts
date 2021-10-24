
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchFacilitiesApi,
    fetchFacilityApi,
    addFacilityApi,
    updateFacilityApi,
    deleteFacilityApi
} from './facilityApi';
import { Facility } from '../../features/facility-card/FacilityCard';
import { AppDispatch } from '../../app/store';

export const getFacilities = createAsyncThunk<Facility[]>(
    'facility/getFacilities',
    async () => {
        const response: Facility[] = await fetchFacilitiesApi();
        return response;
    }
);
export const getFacility = createAsyncThunk<Facility, number>(
    'facility/getFacility',
    async (id: number) => {
        const response: Facility = await fetchFacilityApi(id);
        return response;
    }
);
export const addFacility = createAsyncThunk<Facility, Facility, {
    dispatch: AppDispatch
}>(
    'facility/addFacility',
    async (facility: Facility, { dispatch }) => {
        const response: Facility = await addFacilityApi(facility);
        return response;
    }
);
export const updateFacility = createAsyncThunk<Facility, { id: number, updatedFacility: Facility }, {
    dispatch: AppDispatch
}>(
    'facility/updateFacility',
    async ({ id, updatedFacility }, { dispatch }) => {
        const response: Facility = await updateFacilityApi(id, updatedFacility);
        dispatch(getFacilities());
        return response;
    }
);
export const deleteFacility = createAsyncThunk<Facility, number, {
    dispatch: AppDispatch

}>(
    'facility/deleteFacility',
    async (id: number, { dispatch }) => {
        const response: Facility = await deleteFacilityApi(id);
        dispatch(getFacilities());
        return response;
    }
);