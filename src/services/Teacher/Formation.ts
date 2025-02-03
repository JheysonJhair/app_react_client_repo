import axios from "axios";
import { ApiResponse } from "../../types/Response/ApiResponse";
import { Formation } from "../../types/Teacher/FormationAcademic";


//---------------------------------------------------------------- GET ARTICLE BY TEACHER ID
export const getFormationByTeacherId = async (
  teacherId: number
): Promise<Formation[]> => {
  try {
    const { data } = await axios.get<ApiResponse<Formation[]>>(
      `${import.meta.env.VITE_API_URL}/Teacher/GetEducationFormationById/${teacherId}`
    );
    return data.data;
  } catch (error) {
    throw new Error("Error al obtener la formacion del docente");
  }
};


//---------------------------------------------------------------- CREATE ARTICLE
export const createFormationDocente = async (
  article: Formation
): Promise<ApiResponse<Formation>> => {
  try {
    const { data } = await axios.post<ApiResponse<Formation>>(
      `${import.meta.env.VITE_API_URL}/Research/CreateScientificArticle`,
      article
    );
    return data;
  } catch (error) {
    throw new Error("Error al crear la la formacion");
  }
};



//---------------------------------------------------------------- UPDATE ARTICLE
export const updateFormationDocente = async (
  article: Formation
): Promise<ApiResponse<Formation>> => {
  try {
    const { data } = await axios.put<ApiResponse<Formation>>(
      `${import.meta.env.VITE_API_URL}/Research/UpdateScientificFormation`,
      article
    );
    return data;
  } catch (error) {
    throw new Error("Error al actulizar la formacion");
  }
};

//---------------------------------------------------------------- DELETE ARTICLE
export const deleteFormationDocente = async (
  id: string
): Promise<ApiResponse<null>> => {
  try {
    const { data } = await axios.delete<ApiResponse<null>>(
      `${import.meta.env.VITE_API_URL}/Research/DeleteScientificArticle/${id}`
    );
    return data;
  } catch (error) {
    throw new Error("Error al eliminar la formacion del docente");
  }
};