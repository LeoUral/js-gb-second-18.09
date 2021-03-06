Vue.component('search',{
    data(){
        return {
            filter: ''
        }
    },
    mounted(){
        // console.dir(this)
    },
    template: `
                <form action="#" class="search-form" @submit.prevent="$root.$refs.cata.filterCatalog(filter)">
                    <input type="text" class="search-field" v-model.lazy="filter">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`
})