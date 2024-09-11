import PropTypes from 'prop-types';

StarSolid.propTypes = {
  title: PropTypes.string,
};

export default function StarSolid({ title, ...rest }) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      {title && <title>{title}</title>}
      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
    </svg>
  );
}
