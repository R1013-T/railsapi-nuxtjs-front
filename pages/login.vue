<template>
  <div>
    <h2>Log in</h2>
    <div style="width: 70vw; margin: 0 auto">
      <v-form
        ref="form"
      >
        <v-text-field
          v-model="params.user.email"
          label="メールアドレスを入力"
          placeholder="メールアドレス"
          outlined
        />
        <v-text-field
          v-model="params.user.password"
          label="パスワードを入力"
          placeholder="パスワード"
          outlined
        />
        <v-btn block color="primary" :loading="loading" @click="login">
          login
        </v-btn>
      </v-form>
    </div>
    <v-btn to="signup">
      sign up
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      params: {
        user: {
          email: '', password: ''
        }
      }
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$router.push('/projects')
    }
  }
}
</script>
