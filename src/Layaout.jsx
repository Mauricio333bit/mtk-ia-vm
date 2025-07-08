import { Outlet } from "react-router"
import Header from "./common/components/Header";

export default function Layout() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
}