<template>
    <VSet direction="vertical">

        <VSet direction="vertical" indentSize="S">
            <VSign>Отдел событий (ОС)</VSign>
            <VLink @click.prevent="clickHandler">Импорт участников событий ЭО</VLink>
        </VSet>
        <VSet direction="vertical" indentSize="S">
            <VSign>Отдел событий (ОС)</VSign>
            <VLink @click.prevent="clickHandler">Импорт участников событий ЭО</VLink>
            <VLink @click.prevent="clickHandler">Импорт участников событий 20</VLink>
            <VLink @click.prevent="clickHandler">Импорт участников событий Э23</VLink>
            <VLink @click.prevent="clickHandler">Импорт участников ЭО</VLink>
            <VLink @click.prevent="clickHandler">Импорт  событий ЭО</VLink>
            <VLink @click.prevent="clickHandler">Импорт участников событий ЭО</VLink>
            <VLink @click.prevent="clickHandler">участников событий ЭО</VLink>
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

    }
</script>