/**
 * Configuración de API
 */

// URL base de la API
export const API_BASE_URL = 'https://api.example.com';

// Endpoints de la API
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh-token',
  
  // Users
  GET_USER: '/users/me',
  UPDATE_USER: '/users/me',
  GET_USERS: '/users',
  
  // Products
  GET_PRODUCTS: '/products',
  GET_PRODUCT: '/products/:id',
  CREATE_PRODUCT: '/products',
  UPDATE_PRODUCT: '/products/:id',
  DELETE_PRODUCT: '/products/:id',
};

// Headers por defecto
export const getDefaultHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
});

// Función para construir URLs
export const buildUrl = (endpoint, params = {}) => {
  let url = `${API_BASE_URL}${endpoint}`;
  
  // Reemplazar parámetros en la ruta (ej: /users/:id)
  Object.keys(params).forEach(key => {
    url = url.replace(`:${key}`, params[key]);
  });
  
  return url;
};

// Función para manejar errores de API
export const handleApiError = (error) => {
  if (error.response) {
    // El servidor respondió con un código de error
    const { status, data } = error.response;
    console.error(`API Error ${status}:`, data);
    
    switch (status) {
      case 400:
        return 'Datos inválidos';
      case 401:
        return 'No autorizado. Inicia sesión nuevamente';
      case 403:
        return 'No tienes permisos para esta acción';
      case 404:
        return 'Recurso no encontrado';
      case 500:
        return 'Error del servidor. Intenta más tarde';
      default:
        return data?.message || 'Error desconocido';
    }
  } else if (error.request) {
    // No se recibió respuesta
    return 'No se pudo conectar con el servidor';
  } else {
    // Error al configurar la petición
    return error.message || 'Error inesperado';
  }
};

// Función para hacer peticiones con autenticación
export const fetchWithAuth = async (url, options = {}) => {
  const token = await getToken(); // Implementar función para obtener token
  
  const headers = {
    ...getDefaultHeaders(),
    ...options.headers,
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(url, {
    ...options,
    headers,
  });
  
  if (!response.ok) {
    const error = new Error('API Error');
    error.response = response;
    throw error;
  }
  
  return response.json();
};

// Función para obtener token (implementar según tu almacenamiento)
const getToken = async () => {
  // Aquí iría la lógica para obtener el token de AsyncStorage
  // Ejemplo: return await AsyncStorage.getItem('token');
  return null;
};

// Exportar API
export const api = {
  get: (endpoint, params = {}) => {
    const url = buildUrl(endpoint, params);
    return fetchWithAuth(url);
  },
  post: (endpoint, data, params = {}) => {
    const url = buildUrl(endpoint, params);
    return fetchWithAuth(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  put: (endpoint, data, params = {}) => {
    const url = buildUrl(endpoint, params);
    return fetchWithAuth(url, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  delete: (endpoint, params = {}) => {
    const url = buildUrl(endpoint, params);
    return fetchWithAuth(url, {
      method: 'DELETE',
    });
  },
};