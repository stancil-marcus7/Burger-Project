import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://my-burger-c9cbf.firebaseio.com/'
})

export default instance;