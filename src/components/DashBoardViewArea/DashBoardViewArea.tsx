import { User } from "../../types";
import DashboardUserView from "../DashboardUserView/DashboardUserView";
import UserDetailsView from "../UserDetailsView/UserDetailsView";
import "./style.scss";

let user: User = {
  createdAt: "2072-12-27T03:44:22.522Z",
  orgName: "labore-dolor-et",
  userName: "Sally",
  email: "fandgimmick@solicit.ffw",
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
  id: "mingw70",
};

function DashBoardViewArea() {
  return (
    <div className="dashboard-view-area">
      <DashboardUserView />
      {/* <UserDetailsView user={user} /> */}
    </div>
  );
}

export default DashBoardViewArea;
