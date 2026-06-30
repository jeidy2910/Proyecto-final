import { StyleSheet } from 'react-native';

/**
 * Tema centralizado de la aplicación
 * Todos los colores, fuentes y medidas se definen aquí
 */

export const COLORS = {
  // Colores principales
  primary: '#007AFF',
  secondary: '#34C759',
  danger: '#FF3B30',
  warning: '#FF9500',
  info: '#5AC8FA',
  
  // Colores de texto
  textPrimary: '#000000',
  textSecondary: '#666666',
  textLight: '#FFFFFF',
  
  // Colores de fondo
  background: '#F5F5F5',
  backgroundWhite: '#FFFFFF',
  
  // Bordes
  border: '#E0E0E0',
  borderDark: '#CCCCCC',
  
  // Estados
  success: '#34C759',
  error: '#FF3B30',
  disabled: '#CCCCCC',
};

export const FONTS = {
  // Tamaños
  small: 12,
  medium: 14,
  regular: 16,
  large: 18,
  xlarge: 22,
  xxlarge: 28,
  
  // Pesos
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 20,
  round: 50,
};

// Estilos comunes reutilizables
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});