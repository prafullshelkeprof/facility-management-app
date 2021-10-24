import { Facility } from "../../features/facility-card/FacilityCard";
import { RootState } from "../store";

export const facilities = (state: RootState): Facility[] => state.facility.facilities;
export const getFacilityById = (state: RootState, id: number): Facility => {
    return state.facility.facilities.find((curr: Facility) => curr.id === id) || {} as Facility;
};