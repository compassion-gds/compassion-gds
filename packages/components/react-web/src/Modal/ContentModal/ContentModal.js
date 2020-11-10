import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

import styles from './ContentModal.module.css';
import globalStyles from '../Modal.module.css';

const ContentModal = ({ close, closeLabel, content, isDisplayed, title }) => {
  return (
    <Modal close={close} isDisplayed={isDisplayed}>
      <div className={globalStyles['modal-content']}>
        <div className={styles['content-modal']}>
          <div
            className={styles['title-bar']}
            {...(title ? { 'data-title': title } : {})}
          >
            <h1>{title}</h1>
            <div className={styles.content}>{content}</div>
            <button onClick={close} aria-label="Close" type="button">
              {closeLabel}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ContentModal.propTypes = {
  close: PropTypes.func.isRequired,
  content: PropTypes.any.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default ContentModal;
