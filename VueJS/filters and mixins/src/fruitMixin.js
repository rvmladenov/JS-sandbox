export const fruitMixin = {
    data() {
        return {
            fruits: ['Mango', 'lemon', 'banana', 'apple'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((val) => {
                return val.match(this.filterText);
            });
        }
    }
};