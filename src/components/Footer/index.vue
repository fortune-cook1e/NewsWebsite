<template>
  <div class="footer">
    <footer class="footer-content">
      <p>Privacy Policy</p>
      <p>Copyright © 2020 All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  .footer {
    margin-top: 20px;
    width: 100%;
    background: #0f0f0f;
    .footer-content {
      text-align: center;
      padding-bottom: 12px;
      color: #fff;
      p {
        font-size: 16px;
        line-height: 30px;
        padding: 0;
      }
    }
  }
</style>
