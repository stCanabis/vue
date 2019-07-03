<template>
    <VSet direction="vertical">
        <VSet direction="vertical" indentSize="S">
            <VSign>Страницы приложения</VSign>
            <VLink :url="val" routerLink  v-for="(val, name, index) in menuLink" :key="index" >{{name}}</VLink>
        </VSet>
    </VSet>
</template>
<script>
    import VSet from "swui/src/components/VSet"
    import VSign from "swui/src/components/VSign"
    import VLink from "swui/src/components/VLink"

    export default {
        name: 'MyMenu',
        components: {
            VSet,
            VLink,
            VSign,
        },
        data() {
            return {
                menuLink: {
                    'Домашняя страница': '/',
                    '2-я страница': '/page2',

                }
            }
        }

    }
</script>