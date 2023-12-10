import axios from 'axios';


export async function getAll() {

    
    try {
        // Import Axios


        // Making a GET request
        const res = await axios.get('http://localhost:3030/data/products');

   

        // const res = await axios.post('http://localhost:3030/data/bikes', data, {
        //     headers: {
        //         'X-Authorization': token,
        //         'Content-Type': 'application/json' // Set the content type here
        //     }
        // });

        return res

    } catch (e) {
        console.log(e);
        return null;

    }
}