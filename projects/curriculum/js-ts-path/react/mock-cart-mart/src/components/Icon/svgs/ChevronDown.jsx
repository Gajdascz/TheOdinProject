import PropTypes from 'prop-types';

ChevronDown.propTypes = {
  title: PropTypes.string,
};

export default function ChevronDown({ title, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" {...rest}>
      {title && <title>{title}</title>}
      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  );
}
