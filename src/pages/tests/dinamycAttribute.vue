<template>
    <div>
      <label>
        Выбери атрибут:
        <select v-model="attributeName">
          <option value="href">href</option>
          <option value="title">title</option>
          <option value="id">id</option>
        </select>
      </label>
  
      <input v-model="url" placeholder="Введите значение" />
  
      <!-- динамически выбираемый атрибут -->
      <a :[attributeName]="url">Ссылка с динамическим атрибутом</a>
  
      <!-- выводим объект для наглядности -->
      <pre>{{ attributeName }} = {{ url }}</pre>
    </div>


<br>
    <div>
    <label>
      Выбери событие:
      <select v-model="eventName">
        <option value="click">click</option>
        <option value="mouseenter">mouseenter</option>
        <option value="dblclick">dblclick</option>
      </select>
    </label>

    <!-- динамически выбранное событие -->
    <button @[eventName]="handleEvent">
      Наведи или кликни
    </button>
  </div>



  <br>
  <MyDialog ref="rt_2343" />
  <button @click="rt_2343?.open()">Открыть диалог</button>
  <br>

  <Counter ref="rt_2345" />
  <button @click="rt_2345?.increment()">Increment</button>

  
</template>



  
  <script setup>
  import MyDialog from './defineExpose.vue'
  import Counter from './counter.vue'


  import { ref } from 'vue'
  
  const attributeName = ref('href') // начнем с href
  const url = ref('https://example.com') // значение атрибута

  const eventName = ref('click')

function handleEvent() {
  alert(`Сработало событие: ${eventName.value}`)
}
const rt_2343 = ref()

  </script>
  