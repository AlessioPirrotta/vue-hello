
  const { createApp } = Vue

  createApp({
    data() {
      return {
        Hello: 'Hello Vue!',
        colore: 'text-light',
        back: 'bg-danger'
        
      }
    }
  }).mount('#app')