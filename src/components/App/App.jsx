import React, { Component } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { StyledContainer, Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackIncrement = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum === 0 ? '0%' : Math.round((good / sum) * 100) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      handleFeedbackIncrement,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Wrapper>
        <StyledContainer>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={state}
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
  }
}
