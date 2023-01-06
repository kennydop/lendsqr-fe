import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleFilterModal } from "../../../../helpers/modal";

function FilterMenu() {
  return (
    <div className="filter">
      <FontAwesomeIcon
        icon={solid("filter")}
        onClick={() => {
          toggleFilterModal();
        }}
      />
      <div className="filter-menu card inactive">
        <div className="filter-menu-item">
          <div className="filter-menu-item-title">Organization</div>
          <select>
            <option value="select">Select</option>
            <option value="lendsqr">Lendsqr</option>
            <option value="lendstack">Lendstack</option>
          </select>
        </div>
        <div className="filter-menu-item">
          <div className="filter-menu-item-title">Username</div>
          <input type="text" />
        </div>
        <div className="filter-menu-item">
          <div className="filter-menu-item-title">Email</div>
          <input type="text" />
        </div>
        <div className="filter-menu-item">
          <div className="filter-menu-item-title">Date</div>
          <input type="date" />
        </div>
        <div className="filter-menu-item">
          <div className="filter-menu-item-title">Phone Number</div>
          <input type="text" />
        </div>
        <div className="filter-menu-item">
          <div className="filter-menu-item-title">Status</div>
          <select>
            <option value="select">Select</option>
            <option value="lendsqr">Lendsqr</option>
            <option value="lendstack">Lendstack</option>
          </select>
        </div>
        <div className="btns">
          <button
            className="filter-menu-btn"
            onClick={() => toggleFilterModal()}
          >
            Reset
          </button>
          <button
            className="filter-menu-btn"
            onClick={() => toggleFilterModal()}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
