import React, { Component } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import s from './Feedback.module.css';

export const App = () => {
  class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    onLeaveFeedback = event => {
      const option = event.target.textContent.toLowerCase();

      this.setState(prevState => {
        return {
          [option]: prevState[option] + 1,
        };
      });
    };

    countTotalFeedback({ good, neutral, bad }) {
      return good + neutral + bad;
    }

    countPositiveFeedbackPercentage({ good, total }) {
      return Math.round((good / total) * 100);
    }

    render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback({ good, neutral, bad });
      const positivePercentage = this.countPositiveFeedbackPercentage({
        good,
        total,
      });

      return (
        <div className={s.Statistics}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={Object.keys(this.state)}
            />
          </Section>

          <Section title="Statistics:">
            {Object.values(this.state).some(value => {
              return value;
            }) ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <p>No feedback given</p>
            )}
          </Section>
        </div>
      );
    }
  }

  return (
    <Container>
      <Feedback />
    </Container>
  );
};
