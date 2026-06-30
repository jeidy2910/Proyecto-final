/**
 * Validaciones reutilizables para formularios
 */

/**
 * Valida un correo electrónico
 * @param {string} email - Correo a validar
 * @returns {boolean} true si es válido
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Valida una contraseña (mínimo 6 caracteres, mayúscula, minúscula, número)
 * @param {string} password - Contraseña a validar
 * @returns {boolean} true si es válida
 */
export const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return regex.test(password);
};

/**
 * Valida un número de teléfono (10 dígitos)
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} true si es válido
 */
export const validatePhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

/**
 * Valida que un campo no esté vacío
 * @param {string} value - Valor a validar
 * @returns {boolean} true si tiene contenido
 */
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Valida longitud mínima
 * @param {string} value - Valor a validar
 * @param {number} minLength - Longitud mínima
 * @returns {boolean} true si cumple
 */
export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength;
};

/**
 * Valida longitud máxima
 * @param {string} value - Valor a validar
 * @param {number} maxLength - Longitud máxima
 * @returns {boolean} true si cumple
 */
export const validateMaxLength = (value, maxLength) => {
  return value && value.length <= maxLength;
};

/**
 * Valida que dos campos coincidan
 * @param {string} value1 - Primer valor
 * @param {string} value2 - Segundo valor
 * @returns {boolean} true si coinciden
 */
export const validateMatch = (value1, value2) => {
  return value1 === value2;
};

/**
 * Valida que un valor sea un número
 * @param {*} value - Valor a validar
 * @returns {boolean} true si es número
 */
export const validateNumber = (value) => {
  return !isNaN(value) && value !== '';
};