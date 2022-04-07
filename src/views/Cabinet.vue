<template>
  <div class="cabinet">
    <pre>
      {{ GET_USER }}
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  mounted() {
    this.GetUser();
  },
  computed: {
    ...mapGetters(['GET_USER']),
  },
  methods: {
    ...mapActions(['GetUser']),
  },
});
</script>
