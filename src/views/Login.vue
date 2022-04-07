<template>
  <div class="login__form-box">
    <el-form :model="form" :rules="rules" ref="LoginForm">
      <el-form-item prop="email">
        <el-input v-model="form.email" type="email" placeholder="Please input email" clearable />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="Please input password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(LoginForm)">Login</el-button>
        <el-button @click="cancel(LoginForm)">Cancel</el-button>
        <el-button @click="logout">Logout</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { getUserState } from '@/helpers/User';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FormInstance, FormRules, ElMessage } from 'element-plus';
import { type } from 'os';

const LoginForm = ref<FormInstance>();
const form = reactive({
  email: '',
  password: '',
});
const rules: FormRules = reactive({
  email: [
    { required: true, min: 3, message: 'Please input email', trigger: 'blur' },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: 'blur'
    },
  ],
  password: [{ required: true, min: 6, message: 'Please input password', trigger: 'blur' }],
});
const cancel = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  form.email = '';
  form.password = '';
  formEl.clearValidate()
};
const logout = async () => {
  try {
    await signOut(getAuth());
    ElMessage({
      message: 'User logout',
      type: 'success',
      duration: 1000,
      showClose: true
    })
  } catch (error) {
    console.log(error);
  }
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
    cancel(LoginForm.value);
    ElMessage({
      message: 'User login',
      type: 'success',
      duration: 1000,
      showClose: true
    })
  } catch (error) {
    ElMessage({
      message: 'Oops! Something went wrong',
      type: 'error',
      duration: 1000,
      showClose: true
    })
    console.error(error);
  }
};
</script>

<style scoped lang="scss">
.login {
  &__form-box {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
