import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Componente Card reutilizable
 * @param {string} title - Título de la tarjeta
 * @param {string} subtitle - Subtítulo
 * @param {node} children - Contenido interno
 * @param {function} onPress - Función al presionar
 * @param {object} style - Estilos adicionales
 */
const Card = ({ 
  title, 
  subtitle, 
  children, 
  onPress, 
  style,
  footer 
}) => {
  const Container = onPress ? TouchableOpacity : View;
  
  return (
    <Container 
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      
      {children && <View style={styles.content}>{children}</View>}
      
      {footer && <View style={styles.footer}>{footer}</View>}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  content: {
    marginTop: 8,
  },
  footer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});

export default Card;
