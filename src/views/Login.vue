<template>
  <div>
    <el-form :model="form" :rules="rules" ref="LoginForm">
      <el-form-item prop="email">
        <el-input v-model="form.email" type="email" placeholder="Please input email" clearable />
      </el-form-item>
      <el-form-item prop="phone">
        <el-input v-model="form.phone" type="text" placeholder="Please input phone" clearable />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="Please input password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(LoginForm)">Login</el-button>
        <el-button @click="cancel">Cancel</el-button>
        <el-button @click="logout">Logout</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { getUserState } from '@/helpers/User';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import type { FormInstance } from 'element-plus';

const LoginForm = ref<FormInstance>();
const form = reactive({
  email: '',
  password: '',
  phone: '',
});
const rules = reactive({
  email: [{ required: true, min: 3, message: 'Please input email', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input password', trigger: 'blur' }],
  phone: [{ required: true, message: 'Please input phone', trigger: 'blur' }],
});
const cancel = () => {
  form.email = '';
  form.password = '';
  form.phone = '';
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

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
      tryLogin();
    } else {
      console.log('error submit!', fields);
    }
  });
};
const tryLogin = async () => {
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
