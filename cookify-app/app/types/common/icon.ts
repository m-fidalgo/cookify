import { MaterialIcons } from '@expo/vector-icons';

export type IconSize = 'small' | 'medium' | 'large';

export type IconName = keyof typeof MaterialIcons.glyphMap;
