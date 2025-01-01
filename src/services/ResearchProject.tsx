import axios from "axios";
import { ApiResponse } from "../types/Response/ApiResponse";
import { ResearchProject } from "../types/ResearchProject";

//---------------------------------------------------------------- GET RESEARCH PROJECT
export const getResearchProject = async (): Promise<ResearchProject[]> => {
  try {
    const response = await axios.get<ApiResponse>(
      `${import.meta.env.VITE_API_URL}/ResearchProject`
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.msg);
    }
  } catch (error) {
    throw new Error("Error al obtener proyectos de investigacion");
  }
};
