import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from './theme';

/**
 * ESTILOS GLOBALES
 * Estos estilos se pueden usar en toda la aplicación
 */

export const globalStyles = StyleSheet.create({
  // ============ CONTENEDORES ============
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  containerWhite: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
  },
  
  containerCentered: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // ============ TEXTO ============
  textPrimary: {
    color: COLORS.textPrimary,
  },
  
  textSecondary: {
    color: COLORS.textSecondary,
  },
  
  textLight: {
    color: COLORS.textLight,
  },
  
  textCenter: {
    textAlign: 'center',
  },
  
  // ============ BOTONES ============
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
  },
  
  buttonSecondary: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
  },
  
  buttonDanger: {
    backgroundColor: COLORS.danger,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
  },
  
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
  },
  
  buttonText: {
    color: COLORS.textLight,
    fontSize: FONTS.regular,
    fontWeight: FONTS.bold,
  },
  
  buttonTextOutline: {
    color: COLORS.primary,
    fontSize: FONTS.regular,
    fontWeight: FONTS.bold,
  },
  
  // ============ INPUTS ============
  input: {
    backgroundColor: COLORS.backgroundWhite,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.medium,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    fontSize: FONTS.regular,
    color: COLORS.textPrimary,
    width: '100%',
  },
  
  inputFocused: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  
  inputError: {
    borderColor: COLORS.danger,
    borderWidth: 2,
  },
  
  inputDisabled: {
    backgroundColor: COLORS.borderLight,
    color: COLORS.textDisabled,
  },
  
  // ============ CARD ============
  card: {
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: BORDER_RADIUS.large,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // ============ AVATAR ============
  avatar: {
    width: 80,
    height: 80,
    borderRadius: BORDER_RADIUS.circle,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  avatarText: {
    color: COLORS.textLight,
    fontSize: FONTS.xxlarge,
    fontWeight: FONTS.bold,
  },
  
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.circle,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // ============ DIVISORES ============
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
  },
  
  dividerHorizontal: {
    width: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: SPACING.md,
  },
  
  // ============ MÁRGENES Y PADDINGS ============
  marginSm: {
    margin: SPACING.sm,
  },
  
  marginMd: {
    margin: SPACING.md,
  },
  
  marginLg: {
    margin: SPACING.lg,
  },
  
  paddingSm: {
    padding: SPACING.sm,
  },
  
  paddingMd: {
    padding: SPACING.md,
  },
  
  paddingLg: {
    padding: SPACING.lg,
  },
  
  // ============ FLEX ============
  flex1: {
    flex: 1,
  },
  
  flexRow: {
    flexDirection: 'row',
  },
  
  flexColumn: {
    flexDirection: 'column',
  },
  
  flexWrap: {
    flexWrap: 'wrap',
  },
  
  // ============ ALINEACIÓN ============
  alignCenter: {
    alignItems: 'center',
  },
  
  alignStart: {
    alignItems: 'flex-start',
  },
  
  alignEnd: {
    alignItems: 'flex-end',
  },
  
  justifyCenter: {
    justifyContent: 'center',
  },
  
  justifyStart: {
    justifyContent: 'flex-start',
  },
  
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  
  justifyBetween: {
    justifyContent: 'space-between',
  },
  
  justifyAround: {
    justifyContent: 'space-around',
  },
});

export default globalStyles;