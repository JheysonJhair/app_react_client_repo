import {
  ExperienceLaboral,
  ExperienceLaboralDocente,
  ExperienceTesis,
} from "../types/Teacher/Experience";

export const validateFormLaboral = (data: ExperienceLaboral) => {
  let tempErrors: Record<string, string> = {};
  let isValid = true;

  if (!data.institution.trim()) {
    tempErrors.institution = "La institución es requerida.";
    isValid = false;
  }

  if (!data.Charge.trim()) {
    tempErrors.Charge = "El cargo es requerido.";
    isValid = false;
  }

  if (!data.descriptionJob.trim()) {
    tempErrors.descriptionJob = "La descripción del trabajo es requerida.";
    isValid = false;
  } else if (data.descriptionJob.length < 10) {
    tempErrors.descriptionJob =
      "La descripción del trabajo debe tener al menos 10 caracteres.";
    isValid = false;
  }

  if (!data.idiCharge.trim()) {
    tempErrors.idiCharge = "El identificador del cargo es requerido.";
    isValid = false;
  }

  if (!data.startDate.trim()) {
    tempErrors.startDate = "La fecha de inicio es requerida.";
    isValid = false;
  }

  if (!data.endDate.trim()) {
    tempErrors.endDate = "La fecha de fin es requerida.";
    isValid = false;
  }

  return { tempErrors, isValid };
};

export const validateFormLaboralDocente = (data: ExperienceLaboralDocente) => {
  let tempErrors: Record<string, string> = {};
  let isValid = true;

  if (!data.institution.trim()) {
    tempErrors.institution = "La institución es requerida.";
    isValid = false;
  }

  if (!data.typeInstitution) {
    tempErrors.typeInstitution = "El tipo de institución es requerido.";
    isValid = false;
  }

  if (!data.typeTeacher) {
    tempErrors.typeTeacher = "El tipo de docente es requerido.";
    isValid = false;
  }

  if (!data.descriptionJob.trim()) {
    tempErrors.descriptionJob = "La descripción del trabajo es requerida.";
    isValid = false;
  } else if (data.descriptionJob.length < 10) {
    tempErrors.descriptionJob =
      "La descripción del trabajo debe tener al menos 10 caracteres.";
    isValid = false;
  }

  if (!data.startDate.trim()) {
    tempErrors.startDate = "La fecha de inicio es requerida.";
    isValid = false;
  }

  if (!data.endDate.trim()) {
    tempErrors.endDate = "La fecha de fin es requerida.";
    isValid = false;
  }

  return { tempErrors, isValid };
};

export const validateFormTesis = (data: ExperienceTesis) => {
  let tempErrors: Record<string, string> = {};
  let isValid = true;

  if (!data.university.trim()) {
    tempErrors.university = "La universidad es requerida.";
    isValid = false;
  }

  if (!data.thesis.trim()) {
    tempErrors.thesis = "El título de la tesis es requerido.";
    isValid = false;
  } else if (data.thesis.length < 5) {
    tempErrors.thesis =
      "El título de la tesis debe tener al menos 5 caracteres.";
    isValid = false;
  }

  if (!data.thesisStudent.trim()) {
    tempErrors.thesisStudent = "El nombre del estudiante es requerido.";
    isValid = false;
  }

  if (!data.repository.trim()) {
    tempErrors.repository = "El enlace del repositorio es requerido.";
    isValid = false;
  } else if (
    !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(data.repository)
  ) {
    tempErrors.repository = "Formato de URL no válido.";
    isValid = false;
  }

  if (!data.acceptanceDate.trim()) {
    tempErrors.acceptanceDate = "La fecha de aceptación es requerida.";
    isValid = false;
  }

  return { tempErrors, isValid };
};
