import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import { ROUTES } from '../constants/routes';
import { COLORS, SPACING } from '../styles/theme';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  
  // Datos de ejemplo
  const [items, setItems] = useState([
    { id: '1', title: 'Producto 1', description: 'Descripción del producto 1' },
    { id: '2', title: 'Producto 2', description: 'Descripción del producto 2' },
    { id: '3', title: 'Producto 3', description: 'Descripción del producto 3' },
  ]);

  const handleRefresh = () => {
    setRefreshing(true);
    // Simular carga de datos
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const handleItemPress = (item) => {
    navigation.navigate(ROUTES.DETAILS, { item });
  };

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      subtitle={item.description}
      onPress={() => handleItemPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Header title="Inicio" />
      
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay elementos</Text>
          </View>
        }
      />
      
      <View style={styles.footer}>
        <Button 
          title="Agregar Nuevo"
          onPress={() => console.log('Agregar nuevo')}
          variant="primary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    padding: SPACING.md,
  },
  footer: {
    padding: SPACING.md,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});

export default HomeScreen;