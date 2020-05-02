<template>
  <div :class="classes" class="total-value">Balance: {{ total }}</div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "TotalBalance",
        computed: {
            ...mapGetters('mainStore', ['total']),
            classes() {
                return  this.total > 0 ? 'plus' : 'minus';
            }
        }
    };
</script>

<style scoped>
  .total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }

  .minus {
    color: red;
  }

  .plus {
    color: green;
  }
</style>
