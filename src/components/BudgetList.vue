<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <input type="radio" name="mode" id="mode-1" v-model="mode" value="OUTCOME"/><label for="mode-1">Min</label>
      <input type="radio" name="mode" id="mode-2" v-model="mode" value="INCOME"/><label for="mode-2">Plus</label>
      <input checked type="radio" name="mode" id="mode-3" v-model="mode" value="ALL"/><label for="mode-3">All</label>
      <template v-if="!isEmpty">
        <template v-for="(item, prop) in filterList">
          <BudgetListItem :list="item" :key="prop"/>
        </template>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
    </ElCard>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import BudgetListItem from "./BudgetListItem";

    export default {
        name: "BudgetList",
        components: {BudgetListItem},
        comments: {
            BudgetListItem
        },
        data: () => ({
            header: "Budget List",
            emptyTitle: "Empty List",
            mode: 'ALL'
        }),
        computed: {
            ...mapGetters('mainStore', ['list']),
            isEmpty() {
                return !Object.keys(this.list).length;
            },
            filterList() {
                let filterList = {...this.list};

                filterList = Object.values(filterList).filter(element => {
                    if (this.mode !== "ALL") return element.type === this.mode;
                    else return true;
                });

                return filterList
            }
        },
    };
</script>

<style scoped>
  .budget-list-wrap {
    max-width: 500px;
    margin: auto;
  }

</style>
