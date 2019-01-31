import React from 'react';
import PropTypes from 'prop-types';

const DefaultLayout = props => (
  <div>
    {React.cloneElement(React.Children.only(props.children))}
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
