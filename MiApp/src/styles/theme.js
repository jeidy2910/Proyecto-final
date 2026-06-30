import { StyleSheet } from 'react-native';

/**
 * TEMA CENTRALIZADO DE LA APLICACIÓN
 * Todos los colores, fuentes y medidas se definen aquí
 */

// ============ COLORES ============
export const COLORS = {
  // Colores principales
  primary: '#007AFF',
  secondary: '#34C759',
  danger: '#FF3B30',
  warning: '#FF9500',
  info: '#5AC8FA',
  success: '#34C759',
  error: '#FF3B30',
  
  // Colores de texto
  textPrimary: '#000000',
  textSecondary: '#666666',
  textLight: '#FFFFFF',
  textDisabled: '#999999',
  
  // Colores de fondo
  background: '#F5F5F5',
  backgroundWhite: '#FFFFFF',
  backgroundDark: '#1C1C1E',
  
  // Colores de bordes
  border: '#E0E0E0',
  borderDark: '#CCCCCC',
  borderLight: '#EEEEEE',
  
  // Estados
  disabled: '#CCCCCC',
  placeholder: '#999999',
  
  // Sombras
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.25)',
};

// ============ FUENTES ============
export const FONTS = {
  // Tamaños
  xs: 10,
  small: 12,
  medium: 14,
  regular: 16,
  large: 18,
  xlarge: 22,
  xxlarge: 28,
  xxxlarge: 34,
  
  // Pesos
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

// ============ ESPACIADOS ============
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// ============ BORDES REDONDEADOS ============
export const BORDER_RADIUS = {
  none: 0,
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 16,
  round: 20,
  circle: 50,
};

// ============ SOMBRAS ============
export const SHADOWS = {
  small: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  large: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
};

// ============ ESTILOS COMUNES REUTILIZABLES ============
export const commonStyles = StyleSheet.create({
  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  // Contenedor con padding
  containerWithPadding: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
  
  // Centrar contenido
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Fila
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  // Fila con espacio entre elementos
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  // Columna
  column: {
    flexDirection: 'column',
  },
  
  // Sombra media
  shadow: SHADOWS.medium,
  
  // Tarjeta
  card: {
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: BORDER_RADIUS.large,
    padding: SPACING.md,
    ...SHADOWS.medium,
  },
  
  // Separador
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
  },
  
  // Texto de título
  title: {
    fontSize: FONTS.xlarge,
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
  },
  
  // Texto de subtítulo
  subtitle: {
    fontSize: FONTS.medium,
    color: COLORS.textSecondary,
  },
  
  // Texto de error
  errorText: {
    color: COLORS.error,
    fontSize: FONTS.small,
  },
});

export default {
  COLORS,
  FONTS,
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
  commonStyles,
};