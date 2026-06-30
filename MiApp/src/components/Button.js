import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

/**
 * Componente Botón reutilizable
 * @param {string} title - Texto del botón
 * @param {function} onPress - Función al presionar
 * @param {string} variant - 'primary' | 'secondary' | 'danger' | 'outline'
 * @param {boolean} loading - Muestra spinner de carga
 * @param {boolean} disabled - Deshabilita el botón
 * @param {object} style - Estilos adicionales
 */
const Button = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false,
  disabled = false,
  style 
}) => {
  // Determinar estilos según variante
  const getButtonStyle = () => {
    if (disabled || loading) return styles.disabledButton;
    switch (variant) {
      case 'secondary': return styles.secondaryButton;
      case 'danger': return styles.dangerButton;
      case 'outline': return styles.outlineButton;
      default: return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    if (disabled || loading) return styles.disabledText;
    switch (variant) {
      case 'outline': return styles.outlineText;
      case 'secondary': return styles.secondaryText;
      default: return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#007AFF' : '#FFFFFF'} />
      ) : (
        <Text style={[styles.text, getTextStyle()]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    minHeight: 50,
  },
  // Variantes
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#34C759',
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  // Textos
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#007AFF',
  },
  disabledText: {
    color: '#888888',
  },
});

export default Button;