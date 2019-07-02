<template>
    <TheLayout>


        <template #branding>
<!--            <TestComponent>-->
                <VSet>
                    <VIcon name="star" />
                </VSet>
<!--            </TestComponent>-->
        </template>

        <template #menu>
            <myMeny></myMeny>
        </template>

        <template #navigation>
            <TestComponent>
                N
            </TestComponent>
        </template>

        <template #content>
            <WorkSpace>
                <VSet>
                    <myComponent :title="title"></myComponent>
                    <myForm></myForm>
                </VSet>
                <template #footer>
                    <VSet>
                        <VButton text="Списать" accent />
                        <VButton text="Отменить" />
                    </VSet>
                </template>
            </WorkSpace>
        </template>


    </TheLayout>
</template>
<script>

  import myComponent from "./components/myComponent"
  import myForm from "./components/myForm"
  import myMeny from "./components/myMenu"
  import TheLayout from "swui/src/components/TheLayout"
  import TestComponent from "swui/src/components/TestComponent"
  import VSet from "swui/src/components/VSet"
  import VIcon from "swui/src/components/VIcon"
  import VButton from "swui/src/components/VButton"
  import WorkSpace from "swui/src/components/WorkSpace";

  export default {
    name:'app',
    components: {
        WorkSpace,
        myComponent,
        myMeny,
        myForm,
        TestComponent,
        TheLayout,
        VSet,
        VIcon,
        VButton,
    },
    data(){
      return{
          hello:'Hello,World',
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
