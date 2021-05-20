import React from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {children} = props;

  return(
    <div className={styles.card}>
    {children}
    </div>
  );
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Card;
