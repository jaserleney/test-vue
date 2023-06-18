import axios from "axios";

const picsumApi = axios.create({
  baseURL: "https://picsum.photos/v2",
});

export default picsumApi;
