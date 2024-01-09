import axios from 'axios';

export async function getAll() {

    try {
        const res = await axios.get('http://localhost:3030/data/products');

        return res
    } catch (e) {
        console.log(e);
        return null;
    }
}
export async function uploadProduct(token, product) {

    try {
        const res = await axios.post('http://localhost:3030/data/products', product, {
            headers: {
                'X-Authorization': token,
                'Content-Type': 'application/json'
            }
        });

        return res

    } catch (e) {
        console.log(e);
        return null;
    }
}
export async function getSingleProduct(id) {
    try {
        const res = axios.get(`http://localhost:3030/data/products/${id}`)
        return res

    } catch (e) {
        this.$router.push("/404");
        return null;

    }
}
export async function editProduct(token, product, id) {

    try {
        const res = await axios.put(`http://localhost:3030/data/products/${id}`, product, {
            headers: {
                'X-Authorization': token,
                'Content-Type': 'application/json'
            }
        });

        return res

    } catch (e) {
        console.log(e);
        this.$router.push("/404");
        return null;
    }
}
export async function deleteProduct(token, id) {

    try {
        const res = await axios.delete(`http://localhost:3030/data/products/${id}`, {
            headers: {
                'X-Authorization': token,
                'Content-Type': 'application/json'
            }
        });

        return res

    } catch (e) {
        console.log(e);
        this.$router.push("/404");
        return null;
    }
}