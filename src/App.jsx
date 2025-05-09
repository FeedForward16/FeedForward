import LoginContainer from "./container/LoginContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpContainer from "./container/SignUpContainer";
import AppLayOut from "./layouts/AppLayOut";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayOut />,
      children: [
        {
          path: "/",
          element: <LoginContainer />,
        },
        {
          path: "/sign-up",
          element: <SignUpContainer />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
