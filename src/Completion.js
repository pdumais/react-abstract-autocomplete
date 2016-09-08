import * as React from 'react';

/**
 *
 */
class Completion extends React.Component {
  static propTypes = {
    /**
     *
     */
    trigger: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.instanceOf(RegExp),
    ]).isRequired,
    /**
     *
     */
    minLength: React.PropTypes.number,
    /**
     *
     */
    regex: React.PropTypes.instanceOf(RegExp),
    /**
     *
     */
    renderSuggestion: React.PropTypes.func,
    /**
     *
     */
    getCompletions: React.PropTypes.func.isRequired,
    /**
     *
     */
    completions: React.PropTypes.array,
    /**
     *
     */
    getText: React.PropTypes.func,
  };

  static defaultProps = {
    minLength: 3,
    getCompletions: (value, { trigger, completions }) => {
      const compare = value.substr(trigger.length).toLowerCase();
      return completions.filter(completion => (
        completion.substr(0, compare.length).toLowerCase() === compare
      ));
    },
    getText: (value, { trigger }) => `${trigger}${value} `,
  };

  render() {
    return null;
  }
}

export default Completion;
