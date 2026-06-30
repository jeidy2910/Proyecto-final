import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

/**
 * Componente Header reutilizable
 * @param {string} title - Título del header
 * @param {boolean} showBack - Muestra botón de retroceso
 * @param {function} onBack - Función personalizada al retroceder
 * @param {node} rightComponent - Componente a la derecha
 */
const Header = ({ 
  title, 
  showBack = false, 
  onBack, 
  rightComponent,
  backgroundColor = '#FFFFFF',
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <View style={[styles.header, { backgroundColor }]}>
        <View style={styles.leftContainer}>
          {showBack && (
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#000000" />
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        
        <View style={styles.rightContainer}>
          {rightComponent}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    height: 60,
  },
  leftContainer: {
    width: 50,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  rightContainer: {
    width: 50,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 4,
  },
});

export default Header;