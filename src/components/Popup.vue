<template>
<div>
  <div class="popup-wrapper" @click="closePopup" @keydown.esc="closePopup">
  </div>
  <div class="v-popup">
    <div class="v-popup__header">
      <div class="header-text">
        <h1>{{popupData.zipcode}}</h1>
        <span>{{popupData.region}}</span>
      </div>
      <div @click="closePopup">
        <i class="material-icons">close</i>
      </div>
    </div>
    <div class="v-popup__content">
      <div class="title">Total: {{ popupData.total }}</div>
      <ul class="list">
        <li>
          <div 
            v-for="item, idx in popupData.competitors" 
            :key="item.idx" 
            class="item"
            >
            <span>{{ idx+1 }}.</span>
            <p>{{ item.name }}: {{ item.sales }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="v-popup__footer">
      <span>Other: {{popupData.lastYearTotal}}</span>
      <button class="button">Dealer</button>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Popup',
  props: ['popupData'],
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    closePopupEvent (e) {
      if (e.keyCode === 27) this.closePopup()
    }
  },
  beforeMount () {
    document.addEventListener('keyup', this.closePopupEvent)
  },
  beforeDestroy () {
    document.removeEventListener('keyup', this.closePopupEvent)
  },
}
</script>

<style lang="scss" scoped>
.popup-wrapper {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(52, 53, 56, 0.5);
}
.v-popup {
  padding: 24px;
  position: absolute;
  left: calc(50% - 224px);
  top: 120px;
  width: 448px;
  color: #ffffff;
  background: #3F4042;
  box-shadow: 0px 24px 96px rgba(0, 0, 0, 0.24);
  border-radius: 12px;
  overflow: auto;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 15px;
    
    .header-text {
      h1 {
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.02em;
      }
      span {
        margin-top: 4px;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: rgba(255, 255, 255, 0.4);
      }
    }

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 40px;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.16);
      box-sizing: border-box;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  &__content {
    padding: 13px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    .title {
      margin-top: 20px;
      margin-bottom: 22px;
    }
    ul.list li {
      list-style: none;
      .item {
        display: flex;
        align-items: center;
        p {
          margin-left: 10px;
          font-weight: normal;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0.02em;
        }
      }
    }
  }
  &__footer {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    span {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
    }
    .button {
      margin-top: 20px;
      width: 98px;
      height: 48px;
      color: #ffffff;
      background: #F38C2C;
      border: none;
      border-radius: 12px;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.02em;
      cursor: pointer;
    }
  }
}

</style>