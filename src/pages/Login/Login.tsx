import lendsqrl from "../../assets/lendsqr-l.png";
import lendsqri from "../../assets/lendsqr-i.png";
import pablo_signin from "../../assets/pablo-sign-in.png";
import { User } from "../../types";
import "./login.scss";
import { useState } from "react";
import Loader from "../Dashboard/components/Loader/Loader";

function Login() {
  const [loading, setLoading] = useState(false);

  async function loginUser(e: any) {
    setLoading(true);
    e.preventDefault();
    let user: User = {
      createdAt: "2072-12-27T03:44:22.522Z",
      orgName: "lenrrr",
      userName: "Kenny",
      password: e.target[1]?.value,
      email: e.target[0]?.value,
      phoneNumber: "(553) 208-0727 731321",
      lastActiveDate: "2099-02-28T23:17:40.013Z",
      profile: {
        firstName: "Sasso",
        lastName: "Clinton",
        phoneNumber: "494-278-7946",
        avatar: "https://picsum.photos/700",
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
      id: "mingw64",
    };
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      (window as Window).location = "/dashboard/users";
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="Login">
      <div className="left">
        <div className="logo-container">
          <img src={lendsqri} alt="Lendsqr Logo" className="lendsqr_l" />
          <img src={lendsqrl} alt="Lendsqr Logo" className="lendsqr_i" />
        </div>
        <div className="pablo-container">
          <img src={pablo_signin} alt="Sign In Side" className="pablo-signin" />
        </div>
      </div>
      <div className="right">
        <div className="form-container">
          <div className="form-header">
            <h2>Welcome!</h2>
            <p>Enter details to login</p>
            <form onSubmit={loginUser}>
              <input
                type="email"
                placeholder="Email"
                className="email"
                required={true}
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Password"
                className="password"
                required={true}
                title="password"
                minLength={6}
                autoComplete="current-password"
              />
              <a href="/">FORGOT PASSWORD?</a>
              <button type="submit" className="submit">
                {loading ? <Loader type="sm" /> : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
