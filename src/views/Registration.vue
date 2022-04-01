<template>
  <div>
    <el-form :model="form" :rules="rules" ref="registrationForm">
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
        <el-button type="primary" @click="onSubmit(registrationForm)">Registration</el-button>
        <el-button @click="cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { FormInstance } from 'element-plus';
import { setUser, User } from '@/firebase';

const registrationForm = ref<FormInstance>();
const router = useRouter();
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
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
      tryRegistration()
    } else {
      console.log('error submit!', fields);
    }
  });
};

const tryRegistration = async () => {
    try {
    
    const { user: { uid : localId } } = await createUserWithEmailAndPassword(getAuth(), form.email, form.password);
    
    const userData: User = {
      userId: localId,
      phone: form.phone,
      email: form.email
    }
    await setUser(userData)
    router.push('/login')
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped></style>
