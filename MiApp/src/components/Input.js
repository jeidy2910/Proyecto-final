import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * Componente Input reutilizable
 * @param {string} label - Etiqueta del campo
 * @param {string} placeholder - Texto de ayuda
 * @param {string} value - Valor del input
 * @param {function} onChangeText - Función al cambiar texto
 * @param {string} error - Mensaje de error
 * @param {boolean} secureTextEntry - Campo de contraseña
 * @param {string} keyboardType - Tipo de teclado
 */
const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  editable = true,
}) => {
  const [showPassword, setShowPassword] = useState(!secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={[
        styles.inputContainer,
        isFocused && styles.focused,
        error && styles.errorBorder,
        !editable && styles.disabledContainer,
      ]}>
        <TextInput
          style={[styles.input, !editable && styles.disabledText]}
          placeholder={placeholder}
          placeholderTextColor="#999999"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable}
        />
        
        {secureTextEntry && (
          <TouchableOpacity 
            onPress={togglePasswordVisibility} 
            style={styles.eyeIcon}
          >
            <Ionicons 
              name={showPassword ? 'eye-off' : 'eye'} 
              size={24} 
              color="#666666" 
            />
          </TouchableOpacity>
        )}
      </View>
      
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#000000',
  },
  focused: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  errorBorder: {
    borderColor: '#FF3B30',
    borderWidth: 2,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  eyeIcon: {
    padding: 8,
  },
  disabledContainer: {
    backgroundColor: '#F5F5F5',
  },
  disabledText: {
    color: '#999999',
  },
});

export default Input;