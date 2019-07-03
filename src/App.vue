<template>
    <TheLayout>
        <template #branding>
            <img src="https://siberianhealth.com/favicon.ico" width="16px" height="16px"/>
        </template>
        <template #menu>
            <MyMenu></MyMenu>
        </template>
        <template #navigation>
            <VSet horizontalAlign="right" vertical-align="center">
                <VHead width="fit">{{name}}</VHead>
                <VButton text="Выйти"></VButton>
            </VSet>
        </template>
        <template #content>
            <router-view></router-view>
        </template>
    </TheLayout>
</template>
<script>

  import MyMenu from "./components/MyMenu"
  import TheLayout from "swui/src/components/TheLayout"
  import VSet from "swui/src/components/VSet"
  import VHead from "swui/src/components/VHead"
  import VButton from "swui/src/components/VButton"

  export default {
    name:'app',
    components: {
        MyMenu,
        TheLayout,
        VSet,
        VHead,
        VButton,
    },
    data(){
      return{
          name:'Laptev A.A.',
          title:'Передал от родителя'
      }
    }
  }




</script>































<!--<template>-->
<!--  <div id="app">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld.vue'-->

<!--export default {-->
<!--  name: 'app',-->
<!--  components: {-->
<!--    HelloWorld-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
