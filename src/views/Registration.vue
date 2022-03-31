<template>
  <div>
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.email" type="email" placeholder="Please input email" clearable />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" type="password" placeholder="Please input password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create User</el-button>
        <el-button @click="cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = reactive({
  email: '',
  password: '',
});
const cancel = () => {
  form.email = '';
  form.password = '';
};
const onSubmit = async () => {
  try {
    await createUserWithEmailAndPassword(getAuth(), form.email, form.password);
    router.push('/login');
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped></style>
