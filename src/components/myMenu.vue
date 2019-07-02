<template>
<WorkSpace>
    <VLink @click.prevent="clickHandler">Ссылка действие</VLink>




</WorkSpace>
</template>
<script>
    import VSet from "swui/src/components/VSet"
    import VInput from "swui/src/components/VInput"
    import VLabel from "swui/src/components/VLabel"
    import VButton from "swui/src/components/VButton"
    import VHead from "swui/src/components/VHead"
    import WorkSpace from "swui/src/components/WorkSpace"
    import VSign from "swui/src/components/VSign"
    import VLink from "swui/src/components/VLink"

    export default {
        name: 'myMenu',
        components: {
            VSet,
            VLink,
            VInput,
            VLabel,
            VButton,
            VHead,
            WorkSpace,
            VSign,
        },

    }
</script>