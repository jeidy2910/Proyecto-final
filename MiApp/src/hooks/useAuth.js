import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

/**
 * Hook personalizado para usar el contexto de autenticación
 * @returns {object} { user, loading, login, logout, register }
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  
  return context;
};

export default useAuth;