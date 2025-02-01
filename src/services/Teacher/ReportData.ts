import axios from "axios";
import { ApiResponse } from "../../types/Response/ApiResponse";
import { ReportData } from "../../types/Teacher/Home";

//---------------------------------------------------------------- GET REPORT
export const getReportTeacherById = async (id: number): Promise<ReportData> => {
  try {
    const { data } = await axios.get<ApiResponse<ReportData>>(
      `${import.meta.env.VITE_API_URL}/Report/GetById/${id}`
    );
    return data.data; 
  } catch (error) {
    throw new Error("Error al obtener el reporte");
  }
};
