import axios from "axios";
import { ApiResponse } from "../types/Response/ApiResponse";
import { Teacher } from "../types/Teacher";

//---------------------------------------------------------------- GET TEACHERS
export const getTeacher = async (): Promise<Teacher[]> => {
  try {
    const response = await axios.get<ApiResponse>(
      `${import.meta.env.VITE_API_URL}/Teacher`
    );
    if (response.data && response.data.data) {
      return response.data.data as Teacher[];
    }
  } catch (error) {
    console.error("Error fetching teachers:", error);
  }
  
  return [
    {
      "IdTeacher": 1,
      "FirstName": "Juan",
      "LastName": "Pérez",
      "Phone": "123456789",
      "Description": "Profesor de matemáticas con más de 10 años de experiencia.",
      "Mail": "juan.perez@example.com",
      "BirthDate": "1980-05-15",
      "WorkExperiences": [
        {
          "Id": 1,
          "Institution": "Colegio Nacional",
          "Job": "Profesor de Matemáticas",
          "JobDescription": "Impartió clases a nivel secundario.",
          "JobIDI": "MAT101",
          "StartDate": "2010-01-01",
          "EndDate": "2015-12-31"
        }
      ],
      "TeachingExperiences": [
        {
          "Id": 1,
          "Institution": "Universidad Nacional",
          "InstitutionType": "Universidad",
          "TeacherType": "Tiempo Completo",
          "JobDescription": "Docente investigador.",
          "StartDate": "2016-01-01",
          "EndDate": "2020-12-31"
        }
      ],
      "ThesisAdvisingExperiences": [
        {
          "Id": 1,
          "University": "Universidad Nacional",
          "Thesis": "Análisis de sistemas algebraicos",
          "ThesisStudent": "Ana López",
          "Repository": "https://tesis.un.edu.pe/123",
          "ThesisAcceptanceDate": "2019-06-15"
        }
      ]
    },
    {
      "IdTeacher": 2,
      "FirstName": "María",
      "LastName": "López",
      "Phone": "987654321",
      "Description": "Especialista en ciencias sociales.",
      "Mail": "maria.lopez@example.com",
      "BirthDate": "1985-10-20",
      "WorkExperiences": [
        {
          "Id": 2,
          "Institution": "Instituto de Ciencias Sociales",
          "Job": "Investigadora",
          "JobDescription": "Estudios en sociología aplicada.",
          "JobIDI": "SOC301",
          "StartDate": "2012-03-01",
          "EndDate": "2018-05-31"
        }
      ],
      "TeachingExperiences": [
        {
          "Id": 2,
          "Institution": "Universidad de Ciencias Sociales",
          "InstitutionType": "Universidad",
          "TeacherType": "Catedrática",
          "JobDescription": "Impartió cursos de sociología.",
          "StartDate": "2019-01-01",
          "EndDate": ""
        }
      ],
      "ThesisAdvisingExperiences": [
        {
          "Id": 2,
          "University": "Universidad de Ciencias Sociales",
          "Thesis": "Impacto de las redes sociales en la sociedad moderna",
          "ThesisStudent": "Carlos García",
          "Repository": "https://tesis.ucs.edu.pe/456",
          "ThesisAcceptanceDate": "2021-09-10"
        }
      ]
    },
    {
      "IdTeacher": 3,
      "FirstName": "Luis",
      "LastName": "Ramírez",
      "Phone": "555123456",
      "Description": "Docente de ingeniería civil.",
      "Mail": "luis.ramirez@example.com",
      "BirthDate": "1978-08-25",
      "WorkExperiences": [
        {
          "Id": 3,
          "Institution": "Empresa Constructora XYZ",
          "Job": "Ingeniero Civil",
          "JobDescription": "Diseño y supervisión de obras.",
          "JobIDI": "CIV201",
          "StartDate": "2000-06-01",
          "EndDate": "2010-08-31"
        }
      ],
      "TeachingExperiences": [
        {
          "Id": 3,
          "Institution": "Universidad de Ingeniería",
          "InstitutionType": "Universidad",
          "TeacherType": "Parcial",
          "JobDescription": "Docente de estructuras.",
          "StartDate": "2011-01-01",
          "EndDate": ""
        }
      ],
      "ThesisAdvisingExperiences": [
        {
          "Id": 3,
          "University": "Universidad de Ingeniería",
          "Thesis": "Análisis estructural de puentes",
          "ThesisStudent": "Miguel Fernández",
          "Repository": "https://tesis.ui.edu.pe/789",
          "ThesisAcceptanceDate": "2020-02-20"
        }
      ]
    },
    {
      "IdTeacher": 4,
      "FirstName": "Carmen",
      "LastName": "Hernández",
      "Phone": "444789123",
      "Description": "Docente en ciencias naturales.",
      "Mail": "carmen.hernandez@example.com",
      "BirthDate": "1990-07-12",
      "WorkExperiences": [
        {
          "Id": 4,
          "Institution": "Instituto de Investigación Ambiental",
          "Job": "Investigadora",
          "JobDescription": "Estudios en biodiversidad.",
          "JobIDI": "ENV102",
          "StartDate": "2013-01-01",
          "EndDate": "2018-12-31"
        }
      ],
      "TeachingExperiences": [
        {
          "Id": 4,
          "Institution": "Universidad de Ciencias Naturales",
          "InstitutionType": "Universidad",
          "TeacherType": "Tiempo Completo",
          "JobDescription": "Impartió cursos de ecología.",
          "StartDate": "2019-01-01",
          "EndDate": ""
        }
      ],
      "ThesisAdvisingExperiences": [
        {
          "Id": 4,
          "University": "Universidad de Ciencias Naturales",
          "Thesis": "Conservación de especies en peligro",
          "ThesisStudent": "Lucía Torres",
          "Repository": "https://tesis.ucn.edu.pe/1234",
          "ThesisAcceptanceDate": "2022-07-15"
        }
      ]
    },
    {
      "IdTeacher": 5,
      "FirstName": "Pedro",
      "LastName": "Gómez",
      "Phone": "321654987",
      "Description": "Especialista en ciencias computacionales.",
      "Mail": "pedro.gomez@example.com",
      "BirthDate": "1987-09-10",
      "WorkExperiences": [
        {
          "Id": 5,
          "Institution": "Centro de Desarrollo Tecnológico",
          "Job": "Analista de Sistemas",
          "JobDescription": "Diseño y mantenimiento de sistemas informáticos.",
          "JobIDI": "IT501",
          "StartDate": "2008-01-01",
          "EndDate": "2014-12-31"
        }
      ],
      "TeachingExperiences": [
        {
          "Id": 5,
          "Institution": "Instituto Tecnológico Nacional",
          "InstitutionType": "Instituto",
          "TeacherType": "Catedrático",
          "JobDescription": "Docente de programación avanzada.",
          "StartDate": "2015-01-01",
          "EndDate": ""
        }
      ],
      "ThesisAdvisingExperiences": [
        {
          "Id": 5,
          "University": "Instituto Tecnológico Nacional",
          "Thesis": "Desarrollo de aplicaciones móviles",
          "ThesisStudent": "Sara Martínez",
          "Repository": "https://tesis.itn.edu.pe/5678",
          "ThesisAcceptanceDate": "2021-04-10"
        }
      ]
    },
    {
      "IdTeacher": 6,
      "FirstName": "Laura",
      "LastName": "Martínez",
      "Phone": "789654123",
      "Description": "Docente de educación primaria con énfasis en didáctica.",
      "Mail": "laura.martinez@example.com",
      "BirthDate": "1992-11-03",
      "WorkExperiences": [
        {
          "Id": 6,
          "Institution": "Escuela Primaria Los Pinos",
          "Job": "Maestra",
          "JobDescription": "Desarrollo de estrategias pedagógicas innovadoras.",
          "JobIDI": "EDU202",
          "StartDate": "2012-01-01",
          "EndDate": "2018-07-31"
        }
      ],
      "TeachingExperiences": [
        {
          "Id": 6,
          "Institution": "Universidad Pedagógica",
          "InstitutionType": "Universidad",
          "TeacherType": "Tiempo Completo",
          "JobDescription": "Docente formadora de futuros maestros.",
          "StartDate": "2019-01-01",
          "EndDate": ""
        }
      ],
      "ThesisAdvisingExperiences": [
        {
          "Id": 6,
          "University": "Universidad Pedagógica",
          "Thesis": "Estrategias pedagógicas para niños con TDAH",
          "ThesisStudent": "Roberto Díaz",
          "Repository": "https://tesis.up.edu.pe/91011",
          "ThesisAcceptanceDate": "2022-03-20"
        }
      ]
    },
    {
      "IdTeacher": 7,
      "FirstName": "Sofía",
      "LastName": "Morales",
      "Phone": "456123789",
      "Description": "Docente especializada en literatura.",
      "Mail": "sofia.morales@example.com",
      "BirthDate": "1983-06-18",
      "WorkExperiences": [
        {
          "Id": 7,
          "Institution": "Instituto de Letras",
          "Job": "Editora",
          "JobDescription": "Edición de textos académicos.",
          "JobIDI": "LIT303",
          "StartDate": "2010-05-01",
          "EndDate": "2015-09-30"
        }
      ],
      "TeachingExperiences": [
        {
          "Id": 7,
          "Institution": "Universidad de Literatura",
          "InstitutionType": "Universidad",
          "TeacherType": "Catedrática",
          "JobDescription": "Docente de literatura clásica.",
          "StartDate": "2016-01-01",
          "EndDate": ""
        }
      ],
      "ThesisAdvisingExperiences": [
        {
          "Id": 7,
          "University": "Universidad de Literatura",
          "Thesis": "Análisis de la obra de Gabriel García Márquez",
          "ThesisStudent": "Manuel Ortega",
          "Repository": "https://tesis.ul.edu.pe/78910",
          "ThesisAcceptanceDate": "2020-08-15"
        }
      ]
    }
  ]
};
