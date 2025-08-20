<template >
  <div class="page">
    <div class="page__top d-flex a-item j-between">
      <h2 class="page-title">Opinions</h2>
      <div class="page-actions">
        <button class="create-button" @click="$emit('open-modal')">
          <Icons name="add" class="icon" />
          Add Opinion
        </button>
      </div>
    </div>
    <div class="page-bottom">
    
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      searchParameter: "",
    };
  },
};
</script>

<style ></style>
