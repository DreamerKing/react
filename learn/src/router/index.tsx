import { createBrowserRouter } from 'react-router-dom';
// import TestUseDebugValue from '@/components/TestUseDebugValue.tsx';
// import TestUseImperativehandle from '@/views/TestUseImperativeHandle.tsx';
// import ReduxApp from '../redux-app/ReduxApp.tsx';
// import Root, { loader as rootLoader, action as rootAction } from './root'
// import ErrorPage from '../learn-router/error-page'
// import Contact, { loader as contactLoader } from './contact'
// import Timer from '../views/hooks/Timer.tsx';
// import Wrapper from '../views/builtin/Wrapper.tsx';
// import TestFragment from '../views/builtin/Blog.tsx';
// import { Mouse } from '@/components/Mouse.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome to the React Learning App</div>,
    errorElement: <div>Error loading the app</div>,
  }
  /* {
    path: "/redux",
    element: <ReduxApp />,
  }, */
  /* {
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
  }, */
/*   {
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
      },
      {
        path: 'timer',
        element: <Timer/>
      }
    ]
  },
  {
    path: "/component",
    element: <Wrapper/>,
    children: [
      {
        path: "fragment",
        element: <TestFragment/>
      }
    ]
  },
  {
    path: "about",
    element: <Mouse>{(pos) => <div> Mouse at {pos.x},{ pos.y}</div> }</Mouse>,
  }, */
]);

export default router