<template>
  <div class="list-item">
    <i :class="icon"></i>
    <span class="budget-comment">{{ list.comment }}</span>
    <span class="budget-value">{{ list.value }}</span>
    <ElButton type="danger" size="mini" @click="deleteItem(list.id)">Delete</ElButton>
  </div>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {
        name: "BudgetListItem",
        props: {
            list: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            ...mapActions('mainStore', ['deleteListItem']),
            deleteItem(id) {
                if (confirm("Точно хотите удалить?")) this.deleteListItem(id);
            }
        },
        computed: {
            icon() {
                return this.list.type === "OUTCOME" ? "el-icon-remove" : "el-icon-circle-plus";
            }
        }
    }
</script>

<style scoped>

  .list-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }

  .budget-value {
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
  }
</style>
