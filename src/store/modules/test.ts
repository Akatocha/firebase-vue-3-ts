import { Module } from 'vuex';

interface TestState {
  testName: string;
  testAge: number;
  testObj: TestObj
}

interface TestObj {
  email: string
  phone: number,
}

const testObj: TestObj = {
  email: 'mail@mail.ua',
  phone: 380664136082
}

const state: TestState = {
  testName: 'testName - name',
  testAge: 25,
  testObj
};
export const test: Module<TestState, any> = {
  state,
  getters: {
    GET_EMAIL: state => {
      return state.testObj;
    }
  }
};
