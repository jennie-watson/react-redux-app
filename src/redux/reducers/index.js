import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiÇallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    courses,
    authors,
    apiÇallsInProgress
});

export default rootReducer;