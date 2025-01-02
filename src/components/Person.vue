<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名：<span>{{fullName}}</span>
  </div>
</template>



<script setup lang="ts">
import { ref,computed } from 'vue'

let firstName = ref('zhang')
let lastName = ref('san')

let fullName = computed(() => {
  return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
})

</script>



<style scoped lang="scss">
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
