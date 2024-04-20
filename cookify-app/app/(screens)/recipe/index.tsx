import { useRouter } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  CategoriesSection,
  IconButton,
  IngredientsSection,
  PreparationStepsSection,
  RecipeInfo,
  Small,
  StarRating,
  Title,
} from 'app/components';
import { removeRecipe, saveRecipe } from 'app/services';
import { currentRecipeState } from 'app/state/recipe';
import { currentUserState } from 'app/state/user';
import { DIFFICULTIES } from 'app/types';

import { RecipeScreenSkeleton } from './skeleton';
import {
  ContentView,
  GoBackButtonContainer,
  Header,
  InfoView,
  LikeButtonContainer,
  RatingsView,
  RecipeImage,
  TitleView,
} from './styles';

const RecipeScreen: React.FC = () => {
  const router = useRouter();
  const [currentRecipe, setCurrentRecipe] = useRecoilState(currentRecipeState);
  const currentUser = useRecoilValue(currentUserState);

  React.useEffect(() => {
    return () => {
      setCurrentRecipe(undefined);
    };
  }, []);

  if (!currentRecipe) return <RecipeScreenSkeleton />;

  const handleAdd = async () => {
    if (!currentUser) return;
    await saveRecipe(currentRecipe.id);
    setCurrentRecipe({ ...currentRecipe, isLiked: true });
  };

  const handleRemove = async () => {
    if (!currentUser) return;
    await removeRecipe(currentRecipe.id);
    setCurrentRecipe({ ...currentRecipe, isLiked: false });
  };

  const handleEdit = () => {
    router.push({ pathname: '/recipes', params: { id: currentRecipe.id } });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RecipeImage
          source={
            currentRecipe.images.length
              ? { uri: currentRecipe.images[0].imageUrl }
              : require('assets/images/no-image.png')
          }
        />
        <GoBackButtonContainer>
          <IconButton
            color={currentRecipe.images.length ? 'white' : 'aqua'}
            name="chevron-left"
            size="large"
            onPress={() => router.push({ pathname: '/home' })}
          />
        </GoBackButtonContainer>
        <ContentView>
          <Header>
            <TitleView>
              <Title style={{ maxWidth: currentUser ? '90%' : '100%' }}>
                {currentRecipe.title}
              </Title>
              {currentUser && (
                <>
                  {currentUser.id === currentRecipe.creator.id ? (
                    <LikeButtonContainer>
                      <IconButton color="yellow" name="edit" onPress={handleEdit} />
                    </LikeButtonContainer>
                  ) : (
                    <LikeButtonContainer>
                      <IconButton
                        color="yellow"
                        name={currentRecipe.isLiked ? 'favorite' : 'favorite-outline'}
                        onPress={currentRecipe.isLiked ? handleRemove : handleAdd}
                      />
                    </LikeButtonContainer>
                  )}
                </>
              )}
            </TitleView>
            <View>
              <Small italic color="aqua">
                Por: {currentRecipe.creator.name}
              </Small>
            </View>
          </Header>
          <RatingsView>
            <StarRating rating={currentRecipe.averageRating || 0} />
          </RatingsView>
          <InfoView>
            <RecipeInfo text={`${currentRecipe.time} min`} iconName="timer" />
            <RecipeInfo text={`Rende ${currentRecipe.servings}`} iconName="restaurant" />
            <RecipeInfo text={DIFFICULTIES[currentRecipe.difficulty]} iconName="bar-chart" />
          </InfoView>
          <IngredientsSection ingredients={currentRecipe.ingredients} />
          <PreparationStepsSection preparationSteps={currentRecipe.preparationSteps} />
          {currentRecipe.categories && <CategoriesSection categories={currentRecipe.categories} />}
        </ContentView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;
