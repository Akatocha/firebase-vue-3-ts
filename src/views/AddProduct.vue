<template>
  <div class="add-product__form-box">
    <el-form :model="productForm" :rules="rules" ref="productFormRef">
      <el-form-item prop="title">
        <el-input v-model="productForm.title" type="text" placeholder="Title" clearable />
      </el-form-item>
      <el-form-item prop="description">
        <el-input v-model="productForm.description" :rows="2" type="textarea" placeholder="Products description" />
      </el-form-item>
      <el-form-item prop="price">
        <el-input v-model="productForm.price" type="number" placeholder="Single product price" clearable>
          <template #prepend>UAH</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="count">
        <el-input-number v-model="productForm.count" :min="1" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(productFormRef)">Registration</el-button>
        <el-button @click="cancel(productFormRef)">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { FormInstance, FormRules, ElMessage } from 'element-plus';
import { db } from '@/firebase';
import { push, ref, set, update, ThenableReference } from 'firebase/database';
import { reactive, ref as refVue } from 'vue';

interface Product {
  title: string;
  description: string;
  price: number | string;
  count: number;
  author: string;
}

const store = useStore();
const productFormRef = refVue<FormInstance>();
const productForm = reactive({
  title: '',
  description: '',
  price: '',
  count: 1,
});
const rules: FormRules = reactive({
  title: [
    { required: true, message: 'Please input title', trigger: 'blur' },
    { min: 3, max: 50, message: 'Title must contain 3-50 characters', trigger: 'blur' },
  ],
  description: [
    { required: true, message: 'Please input description', trigger: 'blur' },
    { min: 3, max: 100, message: 'Description must contain 3-100 characters', trigger: 'blur' },
  ],
  price: [
    { required: true, message: 'Please input price', trigger: 'blur' },
    { validator: priceValidator, trigger: 'blur' },
  ],
});

function priceValidator(rule: any, value: any, callback: any) {
  if (value <= 0) {
    callback(new Error('Price should be a positive number'));
  } else {
    callback();
  }
}

async function onSubmit(formEl: FormInstance | undefined) {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      tryAddProduct();
    } else {
      console.log('error submit!', fields);
    }
  });
}

async function addProductsToUser(newProductId: ThenableReference) {
  const strKey: string = newProductId.key + ' ';
  const oldProductsStrKeys: string = store.getters.GET_USER_DATA.products ? store.getters.GET_USER_DATA.products : '';
  update(ref(db, 'users/' + store.getters.GET_USER_UID), {
    products: oldProductsStrKeys + strKey,
  });
}

function tryAddProduct() {
  const product: Product = {
    author: store.getters.GET_USER_UID as string,
    price: productForm.price,
    title: productForm.title,
    count: productForm.count,
    description: productForm.description,
  };
  const postListRef = ref(db, 'products');
  const newPostRef = push(postListRef);
  set(newPostRef, product)
    .then(() => {
      addProductsToUser(newPostRef);
      ElMessage({
        message: 'Product Create',
        type: 'success',
        duration: 1000,
        showClose: true,
      });
      cancel(productFormRef.value);
    })
    .catch(error => {
      console.error(error);
    });
}

function cancel(formEl: FormInstance | undefined) {
  if (!formEl) return;
  productForm.title = '';
  productForm.description = '';
  productForm.price = '';
  productForm.count = 1;
  formEl.clearValidate();
}
</script>

<style scoped lang="scss">
.add-product {
  &__form-box {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
