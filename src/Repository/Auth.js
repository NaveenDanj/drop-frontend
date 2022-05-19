import API from '../API';


export default {

    login : async (form) => {
            
        return API.post('/api/auth/login', form , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
    
    }


}