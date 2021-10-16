<template>
  <div>
    <table>
      <tr>
        <th></th>
        <th>ZIP</th>
        <th>Period Sales</th>
        <th>LY Period Sales</th>
        <th>Sales Change</th>
        <th>Total</th>
        <th>LY total</th>
        <th>YOY Share Change</th>
      </tr>
      <tr v-for="data, idx of DATAS" :key="data.zipcode" class="show-info" @click="() => showPopupInfo(data)">
        <td>{{ idx+1 }}</td>
        <td>{{ data.zipcode }} <span>({{ data.region }})</span></td>
        <td>{{ data.sales }}</td>
        <td>{{ data.lastYear }}</td>
        <td>
          <div class="item">
            <img :src="require(`../assets/img/${data.sales - data.lastYear >= 0 ?'green':'red'}.svg`)" alt="image">
            <p :class="{green: data.sales - data.lastYear >= 0, red: data.sales - data.lastYear < 0}">
              {{ data.sales - data.lastYear }}
            </p>
          </div>
         </td>
        <td>{{ data.total }}</td>
        <td>{{ data.lastYearTotal }}</td>
        <td>
          <div class="last-item">
            <p :class="{green: data.total - data.lastYearTotal >= 0, red: data.total - data.lastYearTotal < 0}">
              {{ data.total - data.lastYearTotal }}
            </p>
            <img :src="require(`../assets/img/${data.total - data.lastYearTotal >= 0 ?'green':'red'}.svg`)" alt="image">
          </div>
        </td>
      </tr>
    </table>

    <Popup 
      v-if="isInfoPopupVisible"
      :popupData="popupData"
      @closePopup="closePopup"
    >
    </Popup>

  </div>
</template>

<script>
import Popup from './Popup.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    Popup
  },
  data: () => ({
    isInfoPopupVisible: false,
    popupData: null
  }),
  methods: {
    ...mapActions(['fetchData']),
    showPopupInfo(data) {
      this.isInfoPopupVisible = true
      this.popupData = data
      document.body.classList.add("modal-open");
    },
    closePopup() {
      this.isInfoPopupVisible = false
      document.body.classList.remove("modal-open");
    },
  },

  async mounted() {
    this.fetchData()
  },
  computed: {
    ...mapGetters(['DATAS']),
  }
  
}
</script>

<style lang="scss" scoped>
table{
  width: 1100px;
  height: 405px;
  display: block;
  margin: 0 auto;
  margin-top: 100px;
  color: #ffffff;
  text-align: left;
  border-collapse: collapse;
  th {
  padding: 20px 20px 20px 0px;
  }
  td {
    padding: 20px 20px 20px 0px;
    span {
      color: rgba(255, 255, 255, 0.4);
    }
    .item {
      display: flex;
      align-items: center;
      .green{
      color: #3CBF73;
      }
      .red{
        color: #FE2B5C;
      }
      img {
        margin-right: 8px;
      }
    }
    .last-item {
      display: flex;
      align-items: center;
      justify-content: right;
      .green{
      color: #3CBF73;
      }
      .red{
        color: #FE2B5C;
      }
      p {
        margin-right: 8px;
      }
    }
    &:first-child {
      padding-left: 20px;
      width: 56px;
    }
  }
  tr {
    cursor: pointer;
  }
  tr:nth-of-type(even) {
    background: #3F4042;
    border-radius: 12px;
  }
}
</style>