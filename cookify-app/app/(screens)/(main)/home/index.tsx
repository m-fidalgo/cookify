import { Divider, RecipesPreviewSection } from 'app/components';

const HomeScreen: React.FC = () => {
  const defaultParams = {
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
      params: defaultParams,
    },
    {
      title: 'Novos em Massas',
      params: defaultParams,
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
