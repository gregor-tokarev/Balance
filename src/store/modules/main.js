import Vue from 'vue';

const mainStore = {
    namespaced: true,
    state: {
        list: {
            1: {
                type: "INCOME",
                value: 100,
                comment: "Some comment",
                id: 1
            },
            2: {
                type: "OUTCOME",
                value: -50,
                comment: "Some outcome comment",
                id: 2
            }
        }
    },
    mutations: {
        ADD_FIELD(state, body) {
            Vue.set(state.list, body.id, body)
        },
        DELETE_FIELD({list}, body) {
            Vue.delete(list, body);
        }
    },
    actions: {
        addListItem({commit}, body) {
            commit('ADD_FIELD', {id: String(Math.random()), ...body});
        },
        deleteListItem(stage, body) {
            console.log(stage);
            stage.commit('DELETE_FIELD', body);
        }
    },
    getters: {
        list({list}) {
            return Object.values(list);
        },
        total({list}) {
            return Object.values(list).reduce(
                (acc, item) => {
                    if (item.type === 'OUTCOME' && item.value > 0) return acc -= item.value;
                    return acc += item.value;
                },
                0
            );
        }
    }
};

export default mainStore;
