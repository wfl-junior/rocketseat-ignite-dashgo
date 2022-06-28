import { NextPage } from "next";
import { Header } from "../components/Header";

interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
  return <Header />;
};

export default Dashboard;
