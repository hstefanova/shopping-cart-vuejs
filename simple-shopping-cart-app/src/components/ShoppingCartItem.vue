<template>
  <div>
    <h3>{{ item.title }}</h3>
    <p>Price: ${{ item.price }} x {{ qty }}</p>
    <p>Subtotal {{ subtotal }}</p>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  props: ["item"],
  data() {
    return {
      qty: 1
    };
  },
  computed: {
    subtotal: function() {
      return (Number(this.item.price) * this.qty).toFixed(2);
    }
  },
  created() {
    EventBus.$on("add-to-cart", book => {
      if (book.id === this.item.id && this.qty < this.item.qty) {
        this.qty++;
      }
    });
  }
};
</script>
