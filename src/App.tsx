import {
    BrowserRouter,
    Route,
    Routes,
    unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export const routeLink: any = createBrowserHistory();

function App() {
    return (
        <>
            <Provider store={store}>
                <HistoryRouter history={routeLink}>
                    <Routes>
                        <Route path="" element={<HomeTemplate />}>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home />} />
                            <Route path="login" element={<Login />} />
                            <Route path="detail">
                                <Route path=":id" element={<Detail />} />
                            </Route>
                        </Route>
                    </Routes>
                </HistoryRouter>
            </Provider>
        </>
    );
}

export default App;
