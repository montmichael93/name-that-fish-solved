// If you have any types that are SHARED BY MANY COMPONENTS,put them here

export type isFunctionalFishNameCorrect = {
  checkUserInput: boolean | [boolean, number, number];
};

export type isClassFishNameCorrect = {
  checkUserInput: [number, number];
};
