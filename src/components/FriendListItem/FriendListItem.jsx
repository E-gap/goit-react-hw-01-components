import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, isOnline, name }) {
  console.log(css);
  return (
    <>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
