import React, { useState, useRef, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { helpers } from '@compassion-gds/elements';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import { inputStyles } from './Input.styles';
import edit from '../assets/edit.svg';
import check from '../assets/check.svg';
import clear from '../assets/clear.svg';

/**
 * Primary UI component for user input
 */
export const Input = ({ type, size, label, disabled, validator, ...props }) => {
  // State used for text input fields
  const [value, setValue] = useState('');
  // State used for radio buttons and checkboxes
  const [checked, setChecked] = useState(false);
  const [symbol, setSymbol] = useState('$');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputId] = useState(helpers.gdsId());
  const [errorId] = useState(helpers.gdsId());
  const inline = type === 'radio' || type === 'checkbox';
  const [disable, setDisable] = useState(disabled);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    setChecked(e.target.checked);
    if (validator) setErrorMessage(validator(e.target.value));
    if (props.onChange) props.onChange();
  };

  const changeInputToDisabled = () => {
    if (type === 'edit') {
      setDisable(true);
    }
  };

  const changeInputToEnabled = () => {
    if (type === 'edit') {
      setDisable(false);
    }
  };

  const updateSymbol = (e) => {
    setSymbol(e.target.value);
  };

  useEffect(() => {
    if (disable === false && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disable]);

  const theme = useTheme().component.input;

  return (
    <div
      css={inputStyles(theme)}
      className={cx({
        [`input-group`]: true,
        [`input-group--inline`]: inline,
        [`input-group--error`]: errorMessage,
      })}
    >
      {type === 'creditcard' && (
        <React.Fragment>
          <label htmlFor={props.id || inputId}>{label}</label>

          <NumberFormat
            format="#### #### #### ##
        ##"
            mask="_"
          />
        </React.Fragment>
      )}
      {type === 'currency' && (
        <div>
          <select onChange={updateSymbol}>
            <option label="USD" value="$" selected>
              USD
            </option>
            <option label="EUR" value="€">
              EUR
            </option>
            <option label="JPY" value="¥">
              JPY
            </option>
          </select>
          <NumberFormat thousandSeparator prefix={symbol} placeholder="100" />
        </div>
      )}
      {type === 'currency' || type === 'creditcard' ? null : (
        <React.Fragment>
          <input
            id={props.id || inputId}
            type={type || 'text'}
            value={value}
            checked={checked}
            disabled={disable}
            name={props.name || label}
            {...props}
            className={cx({
              [`input--${size}`]: size !== 'medium' ? size : null,
            })}
            aria-describedby={errorMessage ? errorId : null}
            onChange={handleChange}
            onBlur={changeInputToDisabled}
            ref={inputRef}
          />
          <label htmlFor={props.id || inputId}>{label}</label>

          {type === 'edit' ? (
            <React.Fragment>
              {!disable && (
                <button type="button" aria-controls={props.id || inputId}>
                  <img src={check} alt="Reject Input Change" />
                </button>
              )}
              {disable && (
                <button
                  type="button"
                  aria-controls={props.id || inputId}
                  onClick={changeInputToEnabled}
                >
                  <img src={edit} alt="Edit Input Change" />
                </button>
              )}
              <button
                type="button"
                aria-controls={props.id || inputId}
                aria-hidden="true"
                className="clear"
              >
                <img src={clear} alt="Reject Input Change" />
              </button>
            </React.Fragment>
          ) : null}
          {errorMessage && !inline && (
            <small className="input-group__error-message" id={errorId}>
              {errorMessage}
            </small>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

Input.propTypes = {
  /**
   * Type of input
   */
  type: PropTypes.oneOf([
    'checkbox',
    'email',
    'password',
    'radio',
    'tel',
    'text',
    'date',
    'edit',
    'currency',
    'creditcard',
  ]),
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Descriptive label
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional validation function.
   */
  validator: PropTypes.func,
  /**
   * Optional; if not supplied, one will be generated to link the label and input.
   */
  // Disabling require-default-props because a default is generated within the component.
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.string,
  required: PropTypes.bool,
  /**
   * Is the Input disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Optional; if not supplied, the `name` attribute will be set to the same value as the label.
   */
  // Disabling require-default-props because a default name is assigned within the component if one isn't provided
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  disabled: false,
  validator: undefined,
  required: false,
  onChange: undefined,
};
