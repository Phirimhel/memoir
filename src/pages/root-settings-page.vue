<!-- App.vue -->
<template>
  <div>
    <h2>🔄 Ререндер компонентов</h2>
    <button @click="increment">Увеличить счётчик</button>
    <p>Счётчик: {{ counter }}</p>
    <button @click="add">Добавить счётчик</button>
    <button @click="addAfterNextTick">nextTick</button>
    <ChildOne :counter="counter" />
    <ChildTwo />
    <ChildThree :counter="counters"/>
    {{ counters }}

    <div>
    <input v-model.lazy="msg" />
    <p>Сообщение: {{ msg }}</p>
  </div>
  </div>


  <div ref="myDiv">{{ message }}</div>
  <button @click="updateSomething">Update</button>
</template>

<script setup>
import ChildOne from './ChildOne.vue'
import ChildTwo from './ChildTwo.vue'
import ChildThree from './ChildThree.vue'
import { ref, shallowRef } from 'vue'
const counter = ref(0)
const counters = shallowRef([])
const msg = ref('')
import { nextTick } from 'vue'

const increment = async () => {
  counter.value++
  await nextTick()
}

const add = async () => {
  counters.value.push(counter.value)
 

}

const addAfterNextTick = async () => {
 
  console.log('🔁 🔴ChildOne перерендерен после nextTick')
}


const message = ref('Hello!')
const myDiv = ref(null)



  function updateSomething() {
    message.value = 'Updated!'
    console.log(myDiv.value.textContent) 

  setTimeout(() => {
    console.log('⏳ setTimeout сработал')
  

    nextTick(() => {
      console.log('✅ nextTick внутри setTimeout')
      console.log(myDiv.value.textContent) 
    })

    console.log('🔸 После вызова nextTick')
 
  }, 3000)


  console.log(myDiv.value.textContent) 
 

}

</script>
