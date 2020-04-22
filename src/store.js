import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        editableCard: null,
        restCard: null,
    },
    getters:{
        currentEditableCard: (state) => {
            return state.editableCard
        },
        currentRest: (state) => {
            return state.restCard
        }
    },
    mutations: {
        editCard(state, editableCard){
            state.editableCard = editableCard
        },
        editRest(state, restCard){
            state.restCard = restCard
        }
    },
    actions: {
        editCard(context, card) {
            context.commit('editCard', card)
        },
        editRest(context, card){
            context.commit('editRest', card)
        } 
        
    }
})