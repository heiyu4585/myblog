<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>这是通过router的第二个页面组件</h2>-->
    <ul>
      <li v-for="(item, index) in artList" :item="item" :key="item.id">
       {{ item.resourceInfo.resourceObjectName}}
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '../store';
export default {
  store,
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  },
  computed: {
    artList(){
      return store.state.artList
    }
  },

  mounted: function () {
    console.log(this.$route.params.id)
    //获取页数后 同步数据
    store.dispatch('fetchItem',{
      id:this.$route.params.id
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
