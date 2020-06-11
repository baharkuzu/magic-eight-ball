import  {GET_DATA} from "./types";
import axios from "axios";

export const getData = () => {
    return (dispatch) => {
        axios.get(`https://yesno.wtf/api`).then((result) => {
            dispatch({
                type: GET_DATA,
                payload: result.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
};