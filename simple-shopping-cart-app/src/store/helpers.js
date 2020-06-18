import { mapGetters } from "vuex";

export const authCompleted = {
  ...mapGetters(["loggedIn"])
};
