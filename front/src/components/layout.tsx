import {Outlet, Link} from "react-router-dom";

export function Layout() {
  return (
    <div className="flex flex-col mx-auto max-w-3xl px-4">
      <header className="flex justify-between py-8">
        <Link to={"/"} data-test="header-logo" className="text-4xl text-black">
          TODO APP
        </Link>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
