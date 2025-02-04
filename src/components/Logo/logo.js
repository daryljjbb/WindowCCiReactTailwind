import "../Logo/logo.css";
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="font-bold text-red-500 italic text-2xl  flex items-center">
      <NavLink to="/">
        <ion-button aria-label="Favorite">
          <ion-icon name="cloudy" aria-hidden="false" size="large"></ion-icon>
        </ion-button>
      </NavLink>
      &nbsp;&nbsp; CCiOnline
    </div>
  );
};

export default Logo;
