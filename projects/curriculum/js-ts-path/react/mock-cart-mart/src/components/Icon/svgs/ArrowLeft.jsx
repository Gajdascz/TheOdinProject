import PropTypes from 'prop-types';

ArrowLeft.propTypes = {
  title: PropTypes.string,
};

export default function ArrowLeft({ title, ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      {title && <title>{title}</title>}
      <path d="M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z" />
    </svg>
  );
}
