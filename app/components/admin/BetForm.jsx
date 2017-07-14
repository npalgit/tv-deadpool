import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getKey } from 'utils';
import { SimpleInput } from 'redux/form/components';
import { required, greaterThanZero, isValidDatetime } from 'redux/form/validators';
import { toInt } from 'redux/form/normalizers';
import { betDefaults, betFormName } from 'redux/form/details.jsx';
import * as str from 'app/constants/strings';


export const BetForm = (props) => {

  const { handleSubmit, onCancel, pristine, submitting, invalid, reset } = props;
  const cls_btn_submit = submitting ? str.CLS_ICON_SUBMITTING : str.CLS_ICON_SUBMIT;

  return (
    <form onSubmit={handleSubmit} className="">
      <Field component={SimpleInput} type="number" name="order"
        validate={[required]} normalize={toInt} label={str.LABEL_BET_ORDER}/>
      <Field component={SimpleInput} type="number" name="odds_payout"
        validate={[required, greaterThanZero]} normalize={toInt} label={str.LABEL_BET_ODDS_PAYOUT}/>
      <Field component={SimpleInput} type="number" name="odds_wager"
        validate={[required, greaterThanZero]} normalize={toInt} label={str.LABEL_BET_ODDS_WAGER}/>
      <Field component={SimpleInput} type="text" name="name"
        validate={[required]} label={str.LABEL_BET_NAME}/>
      <Field component={SimpleInput} type="text" name="desc" label={str.LABEL_BET_DESCRIPTION}/>
      <div className="buttons">
        <button type="submit" className="button success" disabled={pristine || submitting || invalid}>
          <i className={cls_btn_submit}/> {str.BTN_LABEL_CREATE}
        </button>
        <button
          type="button"
          className="button alert"
          disabled={ (!onCancel && pristine) || submitting}
          onClick={ onCancel || reset }>
          <i className={str.CLS_ICON_CANCEL}/> {str.BTN_LABEL_CANCEL}
        </button>
      </div>
    </form>
  );
};


function mapStateToProps(state, ownProps) {
  const { betId, order } = ownProps;

  const defaults = {
    ...betDefaults,
    order
  };
  const initialValues = getKey(state.bets, betId) || defaults;

  return { initialValues };
}

export default connect(mapStateToProps)(reduxForm({ form: betFormName })(BetForm));