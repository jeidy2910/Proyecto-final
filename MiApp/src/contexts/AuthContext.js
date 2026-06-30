import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../utils/api';

// Crear el contexto
export const AuthContext = createContext();

// Provider del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Verificar usuario al iniciar
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      const tokenData = await AsyncStorage.getItem('token');
      
      if (userData && tokenData) {
        setUser(JSON.parse(userData));
        setToken(tokenData);
      }
    } catch (error) {
      console.error('Error al cargar usuario:', error);
    } finally {
      setLoading(false);
    }
  };

  // Función de login
  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simular llamada API
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: { id: 1, name: 'Usuario', email },
            token: 'fake-token-123456',
          });
        }, 1500);
      });
      
      // Guardar en AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(response.user));
      await AsyncStorage.setItem('token', response.token);
      
      setUser(response.user);
      setToken(response.token);
      
      return { success: true };
    } catch (error) {
      console.error('Error en login:', error);
      return { 
        success: false, 
        error: error.message || 'Error al iniciar sesión' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Función de registro
  const register = async (userData) => {
    try {
      setLoading(true);
      
      // Simular llamada API
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error en registro:', error);
      return { 
        success: false, 
        error: error.message || 'Error al registrar' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Función de logout
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('token');
      setUser(null);
      setToken(null);
      return { success: true };
    } catch (error) {
      console.error('Error en logout:', error);
      return { 
        success: false, 
        error: error.message || 'Error al cerrar sesión' 
      };
    }
  };

  // Función para actualizar usuario
  const updateUser = async (userData) => {
    try {
      const updatedUser = { ...user, ...userData };
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      return { 
        success: false, 
        error: error.message || 'Error al actualizar' 
      };
    }
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user && !!token,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;