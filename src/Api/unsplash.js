import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Aut39iKFFXNtA1eiX_eaLF6kqBHtoVaClxW78Wv2WOM",
    },
});
