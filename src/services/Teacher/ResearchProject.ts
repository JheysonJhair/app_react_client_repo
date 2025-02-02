import axios from "axios";
import { ApiResponse } from "../../types/Response/ApiResponse";
import { ResearchProjectDto } from "../../types/ResearchProject";
import { ProjectFormData } from "../../types/Teacher/Project";

//---------------------------------------------------------------- GET RESEARCH PROJECT
export const getResearchProjects = async (): Promise<ResearchProjectDto[]> => {
  try {
    const { data } = await axios.get<ApiResponse<ResearchProjectDto[]>>(
      `${import.meta.env.VITE_API_URL}/Research/GetAllResearchProject`
    );
    return data.data; 
  } catch (error) {
    throw new Error("Error al obtener proyectos de investigación");
  }
};

//---------------------------------------------------------------- CREATE EXPERIENCE LABORAL
export const createResearchProject = async (
  project: ProjectFormData
): Promise<ApiResponse<ProjectFormData>> => {
  try {
    const { data } = await axios.post<ApiResponse<ProjectFormData>>(
      `${import.meta.env.VITE_API_URL}/Research/CreateResearchProject`,
      project
    );
    return data;
  } catch (error) {
    throw new Error("Error al crear el proyecto");
  }
};