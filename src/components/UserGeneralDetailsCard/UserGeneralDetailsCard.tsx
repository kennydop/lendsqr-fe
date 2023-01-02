import { User } from "../../types";
import "./style.scss";

interface Props {
  user: User;
}

function UserGeneralDetailsCard({ user }: Props) {
  return (
    <div className="user-details-card card">
      <div className="detail-cat">
        <div className="topic">Personal Info</div>
        <div className="dets">
          <div className="det-item">
            <div className="title capitalize">Full Name</div>
            <div className="value">{`${user.profile.firstName} ${user.profile.lastName}`}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Phone Number</div>
            <div className="value">{user.phoneNumber}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Email Address</div>
            <div className="value">{user.email}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">BVN</div>
            <div className="value">{user.profile.bvn}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Gender</div>
            <div className="value">{user.profile.gender}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Marital Status</div>
            <div className="value">Single</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Children</div>
            <div className="value">None</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Type of Rsidency</div>
            <div className="value">Parent&apos;s Apartment</div>
          </div>
        </div>
      </div>
      <div className="detail-cat">
        <div className="topic">Education and Employment</div>
        <div className="dets">
          <div className="det-item">
            <div className="title capitalize">Level of Education</div>
            <div className="value">{user.education.level}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Employment Status</div>
            <div className="value">{user.education.employmentStatus}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Sector of Employment</div>
            <div className="value">{user.education.sector}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Duration of Employment</div>
            <div className="value">{user.education.duration}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Office Email</div>
            <div className="value">{user.education.officeEmail}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Monthly Income</div>
            <div className="value">{`${user.profile?.currency ?? "NGN"}${
              user.education.monthlyIncome[0]
            } - ${user.profile?.currency ?? "NGN"}${
              user.education.monthlyIncome[0]
            }`}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Loan Repayment</div>
            <div className="value">
              {0.1 * parseFloat(user.education.monthlyIncome[1])}
            </div>
          </div>
        </div>
      </div>
      <div className="detail-cat">
        <div className="topic">Socials</div>
        <div className="dets">
          <div className="det-item">
            <div className="title capitalize">Twitter</div>
            <div className="value">{user.socials.twitter}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Facebook</div>
            <div className="value">{user.socials.facebook}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Instagram</div>
            <div className="value">{user.socials.instagram}</div>
          </div>
        </div>
      </div>
      <div className="detail-cat">
        <div className="topic">Guarantor</div>
        <div className="dets">
          <div className="det-item">
            <div className="title capitalize">Full Name</div>
            <div className="value">{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Phone Number</div>
            <div className="value">{user.guarantor.phoneNumber}</div>
          </div>
          <div className="det-item">
            <div className="title capitalize">
              {user.guarantor?.email == null && user.guarantor.address !== null
                ? "Address"
                : "Email Address"}
            </div>
            <div className="value">
              {user.guarantor?.email ??
                user.guarantor?.address ??
                "dummy@email.com"}
            </div>
          </div>
          <div className="det-item">
            <div className="title capitalize">Relationship</div>
            <div className="value">
              {user.guarantor.gender.toLowerCase() === "male"
                ? "Brother"
                : "Sister"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserGeneralDetailsCard;
