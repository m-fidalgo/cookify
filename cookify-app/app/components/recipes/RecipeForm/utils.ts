export const calculateDifficulty = (ingredientCount: number, stepsCount: number, time: number) => {
  let points = 0;

  if (ingredientCount > 5) {
    if (ingredientCount > 8) points = points + 1;
    points = points + 1;
  }

  if (stepsCount > 5) {
    if (stepsCount > 8) points = points + 1;
    points = points + 1;
  }

  if (time > 40) {
    if (stepsCount > 60) points = points + 1;
    points = points + 1;
  }

  return points <= 2 ? 0 : points <= 4 ? 1 : 2;
};
