<template>
  <div id="nav">
    <span>
      <router-link :to="{name: 'Home'}">Home</router-link> | 
    </span>
    <span v-if="GET_USER_STATE">
      <router-link :to="{name: 'Cabinet'}">Cabinet</router-link> | 
    </span>
    <span v-if="GET_USER_STATE">
      <router-link :to="{name: 'AddProduct'}">Add new product</router-link> | 
    </span>
    <span>
      <router-link :to="{name: 'Registration'}">Registration</router-link> | 
    </span>
    <span>
      <router-link :to="{name: 'Login'}">Login</router-link>
    </span>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
    mounted() {
        this.getUser();
    },
    computed: {
        ...mapGetters(["GET_USER", "GET_USER_STATE"]),
    },
    methods: {
        ...mapActions(["GetUser"]),
        async getUser() {
            await this.GetUser();
            //more logic
        },
    },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
