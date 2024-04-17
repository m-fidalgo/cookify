export type Difficulty = 'easy' | 'medium' | 'hard';

export const DIFFICULTIES: { [key in Difficulty]: string } = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
};
