import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import { COLORS, SPACING } from '../styles/theme';

const DetailsScreen = () => {
  const route = useRoute();
  const item = route.params?.item || { 
    title: 'Sin título', 
    description: 'Sin descripción' 
  };

  return (
    <View style={styles.container}>
      <Header title="Detalles" showBack />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Card
          title={item.title}
          subtitle="Detalles del producto"
        >
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.info}>ID: {item.id || 'N/A'}</Text>
          <Text style={styles.info}>Fecha: {new Date().toLocaleDateString()}</Text>
        </Card>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Editar"
            onPress={() => console.log('Editar')}
            variant="secondary"
            style={styles.button}
          />
          <Button 
            title="Eliminar"
            onPress={() => console.log('Eliminar')}
            variant="danger"
            style={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
  },
  description: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
    lineHeight: 24,
  },
  info: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.md,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default DetailsScreen;