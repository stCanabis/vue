<template>
    <TheLayout>

        <template #branding>
            <img src="https://siberianhealth.com/favicon.ico" width="16px" height="16px"/>
        </template>

        <template #menu>
            <myMenu></myMenu>
        </template>

        <template #navigation>
            <VSet horizontalAlign="right" vertical-align="center">
                <VHead width="fit">{{name}}</VHead>
                <VButton text="Выйти"></VButton>
            </VSet>
        </template>

        <template #content>
                <servers></servers>
        </template>

    </TheLayout>
</template>
<script>

  import Servers from "./components/Servers"
  // import MyForm from "./components/MyForm"
  import MyMenu from "./components/MyMenu"
  import TheLayout from "swui/src/components/TheLayout"
  import TestComponent from "swui/src/components/TestComponent"
  import VSet from "swui/src/components/VSet"
  import VImage from "swui/src/components/VImage"
  import VIcon from "swui/src/components/VIcon"
  import VText from "swui/src/components/VText"
  import VHead from "swui/src/components/VHead"
  import VButton from "swui/src/components/VButton"
  import WorkSpace from "swui/src/components/WorkSpace";

  export default {
    name:'app',
    components: {
        WorkSpace,
        Servers,
        MyMenu,
        // MyForm,
        TestComponent,
        TheLayout,
        VSet,
        VText,
        VHead,
        VImage,
        VIcon,
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
