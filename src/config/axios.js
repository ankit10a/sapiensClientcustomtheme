import axios from 'axios';
import { userAuth } from '../utils/userAuth';
const server = process.env.server || `http://sapiensserver-env.eba-8j3jdhih.us-east-1.elasticbeanstalk.com/`
// "https://sub.deeponlineseller.com/api/v1";

let token = userAuth();
export const serverV1Instance = axios.create({
    baseURL: `${server}/api/v1`,
    withCredentials: true,
    headers: { 'authorization': token || "" }
})