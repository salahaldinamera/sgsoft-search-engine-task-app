import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://sgsoft-search-engine-task-api.herokuapp.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default axios;