<template>
    <VSet direction="vertical">

        <VSet direction="vertical" indentSize="S">
            <VSign>Отдел событий (ОС)</VSign>
            <VLink @click.prevent="clickHandler">Импорт участников событий ЭО</VLink>
        </VSet>
        <VSet direction="vertical" indentSize="S">
            <VSign>Отдел событий (ОС)</VSign>
            <VLink :url="val" routerLink  v-for="(val, name) in menuLink" >{{name}}</VLink>
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
        data(){
            return {
                menuLink: {
                    'Импорт участников событий ЭО': 'link',
                    'Импорт участников  ЭО': 'link',
                    'Импорт участников событий 1О': 'link',
                    'Импорт участников  Э2О': 'link',
                    'Импорт участников событий 12': 'link',
                    'Импорт  событий ЭО': 'link',
                    'Импорт участников событий 2О': 'link',
                    'Импорт участников событий 5О': 'link',
                }
            }
        }

    }
</script>