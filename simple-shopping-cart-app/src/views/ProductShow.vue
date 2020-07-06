<template>
  <div>
    <h1>PRODUCT</h1>
    <h1>ProductID: {{ id }}</h1>
    <p>Title: {{ book.title }}</p>
    <p>Author: {{ book.author }}</p>
    <p>Type: {{ book.type }}</p>
    <p>Short description: {{ book.shortDescription }}</p>
    <p>Description: {{ book.description }}</p>
    <img :src="book.imageSrc" alt="" />
  </div>
</template>

<script>
import { db } from "@/main";
export default {
  props: ["id"],
  data() {
    return {
      book: {}
    };
  },
  created() {
    if (this.id) {
      db.collection("books")
        .doc(this.id)
        .get()
        .then(doc => {
          this.book = doc.data();
        })
        .catch(err => {
          console.log("Error: ", err);
        })
        .finally(() => (this.isLoading = false));
    } else {
      `Book with ID ${this.id} was not found!`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
