import Nav from "./Nav";
import { Outlet, useParams } from "react-router-dom";

const Root = function() {
  const { page } = useParams;
  console.log(page);

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Root;