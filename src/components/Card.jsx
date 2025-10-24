import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 */
const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  shadow = 'shadow',
  rounded = 'rounded-lg',
  bg = 'bg-white dark:bg-gray-800',
  ...rest 
}) => {
  const cardClasses = `${bg} ${shadow} ${rounded} ${padding} ${className}`;
  
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
  shadow: PropTypes.string,
  rounded: PropTypes.string,
  bg: PropTypes.string,
};

export default Card;