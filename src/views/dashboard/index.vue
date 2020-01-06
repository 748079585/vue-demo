<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    var result = this.roles.some(role=>{
      if(role.code=='SUPER_ADMIN'){
           return true 
        }
    })
    if (!result) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
