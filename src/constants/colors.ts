export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#26AD26',
  red: '#CA2116',

  card_bckg: '#2f6077',

  main_gradient: ['#1F687D', '#094358'],
  green_gradient: ['#3CCB3C', '#108D10'],
  red_gradient: ['#AE1919', '#E02914'],
  yellow_gradient: ['#FDF0B5', '#D0BB5A'],
  border_gradient: ['#0B465B', '#1D657A'],
  liquid_gradient: [
    'rgba(255, 255, 255, 0.5)',
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.05)',
  ],

  red_like: '#C63737',

  main_border: '#0B465B',

  btn_light_overlay: 'rgba(255, 255, 255, 0.1)',
  btn_dark_overlay: 'rgba(0, 0, 0, 0.2)',

  liquid_overlay: 'rgba(255, 255, 255, 0.2)',
  liquid_border: 'rgba(255, 255, 255, 0.5)',

  green_overlay: 'rgba(34, 220, 115, 0.74)',
};

export const GRADIENT_MAP = {
  main_gradient: COLORS.main_gradient,
  green_gradient: COLORS.green_gradient,
  red_gradient: COLORS.red_gradient,
  liquid_gradient: COLORS.liquid_gradient,
  yellow_gradient: COLORS.yellow_gradient,
  border_gradient: COLORS.border_gradient,
} as const;

export type GradientVariant = keyof typeof GRADIENT_MAP;
