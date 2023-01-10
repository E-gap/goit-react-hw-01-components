import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ id, avatar, isOnline, name }) {
  return (
    <li key={id} className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
