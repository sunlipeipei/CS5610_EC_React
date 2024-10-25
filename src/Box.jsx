import PropTypes from 'prop-types';

export default function Box({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}></div>
  );
}

Box.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Box.defaultProps = {
  className: 'box', 
};