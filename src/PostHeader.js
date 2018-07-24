import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postHeader">
    <img src={props.src} />
    <span>
      {props.nome}
      <br />
      <span>
        {props.minutos}
      </span>
    </span>
  </div>
);

PostHeader.defaultProps = {
  nome: 'Jose',
  minutos: 'há 3 minutos',
  src: 'https://cdn-images-1.medium.com/max/1600/1*qUlxDdY3T-rDtJ4LhLGkEg.png',
};

PostHeader.propTypes = {
  nome: PropTypes.string,
  minutos: PropTypes.string,
  src: PropTypes.string,
};

export default PostHeader;
