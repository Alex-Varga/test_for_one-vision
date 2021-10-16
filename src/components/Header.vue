<template>
  <nav class="wrapper">
    <a href="#!" class="wrapper__logo"><img src="../../src/assets/img/Logo.svg" alt="logo"></a>
    <div class="wrapper__nav">
      <ul class="nav">
        <li><a href="#!">Real Time Cashflow</a></li>
        <li><a href="#!">Planner</a></li>
        <li><a href="#!">Budget</a></li>
        <li><a href="#!">Analytics: <span>Market Share</span></a></li>
      </ul>
      <a href="#" class="button"><img src="../../src/assets/img/button-icon.svg" alt="icon"></a>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.wrapper {
  display: flex;
  align-items: center;
  padding-top: 18px;
  &__logo {
    display: flex;
    align-items: center;
    margin: 0 220px 0 20px;
  }
  &__nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav {
      display: flex;
      li {
        margin: 0 16px;
      }
      a {
        span {
          color: #F38C2C;
        }
      }
    }
    .button {
      display: flex;
      align-items: center;
      background: #47484B;
      padding: 12px 20px;
      border-radius: 12px;
      margin-right: 20px;
    }
  }
}
</style>