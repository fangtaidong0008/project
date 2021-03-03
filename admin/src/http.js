import axios from 'axios'
// init a instance which contain a base url -> API address
const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

export default http // export http variable from the file and imported in the Main.js
