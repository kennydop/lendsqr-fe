import "./header.scss";
import lendsqrl from "../../assets/lendsqr-l.png";
import lendsqri from "../../assets/lendsqr-i.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { User } from "../../types";

interface Props {
  user: User;
}

export const Header = ({ user }: Props) => {
  return (
    <header>
      <div className="logo-container">
        <img src={lendsqri} alt="Lendsqr Logo" className="lendsqr_l" />
        <img src={lendsqrl} alt="Lendsqr Logo" className="lendsqr_i" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button>
          <FontAwesomeIcon icon={solid("magnifying-glass")} />
        </button>
      </div>
      <div className="nav-container">
        <a href="/" className="docs_a">
          Docs
        </a>
        <FontAwesomeIcon icon={regular("bell")} className="bell" />
        <div className="profile">
          <img src={user.profile.avatar} alt="Profile" />
          <p>{user.userName}</p>
          <FontAwesomeIcon icon={solid("caret-down")} className="caret-down" />
        </div>
      </div>
    </header>
  );
};
