import API from '../API';


export default {

    login : async (form) => {
            
        return API.post('/api/auth/login', form , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
    
    },

    getCurrentUser : async () => {
        return API.get('/api/user' , {
            headers: {
                authorization: "Bearer " + localStorage.getItem('token'),
            },
        });
    }


}