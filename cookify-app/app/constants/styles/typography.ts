const ITALIC = '_Italic';

export const TYPOGRAPHY = {
  Light: 'DMSans_400Regular',
  Regular: 'DMSans_500Medium',
  Bold: 'DMSans_700Bold',
};

export type Typography = keyof typeof TYPOGRAPHY;

export const asItalic = (typography: string) => {
  return `${typography}${ITALIC}`;
};
