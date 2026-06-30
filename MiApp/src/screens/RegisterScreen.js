import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { COLORS, SPACING } from '../styles/theme';
import { validateEmail, validatePassword } from '../utils/validations';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Mínimo 6 caracteres, una mayúscula y un número';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      // Simular llamada API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert('Éxito', 'Registro completado', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'No se pudo completar el registro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Crear Cuenta</Text>
      <Text style={styles.subtitle}>Regístrate para comenzar</Text>
      
      <View style={styles.form}>
        <Input
          label="Nombre Completo"
          placeholder="Tu nombre"
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
          error={errors.name}
        />
        
        <Input
          label="Correo Electrónico"
          placeholder="ejemplo@correo.com"
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
          error={errors.email}
          keyboardType="email-address"
        />
        
        <Input
          label="Contraseña"
          placeholder="Mínimo 6 caracteres"
          value={formData.password}
          onChangeText={(text) => setFormData({...formData, password: text})}
          error={errors.password}
          secureTextEntry
        />
        
        <Input
          label="Confirmar Contraseña"
          placeholder="Repite tu contraseña"
          value={formData.confirmPassword}
          onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
          error={errors.confirmPassword}
          secureTextEntry
        />
        
        <Button
          title="Registrarse"
          onPress={handleRegister}
          loading={loading}
          variant="primary"
          style={styles.registerButton}
        />
        
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>¿Ya tienes cuenta?</Text>
          <Button
            title="Iniciar Sesión"
            onPress={() => navigation.navigate('Login')}
            variant="outline"
            style={styles.loginButton}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: SPACING.xl,
    paddingBottom: SPACING.xxl,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xl,
  },
  form: {
    width: '100%',
  },
  registerButton: {
    width: '100%',
    marginTop: SPACING.md,
  },
  loginContainer: {
    marginTop: SPACING.lg,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  loginButton: {
    width: '100%',
  },
});

export default RegisterScreen;