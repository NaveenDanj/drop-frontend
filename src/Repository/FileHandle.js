import API from '../API';

export default {

    checkFile : async (fileId) => {
        return API.get(`/api/checkfile/${fileId}`)
    }

}