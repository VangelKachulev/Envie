import { defineStore } from 'pinia';


export const useAllProducts = defineStore('products', {
    state: () => {

        return {
            productsList: [],

        }
    },
    actions: {
        addProduct(productData) {
            this.productsList.push(productData);
        },
        getAllProducts() {
            return this.productsList
        },
        cleanAllProductsa() {
            return this.productsList = [];
        },
        editSingleProduct(id, productData) {

            this.productsList.map(x => x._id === id ? productData : x);
        },
        deleteSingleProduct(id, productData) {

            this.productsList.map(x => x._id === id ? productData : x);
        },
    }
})