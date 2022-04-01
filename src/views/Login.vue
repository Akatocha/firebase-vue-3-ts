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
        <el-button type="primary" @click="onSubmit">Login</el-button>
        <el-button @click="cancel">Cancel</el-button>
        <el-button @click="logout">Logout</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { getUserState } from '@/helpers/User';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const form = reactive({
  email: '',
  password: '',
});
const cancel = () => {
  form.email = '';
  form.password = '';
};
const logout = async () => {
  console.log('log');
  try {
    await signOut(getAuth());
    const userState = await getUserState();
    console.log('userState', userState);
  } catch (error) {
    console.log(error);
  }
  console.log('out');
};
const onSubmit = async () => {
  try {
    const res = await signInWithEmailAndPassword(getAuth(), form.email, form.password);
    console.log(res);
    const userState = await getUserState();
    console.log('userState', userState);
    cancel();
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
