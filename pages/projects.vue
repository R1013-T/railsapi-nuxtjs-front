<template>
  <div>
    <h2>Projects</h2>
    <v-btn outlined @click="logout">
      logout
    </v-btn>
    <div
      v-for="(project,i) in recentProjects"
      :key="i"
    >
      {{ project.name }}
      {{ project.updatedAt }}
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    recentProjects () {
      const copyProjects = [
        { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
        { id: 2, name: 'MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
        { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
        { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
        { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
      ]
      return copyProjects.sort((a, b) => {
        if (a.updatedAt > b.updatedAt) {
          return -1
        }
        if (a.updatedAt < b.updatedAt) {
          return 1
        }
        return 0
      })
    }
  },
  methods: {
    logout () {
      this.$router.push('/')
    }
  }
}
</script>
