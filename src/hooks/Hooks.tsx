import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  margin: 10px;
  display: block;
`

export default function () {
  return (
    <>
      <Nav>
        <Link to="/hooks/debug-value">useDebugValue</Link>
        <Link to="/hooks/imperative-handle">useImpertiveHandle</Link>
      </Nav>
      <Outlet />
    </>
  )
}