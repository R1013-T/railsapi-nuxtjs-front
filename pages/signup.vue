<template>
  <div>
    <h2>Sign Up</h2>
    <div style="width: 70vw; margin: 0 auto">
      <v-form>
        <v-text-field
          v-model="params.user.name"
          label="ユーザー名を入力"
          placeholder="あなたの表示名"
          outlined
        />
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
        <v-btn block color="primary" :loading="loading" @click="signup">
          register
        </v-btn>
      </v-form>
    </div>
    <v-btn to="login">
      login
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
          name: '', email: '', password: ''
        }
      }
    }
  },
  methods: {
    signup () {
      this.loading = true
      // eslint-disable-next-line no-return-assign
      setTimeout(() => this.loading = false, 1000)
    }
  }
}
</script>
