import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import DashboardNavItem from "../DashboardNavItem/DashboardNavItem";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const customerNavLinks = [
  { name: "Users", icon: solid("user-group") },
  { name: "Gurantors", icon: solid("users") },
  { name: "Loans", icon: solid("sack-dollar") },
  { name: "Descision Models", icon: solid("handshake") },
  { name: "Savings", icon: solid("piggy-bank") },
  { name: "Loan Requests", icon: solid("hand-holding-dollar") },
  { name: "Whitelist", icon: solid("user-check") },
  { name: "Karma", icon: solid("user-xmark") },
];

const businessNavLinks = [
  { name: "Organization", icon: solid("briefcase") },
  { name: "Loan Products", icon: solid("hand-holding-dollar") },
  { name: "Savings Products", icon: solid("building-columns") },
  { name: "Fees and Charges", icon: solid("coins") },
  { name: "Transactions", icon: solid("arrow-right-arrow-left") },
  { name: "Services", icon: solid("fan") },
  { name: "Service Account", icon: solid("user-gear") },
  { name: "Settlements", icon: solid("scroll") },
  { name: "Reports", icon: solid("chart-column") },
];

const settingsNavLinks = [
  { name: "Preferences", icon: solid("sliders") },
  { name: "Fees and Pricing", icon: solid("percent") },
  { name: "Audit Logs", icon: solid("list-check") },
];

function DashboardLeftNav() {
  return (
    <div className="dashboard-left-nav close">
      <div className="org">
        <FontAwesomeIcon icon={solid("briefcase")} />
        <p className="lg-hide">Switch Organization</p>
        <FontAwesomeIcon icon={solid("chevron-down")} className="chevdown" />
      </div>
      <DashboardNavItem name="Dashboard" icon={solid("house-chimney")} />
      <div className="nav-group">
        <p className="nav-group-name lg-hide">Customers</p>
        <div className="navItems">
          {customerNavLinks.map((navLink) => (
            <DashboardNavItem
              key={navLink.name}
              name={navLink.name}
              icon={navLink.icon}
            />
          ))}
        </div>
      </div>
      <div className="nav-group">
        <p className="nav-group-name lg-hide">Business</p>
        <div className="navItems">
          {businessNavLinks.map((navLink) => (
            <DashboardNavItem
              key={navLink.name}
              name={navLink.name}
              icon={navLink.icon}
            />
          ))}
        </div>
      </div>
      <div className="nav-group">
        <p className="nav-group-name lg-hide">Settings</p>
        <div className="navItems">
          {settingsNavLinks.map((navLink) => (
            <DashboardNavItem
              key={navLink.name}
              name={navLink.name}
              icon={navLink.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardLeftNav;
