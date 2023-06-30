const shades = {
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  BLACK_10: '#00000016',
  TORY_BLUE: '#304D95',
  SILVER_CHALICE: '#ABABAB',
  FIREBRICK: '#B12A1C',
  PURPLE_NAVY: '#404E7E',
  WATERMELON_RED: '#C04343',
  BEGONIA: '#FF7777',
  SEASHELL: '#FFF6ED',
  HARLEQUIN: '#24FF00',
  RED: '#FF0000',
  FOREST_GREEN: '#5DB075',
  DARK_ORANGE: '#FF8C00',
  PASTEL_ORANGE: '#FFB84E',
  DARK_SEA_GREEN: '#90C188',
  MUSTARD: '#FFD84E',
  APPLE: '#78B14B',
  PLATINUM: '#E8E8E8',
  LIGHT_RED: '#FFCFCF',
  CHINESE_RED: '#AD2D14',
  alpha: {
    alpha_1: 'FF',
    alpha_09: 'E6',
    alpha_08: 'CD',
    alpha_07: 'B4',
    alpha_06: '9B',
    alpha_05: '82',
    alpha_04: '69',
    alpha_03: '37',
    alpha_02: '1E',
    alpha_01: '05',
  },
};

const gray = {
  GRAY_03: '#333333',
  GRAY_04: '#444444',
  GRAY_05: '#555555',
  GRAY_06: '#666666',
  GRAY_07: '#777777',
  GRAY_08: '#888888',
  GRAY_09: '#999999',
  GRAY_EF: '#EFEFEF',
  SPANISH_GRAY: '#979797',
  LIGHT_GRAY: '#D5D5D5',
};
const applied = {
  BACKGROUND: shades.WHITE,
  TABBAR_INACTIVE: shades.SILVER_CHALICE,
  TABBAR_ACTIVE: shades.TORY_BLUE,
  WHITE_ALPHA85: `${shades.WHITE}D9`,
  WHITE_ALPHA30: `${shades.WHITE}4D`,
  BLACK_ALPHA50: `${shades.BLACK}80`,
};

export default {
  ...shades,
  ...applied,
  ...gray,
};
