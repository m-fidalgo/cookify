import * as React from 'react';

import { CarouselSection, CarouselSectionSkeleton } from 'app/components/layout';
import { CarouselItem } from 'app/components/layout/CarouselSection/types';
import { searchRecipes } from 'app/services';
import { Recipe } from 'app/types';

import { RecipesPreviewSectionProps } from './types';

export const RecipesPreviewSection: React.FC<RecipesPreviewSectionProps> = ({
  title,
  mini = false,
  params,
  recipes,
  onPressItem,
  onPressSeeMore,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [formattedRecipes, setFormattedRecipes] = React.useState<CarouselItem[]>([]);

  const formatRecipes = (recipes?: Recipe[]) => {
    const formattedRecipes = recipes?.map(({ id, title, images }) => {
      return {
        id,
        title,
        imageUrl: images.length ? images[0]?.url : undefined,
      };
    });
    setFormattedRecipes(formattedRecipes || []);
  };

  const getRecipes = async () => {
    if (!params) return;
    setLoading(true);
    const response = await searchRecipes(params);
    formatRecipes(response?.results);
    setLoading(false);
  };

  React.useEffect(() => {
    if (!recipes) getRecipes();
    else formatRecipes(recipes);
  }, [recipes, params]);

  return loading ? (
    <CarouselSectionSkeleton />
  ) : (
    <CarouselSection
      mini={mini}
      title={title}
      emptyResultsMessage="Nenhuma receita encontrada"
      data={formattedRecipes}
      onPressItem={onPressItem}
      onPressSeeMore={onPressSeeMore}
    />
  );
};
