import axios from "axios";
import { ApiResponse } from "../types/Response/ApiResponse";
import { ScientificArticle } from "../types/ScientificArticle";

//---------------------------------------------------------------- GET ARTICLES
export const getScientificArticle = async (): Promise<ScientificArticle[]> => {
  try {
    const response = await axios.get<ApiResponse>(
      `${import.meta.env.VITE_API_URL}/ScientificArticle`
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.msg);
    }
  } catch (error) {
    throw new Error("Error al obtener articulos");
  }
};
