import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';

import {
  Chip,
  IconButton,
  IngredientsSection,
  PreparationStepsSection,
  RecipeInfo,
  Title,
} from 'app/components';
import { currentRecipeState } from 'app/state/recipe';
import { currentUserState } from 'app/state/user';
import { Category, Difficulty } from 'app/types';

import { RecipeScreenSkeleton } from './skeleton';
import {
  ChipsSection,
  ContentView,
  GoBackButtonContainer,
  Header,
  InfoView,
  LikeButtonContainer,
  RecipeImage,
  TitleView,
} from './styles';

const RecipeScreen: React.FC = () => {
  const router = useRouter();
  const currentRecipe = useRecoilValue(currentRecipeState);
  const currentUser = useRecoilValue(currentUserState);

  if (!currentRecipe) return <RecipeScreenSkeleton />;

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
          <IconButton color="white" name="chevron-left" size="large" onPress={router.back} />
        </GoBackButtonContainer>
        <ContentView>
          <Header>
            <TitleView>
              <Title style={{ maxWidth: currentUser ? '90%' : '100%' }}>
                {currentRecipe.title}
              </Title>
              {currentUser && (
                <LikeButtonContainer>
                  <IconButton
                    color="yellow"
                    name={currentRecipe.isLiked ? 'favorite' : 'favorite-outline'}
                    onPress={() => {}}
                  />
                </LikeButtonContainer>
              )}
            </TitleView>
            <InfoView>
              <RecipeInfo text={`${currentRecipe.time} min`} iconName="timer" />
              <RecipeInfo text={`Rende ${currentRecipe.servings}`} iconName="restaurant" />
              <RecipeInfo text={Difficulty[currentRecipe.difficulty]} iconName="bar-chart" />
            </InfoView>
            <ChipsSection>
              {currentRecipe.categories.map((category: Category) => (
                <Chip key={category.id} text={category.name} />
              ))}
            </ChipsSection>
          </Header>
          <IngredientsSection ingredients={currentRecipe.ingredients} />
          <PreparationStepsSection preparationSteps={currentRecipe.preparationSteps} />
        </ContentView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;
