import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID JxwUyLw_8M3eSjnRy-p1MQF2GvEjeJTRALinumwQjzY",
  },
});
