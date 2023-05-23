import React from 'react';
import PropTypes from 'prop-types';

ProductDetailComponent.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  content: PropTypes.string.isRequired,
};

ProductDetailComponent.defaultProps = {
  price: 0,
};

function ProductDetailComponent(props) {
  return (
    <div>
      <h1>Product Title: {props.title}</h1>
      <h3>Price: {props.price}</h3>
      <p>Content: {props.content}</p>
    </div>
  );
}

export default ProductDetailComponent;
