import axios from "axios";

const instance = axios.create({baseURL: 'https://doctor-16b04-default-rtdb.firebaseio.com/'})

export default instance