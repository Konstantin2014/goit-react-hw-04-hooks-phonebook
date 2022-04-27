import PropTypes from 'prop-types';
import { NotifMessage } from './Notisication.styled';

export const Notification = ({ message }) => {
  return <NotifMessage>{message}</NotifMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};