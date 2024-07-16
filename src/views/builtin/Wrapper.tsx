import { Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <div>
      <div>Component</div>
      <Outlet/>
    </div>
  )
}