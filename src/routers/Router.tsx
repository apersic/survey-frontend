import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SurveyPage from "../pages/survey/SurveyPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<SurveyPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;