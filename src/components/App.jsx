import { Component } from 'react';

import Statistics from './feedback/Statistics';
import Notification from './feedback/Notification';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './feedback/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return { [name]: (prevState[name] += 1) };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
