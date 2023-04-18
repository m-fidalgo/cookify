const ITALIC = "_Italic";

export const TYPOGRAPHY = {
  Light: "DMSans_400Regular",
  Regular: "DMSans_500Medium",
  Bold: "DMSans_700Bold",
};

export type Typography = keyof typeof TYPOGRAPHY;

export const italic = (typography: Typography) => {
  return `${typography}${ITALIC}`;
};
