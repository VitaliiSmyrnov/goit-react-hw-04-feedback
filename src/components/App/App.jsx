import { useState } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { StyledContainer, Wrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleFeedbackIncrement = option => {
    if (option === 'good') setGood(state => state + 1);
    if (option === 'neutral') setNeutral(state => state + 1);
    if (option === 'bad') setBad(state => state + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = good + neutral + bad;
    return sum === 0 ? '0%' : Math.round((good / sum) * 100) + '%';
  };

  return (
    <Wrapper>
      <StyledContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </StyledContainer>
    </Wrapper>
  );
};
