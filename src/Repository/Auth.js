import API from '../API';


export default {

    login : (form) => {
            
        return API.post('/api/auth/login', form , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
    
    },

    logout : () => {

        return API.get('/api/auth/logout', {

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }

        });

    },

    getCurrentUser : () => {
        return API.get('/api/user' , {
            headers: {
                authorization: "Bearer " + localStorage.getItem('token'),
            },
        });
    }


}