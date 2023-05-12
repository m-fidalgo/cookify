import { Divider, RecipesPreviewSection } from 'app/components';
import { SearchRecipesParams } from 'app/services';

const HomeScreen: React.FC = () => {
  const defaultParams: SearchRecipesParams = {
    page: 1,
    pageSize: 5,
  };

  const sections = [
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

  const handlePressItem = (id: number) => {
    console.log(id);
  };

  const handlePressSeeMore = () => {
    console.log('a');
  };

  return (
    <>
      <Divider size="extraLarge" />
      {sections.map(({ title, params }) => {
        return (
          <RecipesPreviewSection
            title={title}
            params={params}
            onPressItem={handlePressItem}
            onPressSeeMore={handlePressSeeMore}
          />
        );
      })}
    </>
  );
};

export default HomeScreen;
