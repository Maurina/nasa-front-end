import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        editableCard: null,
    },
    getters:{
        currentEditableCard: (state) => {
            return state.editableCard
        },
    },
    mutations: {
        editCard(state, editableCard){
            state.editableCard = editableCard
        },
    },
    actions: {
        editCard(context, card) {
            context.commit('editCard', card)
        },
     
        
    }
})