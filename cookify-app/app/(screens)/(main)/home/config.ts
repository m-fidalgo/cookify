import { SearchRecipesParams } from 'app/services';

const defaultParams: SearchRecipesParams = {
  page: 1,
};

export const sections: { title: string; params: SearchRecipesParams }[] = [
  {
    title: 'Recentes',
    params: defaultParams,
  },
  {
    title: 'Recomendados',
    params: {
      ...defaultParams,
      sortBy: 'popular',
    },
  },
  {
    title: 'Novos em Massas',
    params: {
      ...defaultParams,
      categoryIds: [10],
    },
  },
];
