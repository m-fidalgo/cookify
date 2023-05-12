import { Body, Subtitle } from 'app/components/typography';
import { PreparationStep } from 'app/types';

import { SectionView, StepNumberContainer, StepView, StepsView } from './styles';
import { PreparationStepsSectionProps } from './types';

export const PreparationStepsSection: React.FC<PreparationStepsSectionProps> = ({
  preparationSteps,
}) => {
  return (
    <SectionView>
      <Subtitle>Modo de preparo</Subtitle>
      <StepsView>
        {preparationSteps.map((preparationStep: PreparationStep) => (
          <StepView key={preparationStep.id}>
            <StepNumberContainer>
              <Body color="aqua">{preparationStep.position + 1}.</Body>
            </StepNumberContainer>
            <Body>{preparationStep.text}</Body>
          </StepView>
        ))}
      </StepsView>
    </SectionView>
  );
};
