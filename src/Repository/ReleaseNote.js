import API from '../API';

export default {

    getAll: () => {

        return API.get('/api/release' , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

    },

    addDummyData: () => {

            let data = {
                release_date: "2022-05-28",
                version : "1.1.0",
                issue_link : "https://github.com/NaveenDanj/drop-backend/milestone/1",
                release_log : JSON.stringify({
                    "log" : ['Add new Dashboard to registered user.' , 'Add new Dashboard to registered users.' , 'Registered users can see their uploaded files.' , 'Add page to see release logs / release notes.' , 'Added 404 page.']
                })

            }
            
            return API.post('/api/release', data ,  {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
    
        }


}