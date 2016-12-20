module.exports = {
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      }
    }
  },
  template: '<input v-model="model" class="uk-width-1-1" type="number" />',
  props: ['model']
};
