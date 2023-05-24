import axios from "axios";


const Backend = axios.create({
  baseURL: 'http://pacific-reaches-87599.herokuapp.com/api',
  headers: {'Content-Type': 'application/json', "Accept": "application/json"}
});

export default Backend