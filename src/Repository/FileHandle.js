import API from '../API';

export default {

    checkFile : async (fileId) => {
        return API.get(`/api/checkfile/${fileId}`)
    },

    downloadFile : async (fileId) => {
        return API.get(`/api/getfile/${fileId}` , {
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/octet-stream',
            }
        })
    },

    checkPassword : async (form) => {

        return API.post('/api/check-password', form , {
            headers: {
                'Content-Type': 'application/json',
            }
        });

    },

    getUserFiles : (userID) => {

        return API.get(`/api/dashboard/userfiles/${userID}` , {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })


    }

}