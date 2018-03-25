import React from 'react';
import { connect } from 'react-redux';
import { handleSubmitReport } from '../actions/index';
import EmojiButtonContainer from './EmojiButtonContainer';

const RatingForm = ({ handleSubmitReport }) => {
  return (
    <form onSubmit={(e) => handleSubmitReport(e)}>
      <div className="emoji-buttons">
        <EmojiButtonContainer reaction="expressionless" />
        <EmojiButtonContainer reaction="anguished" />
        <EmojiButtonContainer reaction="angry" />
        <EmojiButtonContainer reaction="fearful" />
        <EmojiButtonContainer reaction="screaming" />
      </div>
      <input type="submit" value="Submit Report!"/>
    </form>
  );
};

const mapDispatchToProps = {
    handleSubmitReport
};

export default connect(null, mapDispatchToProps)(RatingForm);
