import axios from 'axios';


export async function loginUser(user) {
    try {

        const res = await axios.post('http://localhost:3030/users/login', user);
        return res

    } catch (e) {
        console.log(e);
        this.$router.push("/404");
        return null;

    }
}
export async function registerUser(user) {
    try {

        const res = await axios.post('http://localhost:3030/users/register', user);
        return res

    } catch (e) {
        console.log(e);
        this.$router.push("/404");
        return null;

    }
}