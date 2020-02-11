<template>
  <div id="ad1" />
</template>

<script>
export default {
  name: 'Ad1',
  mounted() {
    document.getElementById('ad1').innerHTML = `
      <div id='1718bd94119d91e8c3508aaa8756718c' style='margin: 0 auto;'>
      <script>googletag.cmd.push(function() { googletag.display('1718bd94119d91e8c3508aaa8756718c'); });<\/script>
      </div>
    `
  }
}
</script>
