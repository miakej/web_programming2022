Vue.createApp({
    data() {
      return {
        alpacaLink: "https://en.wikipedia.org/wiki/Alpaca",
        alpacaTitle: "alpaca <a>href",
        llamaLink: "https://en.wikipedia.org/wiki/Llama",
        llamaTitle: "llama link",
        baseStyle: {
          color: "cadetblue",
        },
        overRideStyle: {
          color: "orange"
        },
        isActive: true,
      }
    }
  }).mount('#app')