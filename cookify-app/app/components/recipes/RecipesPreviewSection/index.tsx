import * as React from 'react';

import { CarouselSection, CarouselSectionSkeleton } from 'app/components/layout';
import { CarouselItem } from 'app/components/layout/CarouselSection/types';
import { searchRecipes } from 'app/services';

import { RecipesPreviewSectionProps } from './types';

export const RecipesPreviewSection: React.FC<RecipesPreviewSectionProps> = ({
  title,
  params,
  onPressItem,
  onPressSeeMore,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [formattedRecipes, setFormattedRecipes] = React.useState<CarouselItem[]>([]);

  const getRecipes = async () => {
    setLoading(true);
    const response = await searchRecipes(params);

    const recipes = response?.results.map(({ id, title, images }) => {
      return {
        id,
        title,
        imageUrl: images.length ? images[0]?.imageUrl : undefined,
      };
    });
    setFormattedRecipes(recipes || []);
    setLoading(false);
  };

  React.useEffect(() => {
    getRecipes();
  }, [params]);

  return loading ? (
    <CarouselSectionSkeleton />
  ) : (
    <CarouselSection
      title={title}
      emptyResultsMessage="Nenhuma receita encontrada"
      data={formattedRecipes}
      onPressItem={onPressItem}
      onPressSeeMore={onPressSeeMore}
    />
  );
};
