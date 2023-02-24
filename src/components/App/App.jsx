import { useState } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { StyledContainer, Wrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleFeedbackIncrement = type => {
    if (type === 'good') setGood(state => state + 1);
    if (type === 'neutral') setNeutral(state => state + 1);
    if (type === 'bad') setBad(state => state + 1);
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

// export class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedbackIncrement = value => {
//     this.setState(prevState => ({ [value]: prevState[value] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const sum = good + neutral + bad;
//     return sum === 0 ? '0%' : Math.round((good / sum) * 100) + '%';
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const {
//       state,
//       handleFeedbackIncrement,
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//     } = this;
//     return (
//       <Wrapper>
//         <StyledContainer>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={state}
//               onLeaveFeedback={handleFeedbackIncrement}
//             />
//           </Section>
//           <Section title="Statistics">
//             {countTotalFeedback() ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={countTotalFeedback()}
//                 positivePercentage={countPositiveFeedbackPercentage()}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </Section>
//         </StyledContainer>
//       </Wrapper>
//     );
//   }
// }
