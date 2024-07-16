import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
// import useOnlineStatus from '@hooks/useOnlineStatus';
import useOnline from '@hooks/useOnline';

const Nav = styled.nav`
  margin: 10px;
  display: block;
`

export default function Hooks () {
  // const status = useOnlineStatus()
  const status = useOnline();
  return (
    <>
      <Nav>
        <Link to="/hooks/debug-value">useDebugValue</Link>
        <Link to="/hooks/imperative-handle">useImpertiveHandle</Link>
      </Nav>
      <p>{ status ? 'online': 'offline'}</p>
      <Outlet />
    </>
  )
}