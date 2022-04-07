<template>
  <div class="add-product__form-box">
    <el-form :model="productForm" :rules="rules" ref="ProductFormRef">
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

<script lang="ts">
import { defineComponent } from 'vue';
import { FormInstance, FormRules, ElMessage } from 'element-plus';
import { db } from '@/firebase';
import { push, ref, set, update, ThenableReference } from 'firebase/database';
import { mapGetters } from 'vuex';

interface Product {
  title: string;
  description: string;
  price: number | string;
  count: number;
  author: string;
}

export default defineComponent({
  data() {
    return {
      productForm: {
        title: '',
        description: '',
        price: '',
        count: 1,
      },
      rules: {
        title: [
          { required: true, message: 'Please input title' },
          { min: 3, max: 50, message: 'Title must contain 3-50 characters' },
        ],
        description: [
          { required: true, message: 'Please input description' },
          { min: 3, max: 100, message: 'Description must contain 3-100 characters' },
        ],
        price: [
          { required: true, message: 'Please input price' },
          { validator: this.priceValidator, trigger: 'change' },
        ],
      } as FormRules,
    };
  },
  computed: {
    ...mapGetters(['GET_USER_UID', 'GET_USER_DATA']),
    productFormRef() {
      return this.$refs.ProductFormRef as FormInstance;
    },
  },
  methods: {
    async onSubmit(formEl: FormInstance | undefined) {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          this.tryAddProduct();
        } else {
          console.log('error submit!', fields);
        }
      });
    },
    async addProductsToUser(newProductId: ThenableReference) {
      const strKey: string = newProductId.key + ' '
      const oldProductsStrKeys: string = this.GET_USER_DATA.products ? this.GET_USER_DATA.products : ''
      update(ref(db, 'users/' + this.GET_USER_UID), {
        products: oldProductsStrKeys + strKey
      });
    },
    tryAddProduct() {
      const product: Product = {
        author: this.GET_USER_UID as string,
        price: this.productForm.price,
        title: this.productForm.title,
        count: this.productForm.count,
        description: this.productForm.description,
      };
      const postListRef = ref(db, 'products');
      const newPostRef = push(postListRef);
      set(newPostRef, product).then(() => {
        this.addProductsToUser(newPostRef);
        ElMessage({
          message: 'Product Create',
          type: 'success',
          duration: 1000,
          showClose: true,
        });
        this.cancel(this.productFormRef);
      }).catch((error)=> {
        console.error(error);
      });
    },
    async cancel(formEl: FormInstance | undefined) {
      if (!formEl) return;
      this.productForm.title = '';
      this.productForm.description = '';
      this.productForm.price = '';
      this.productForm.count = 1;
      await formEl.clearValidate();
    },
    priceValidator(rule: any, value: any, callback: any) {
      if (value <= 0) {
        callback(new Error('Price should be a positive number'));
      } else {
        callback();
      }
    },
  },
});
</script>

<style scoped lang="scss">
.add-product {
  &__form-box {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
