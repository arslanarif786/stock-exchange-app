<template>
  <div>
    <slot name="body"/>
  </div>
</template>

<script>

export default {
  props: {
    expanded: Boolean, // Assuming 'expanded' is a boolean prop
  },
  setup() {

  },
};
</script>
