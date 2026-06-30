import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import { COLORS, SPACING } from '../styles/theme';

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: 'Usuario Ejemplo',
    email: 'usuario@ejemplo.com',
    phone: '3001234567',
  });

  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Cerrar Sesión', 
          style: 'destructive',
          onPress: () => {
            console.log('Cerrando sesión...');
            // navigation.replace('Login');
          }
        }
      ]
    );
  };

  const menuItems = [
    { icon: 'person-outline', label: 'Editar Perfil', onPress: () => console.log('Editar') },
    { icon: 'settings-outline', label: 'Configuración', onPress: () => console.log('Config') },
    { icon: 'notifications-outline', label: 'Notificaciones', onPress: () => console.log('Notif') },
    { icon: 'help-circle-outline', label: 'Ayuda', onPress: () => console.log('Ayuda') },
  ];

  return (
    <View style={styles.container}>
      <Header title="Perfil" />
      
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person-circle" size={100} color={COLORS.primary} />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>
      
      <Card style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={20} color={COLORS.textSecondary} />
          <Text style={styles.infoText}>{user.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={20} color={COLORS.textSecondary} />
          <Text style={styles.infoText}>{user.email}</Text>
        </View>
      </Card>
      
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.menuLeft}>
              <Ionicons name={item.icon} size={24} color={COLORS.textPrimary} />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
          </TouchableOpacity>
        ))}
      </View>
      
      <Button
        title="Cerrar Sesión"
        onPress={handleLogout}
        variant="danger"
        style={styles.logoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  avatarContainer: {
    marginBottom: SPACING.md,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  userEmail: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  infoCard: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.md,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 16,
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: SPACING.md,
    marginTop: SPACING.md,
    borderRadius: 12,
    paddingVertical: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  logoutButton: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.xl,
  },
});

export default ProfileScreen;