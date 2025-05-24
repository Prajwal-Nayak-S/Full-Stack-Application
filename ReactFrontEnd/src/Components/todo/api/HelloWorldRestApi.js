import axios from "axios";
const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)
export const retriveHelloWorldBean=()=>
    apiClient.get('http://localhost:8080/hello-world-bean');

export const retriveHelloWorldVariable=(username)=>
    apiClient.get(`/hello-world/path-variable/${username}`)
;
