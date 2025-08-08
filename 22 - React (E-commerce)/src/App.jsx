import { RouterProvider } from "react-router-dom";
import { router as MainRouter } from "./Router/router.jsx";

const App = () => {
    return <RouterProvider router={MainRouter} />;
};

export default App;
