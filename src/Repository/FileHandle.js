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

    getUserFiles : (userID , page) => {

        return API.get(`/api/dashboard/userfiles/${userID}?page=${page}` , {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })


    },

    getFileCount : () => {
        let token = localStorage.getItem('token');
        return API.get(`/api/dashboard/userfilecount` , {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            }
        });
    
    }

}