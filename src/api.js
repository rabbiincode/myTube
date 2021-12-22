import axios from "axios";

const request = axios.create({
baseURL: 'https://youtube.googleapis.com/youtube/v3',
params: {
 key: "AIzaSyBncqKBJ6c_Y8vs5DlGOyJmkpMGOT6uQdk"
}

})

export default request