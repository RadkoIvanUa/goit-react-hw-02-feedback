import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      <li>
        <button onClick={onLeaveFeedback} name={options[0]}>
          Good
        </button>
      </li>
      <li>
        <button onClick={onLeaveFeedback} name={options[1]}>
          Neutral
        </button>
      </li>
      <li>
        <button onClick={onLeaveFeedback} name={options[2]}>
          Bad
        </button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
