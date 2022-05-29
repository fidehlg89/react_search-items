import store from "./redux/store";
import { Provider } from "react-redux";
import ItemsPage from "./pages/ItemsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarPage from "./pages/CarPage";
import DefaultLayout from "./pages/layout/DefaultLayout";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<ItemsPage />} />
            <Route path="/car" element={<CarPage />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
