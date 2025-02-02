import axios from "axios";
import { ApiResponse } from "../../types/Response/ApiResponse";
import {
  ExperienceLaboral,
  ExperienceLaboralDocente,
  ExperienceTesis,
} from "../../types/Teacher/Experience";

//---------------------------------------------------------------- CREATE EXPERIENCE LABORAL
export const createExperienceLaboral = async (
  experiencia: ExperienceLaboral
): Promise<ApiResponse<ExperienceLaboral>> => {
  try {
    const { data } = await axios.post<ApiResponse<ExperienceLaboral>>(
      `${import.meta.env.VITE_API_URL}/Teacher/CreateWorkExperience`,
      experiencia
    );
    return data;
  } catch (error) {
    throw new Error("Error al crear la experiencia laboral");
  }
};

//---------------------------------------------------------------- UPDATE EXPERIENCE LABORAL
export const updateExperienceLaboral = async (
  id: number,
  experiencia: ExperienceLaboral
): Promise<ApiResponse<ExperienceLaboral>> => {
  try {
    const { data } = await axios.put<ApiResponse<ExperienceLaboral>>(
      `${import.meta.env.VITE_API_URL}/Experience/Update/${id}`,
      experiencia
    );
    return data;
  } catch (error) {
    throw new Error("Error al actualizar la experiencia laboral");
  }
};

//---------------------------------------------------------------- CREATE EXPERIENCE LABORAL DOCENTE
export const createExperienceLaboralDocente = async (
  experiencia: ExperienceLaboralDocente
): Promise<ApiResponse<ExperienceLaboralDocente>> => {
  try {
    const { data } = await axios.post<ApiResponse<ExperienceLaboralDocente>>(
      `${import.meta.env.VITE_API_URL}/Teacher/CreateTeachingExperience`,
      experiencia
    );
    return data;
  } catch (error) {
    throw new Error("Error al crear la experiencia laboral docente");
  }
};

//---------------------------------------------------------------- CREATE EXPERIENCE TESIS
export const createExperienceTesis = async (
  experiencia: ExperienceTesis
): Promise<ApiResponse<ExperienceTesis>> => {
  try {
    const { data } = await axios.post<ApiResponse<ExperienceTesis>>(
      `${import.meta.env.VITE_API_URL}/Teacher/CreateThesisAdvisingExperience`,
      experiencia
    );
    return data;
  } catch (error) {
    throw new Error("Error al crear la experiencia tesis");
  }
};
