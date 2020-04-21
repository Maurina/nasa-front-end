import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        editableCard: {
            title: '',
            source: '',
            description: '',
            keywords: '',
            dateCreated: ''
        },
        
        edtiableCardREST: null,
    },
    getters:{
        currentEditableCard: (state) => {
            return state.edtiableCard
        },
        currentEditableCardREST: (state) => {
            return state.edtiableCardREST
        }
    },
    mutations: {
        editCard(state, editableCard){
            state.editableCard = editableCard
        },
        editCardREST(state, editableCardREST){
            state.editableCardREST = editableCardREST
        }
    },
    actions: {
        editCard(context, card) {
            context.commit('editCard', card)
        },
        editCardREST(context, card) {
            context.commit('editCardRest', card)
        },
        
    }
})