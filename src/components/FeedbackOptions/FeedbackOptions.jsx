import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <ul className={css.button_list}>
          {this.props.options.map(option => (
            <li key={option}>
              <button
                className={css.button}
                type="submit"
                onClick={() => this.props.onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
