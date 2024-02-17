import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7f88550541e24fe294c958816ab0eba6',
    }
});

