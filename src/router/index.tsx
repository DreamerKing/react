import { createBrowserRouter } from 'react-router-dom';
import TestUseDebugValue from '../components/TestUseDebugValue.tsx';
import TestUseImperativehandle from '../hooks/TestUseImperativeHandle.tsx';
import ReduxApp from '../redux-app/ReduxApp.tsx';
import Root, { loader as rootLoader, action as rootAction } from './root'
import ErrorPage from '../learn-router/error-page'
import Contact, { loader as contactLoader } from './contact'
import EditContact from './edit'
import Hooks from '../hooks/Hooks.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ReduxApp />
    ),
  },
  {
    path: '/react-router',
    element: (<Root />),
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        loader: contactLoader,
        element: <Contact />
      }, {
        path: 'contacts/:contactId/edit',
        loader: contactLoader,
        element: <EditContact />
      }]
  },
  {
    path: "/hooks",
    element: <Hooks/>,
    children: [
      {
        path: 'debug-value',
        element: <TestUseDebugValue />
      },
      {
        path: 'imperative-handle',
        element: <TestUseImperativehandle />,
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router