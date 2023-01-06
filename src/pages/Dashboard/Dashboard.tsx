import React from "react";
import { useParams } from "react-router-dom";
import DashboardUserView from "./components/DashboardUserView/DashboardUserView";

type Pages = {
  [key: string]: JSX.Element;
};
const pages: Pages = {
  users: <DashboardUserView />,
  "*": <div />,
};

function Dashboard() {
  const { nav } = useParams();

  return pages[nav ?? "*"];
}

export default Dashboard;
