<template>
  <div class="app">
    <p>name: {{ getName }}</p>
    <p>age: {{ age }}</p>
    <p>sex: {{ sex }}</p>
    <button @click="setName('wwwqqq')">编辑 Name</button>
    <button @click="setAge(100)">编辑 Age</button>
    <button @click="setSex('woman')">编辑 Sex</button>
    <input class="db" placeholder="请输入账号" v-model="formData.user_name" />
    <input class="db" placeholder="请输入密码" v-model="formData.pswd" />
    <button class="mt10" @click="login">登录</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('user')

import * as http from '@/api/user'

export default {
  name: 'App',
  data() {
    return {
      formData: {
        user_name: '',
        pswd: ''
      }
    }
  },
  created() {
    this.getUser()
  },
  computed: {
    ...mapState({
      name: state => state.name,
      age: state => state.age,
      sex: state => state.sex
    }),
    ...mapGetters(['getName'])
  },
  methods: {
    async login() {
      console.log('login')
      try {
        const data = await http.login(this.formData)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    getUser() {
      this.$store.dispatch('user/getUserInfo', {
        name: 'action_wq',
        age: 'action_age',
        sex: 'action_sex'
      })
    },
    ...mapMutations(['setName', 'setAge', 'setSex'])
  }
}
</script>

<style lang="scss">
.app {
  background: $bg-color-orange;
}
</style>
