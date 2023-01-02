import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { User } from "../../types";
import UsersOverview from "../UsersOverview/UsersOverview";
import UsersStatCard from "../UsersStatCard/UsersStatCard";
import "./style.scss";

const reports = [
  {
    title: "Users",
    value: 100,
    icon: solid("users"),
    color: "#DF18FF",
  },
  {
    title: "Active Users",
    value: 100,
    icon: solid("users-line"),
    color: "#5718FF",
  },
  {
    title: "Users with Loans",
    value: 100,
    icon: solid("file-invoice-dollar"),
    color: "#F55F44",
  },
  {
    title: "Users with Savings",
    value: 100,
    icon: solid("coins"),
    color: "#FF3366",
  },
];

let users: User[] = [
  {
    createdAt: "2072-12-27T03:44:22.522Z",
    orgName: "labore-dolor-et-dolor-maxim",
    userName: "Sasso",
    email: "didadee@groundup.com",
    phoneNumber: "(553) 208-0727 731321",
    lastActiveDate: "2099-02-28T23:17:40.013Z",
    profile: {
      firstName: "Sasso",
      lastName: "Clinton",
      phoneNumber: "494-278-7946",
      avatar: "https://picsum.photos/200",
      gender: "Male",
      bvn: "815809412",
      address: "Gusikowski Locks",
      currency: "NGN",
    },
    guarantor: {
      firstName: "Celine",
      lastName: "Monahan",
      phoneNumber: "1-482-227-3654 x71086",
      gender: "Male",
      address: "O'Hara Centers",
    },
    accountBalance: "496.00",
    accountNumber: "GWQUSEH1",
    socials: {
      facebook: "@lendsqr",
      instagram: "@lendsqr",
      twitter: "@lendsqr",
    },
    education: {
      level: "Bsc",
      employmentStatus: "Employed",
      sector: "FinTech",
      duration: "2 Years",
      officeEmail: "Edna4@yahoo.com",
      monthlyIncome: ["128.57", "118.07"],
      loanRepayment: "122.47",
    },
    id: "mingw63",
  },
  {
    createdAt: "2072-12-27T03:44:22.522Z",
    orgName: "lendstack",
    userName: "Kenny",
    email: "kenchii@groundup.com",
    phoneNumber: "(553) 208-0727 731321",
    lastActiveDate: "2099-02-28T23:17:40.013Z",
    profile: {
      firstName: "Kenny",
      lastName: "Dop",
      phoneNumber: "494-278-7946",
      avatar: "https://picsum.photos/200",
      gender: "Male",
      bvn: "815809412",
      address: "Gusikowski Locks",
      currency: "NGN",
    },
    guarantor: {
      firstName: "Celine",
      lastName: "Monahan",
      phoneNumber: "1-482-227-3654 x71086",
      gender: "Male",
      address: "O'Hara Centers",
    },
    accountBalance: "496.00",
    accountNumber: "GWQUSEH1",
    socials: {
      facebook: "@lendsqr",
      instagram: "@lendsqr",
      twitter: "@lendsqr",
    },
    education: {
      level: "Bsc",
      employmentStatus: "Employed",
      sector: "FinTech",
      duration: "2 Years",
      officeEmail: "Edna4@yahoo.com",
      monthlyIncome: ["128.57", "118.07"],
      loanRepayment: "122.47",
    },
    id: "mingw65",
  },
];

function DashboardUserView() {
  const [show, setShow] = useState(25);
  return (
    <div className="user-view">
      <div className="view-name">User</div>
      <div className="reports-container">
        {reports.map((report) => (
          <UsersStatCard key={report.title} param={report} />
        ))}
      </div>
      <div style={{ marginTop: "1.6rem" }}></div>
      <UsersOverview users={users} show={show} />
      <div className="overview-controller">
        <div className="length">
          <div>Showing</div>
          <select
            className="length-selector"
            onChange={(e) => setShow(parseInt(e.target.value))}
          >
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
          <div>out of 100</div>
        </div>
        <nav className="pagination">
          <a href="/" className="pag-btn">
            <FontAwesomeIcon icon={solid("chevron-left")} />
          </a>
          <a href="/" className="pag-item">
            1
          </a>
          <a href="/" className="pag-item">
            2
          </a>
          <a href="/" className="pag-item">
            3
          </a>
          <a href="/" className="pag-item">
            ...
          </a>
          <a href="/" className="pag-item">
            15
          </a>
          <a href="/" className="pag-item">
            16
          </a>
          <a href="/" className="pag-btn">
            <FontAwesomeIcon icon={solid("chevron-right")} />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default DashboardUserView;
