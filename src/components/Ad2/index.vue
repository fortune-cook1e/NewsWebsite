<template>
  <div id="ad2" />
</template>

<script>
export default {
  name: 'Ad2',
  data() {
    return {
      content:
      `
        <div id='1bca8753367d2c06e3dc9d9d23569324' style='margin: 0 auto;'><script>googletag.cmd.push(function() { googletag.display('1bca8753367d2c06e3dc9d9d23569324') })<\/script></div>
      `
    }
  },
  mounted() {
    document.getElementById('ad2').innerHTML = this.content
  }
}
</script>
