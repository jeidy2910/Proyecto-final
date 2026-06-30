import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { COLORS, SPACING } from '../styles/theme';
import { validateEmail } from '../utils/validations';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'El correo es requerido';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Correo inválido';
    }
    
    if (!password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      // Simular llamada API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Si todo va bien
      Alert.alert('Éxito', 'Inicio de sesión exitoso');
      // Navegar a la pantalla principal
      // navigation.replace('Main');
    } catch (error) {
      Alert.alert('Error', 'Credenciales incorrectas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
      </View>
      
      <View style={styles.form}>
        <Input
          label="Correo Electrónico"
          placeholder="ejemplo@correo.com"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
          keyboardType="email-address"
        />
        
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChangeText={setPassword}
          error={errors.password}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        
        <Button
          title="Iniciar Sesión"
          onPress={handleLogin}
          loading={loading}
          variant="primary"
          style={styles.loginButton}
        />
        
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}> Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: SPACING.xl,
    justifyContent: 'center',
  },
  header: {
    marginBottom: SPACING.xl,
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
  },
  form: {
    width: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: SPACING.md,
  },
  forgotText: {
    color: COLORS.primary,
    fontSize: 14,
  },
  loginButton: {
    width: '100%',
    marginTop: SPACING.md,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.lg,
  },
  registerText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  registerLink: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default LoginScreen;