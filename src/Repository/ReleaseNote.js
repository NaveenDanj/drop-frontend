import API from '../API';

export default {

    getAll: () => {

        return API.get('/api/releases' , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

    }


}