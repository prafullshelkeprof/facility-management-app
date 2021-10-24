import axios from 'axios';
import { Facility } from "../../features/facility-card/FacilityCard";
export const fetchFacilitiesApi = async (): Promise<Facility[]> => {
    const response = await axios.get('/facilities');
    return response.data as Facility[];
}
export const fetchFacilityApi = async (id: number): Promise<Facility> => {
    const response = await axios.get(`/facilities/${id}`);
    return response.data as Facility;
}
export const addFacilityApi = async (facility: Facility): Promise<Facility> => {
    const response = await axios.put(`/facilities/add`, facility);
    return response.data as Facility;
}
export const updateFacilityApi = async (id: number, facility: Facility): Promise<Facility> => {
    const response = await axios.put(`/facilities/update/${id}`, facility);
    return response.data as Facility;
}
export const deleteFacilityApi = async (id: number): Promise<Facility> => {
    const response = await axios.delete(`/facilities/${id}`);
    return response.data as Facility;
}