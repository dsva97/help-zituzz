<template>
  <form @submit="login">
    <input v-model="username" type="text">
    <input  v-model="password" type="password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      console.log(this.username, this.password)
    }
  }
};
</script>
