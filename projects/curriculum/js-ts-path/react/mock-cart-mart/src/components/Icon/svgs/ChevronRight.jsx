import PropTypes from 'prop-types';

ChevronRight.propTypes = {
  title: PropTypes.string,
};

export default function ChevronRight({ title, ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      {title && <title>{title}</title>}
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  );
}
