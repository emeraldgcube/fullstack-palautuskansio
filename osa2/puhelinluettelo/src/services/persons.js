import axios from "axios"
const baseUrl= "/api/persons"

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
  
  const delPerson = uid => {

      return axios.delete((baseUrl + "/" + String(uid)))
  }

  const replace = object => {
      return axios.put(baseUrl, object)
  }

export default { 
    getAll: getAll, 
    create: create,
    delPerson: delPerson,
    replace: replace
  }