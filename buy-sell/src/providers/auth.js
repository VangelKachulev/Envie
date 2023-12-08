import axios from 'axios';


export async function loginUser(user) {

    
    try {

        const res = await axios.post('http://localhost:3030/users/login', user);
       
        
         return res

    } catch (e) {
        return null;
        console.log(e);

    }
}