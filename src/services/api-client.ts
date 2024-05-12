import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'05cbd8f7215d4ea6af02e8d9d3f34bcc'
    }
})