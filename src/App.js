import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import appRouter from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
