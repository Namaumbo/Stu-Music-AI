import axios from "axios";
import { API_BASE } from "../../../config";
import { HTTP_STATUS } from "../utils/AppUtils";

export const fetchTracks = async () => {
  try {
    const response = await axios.get(`${API_BASE.URL}/tracks`);
    console.log("Tracks fetched successfully:", response.data);
    if (response.data || response.status == HTTP_STATUS.OK) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching tracks:", error);
    throw error;
  }
};
