import axios from 'axios';


export async function uploadProduct(token, product) {

    // const data = { body: product }
    try {

        const res = await axios.post('http://localhost:3030/data/products', product, {
            headers: {
                'X-Authorization': token,
                'Content-Type': 'application/json' // Set the content type here
            }
        });

        return res

    } catch (e) {
        console.log(e);
        return null;

    }
}