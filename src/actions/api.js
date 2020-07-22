import axios from "axios";

const baseUrl = "http://localhost:55891/api/"

export default{
    dCandidate(url = baseUrl + 'DCandidate/') {
        return {
            fetchAll : () => axios.get(url),
            fetchById: id =>axios.get(url + id),
            create : newRecord => axios.post(url, newRecord),
            update : (id,updateReocrd) => axios.put(url + id, updateReocrd),
            delete : id => axios.delete(url + id)
        }
    }
}
