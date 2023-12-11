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
    }
})