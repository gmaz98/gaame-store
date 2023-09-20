import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];

}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6f7cc194c85a44a49007556c4113cf7b"
    }
})