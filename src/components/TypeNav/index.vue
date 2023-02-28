<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideNav" @mouseenter="showNav">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" v-show="isShow">
          <div class="all-sort-list2" @click="goSearch">
            <div v-for="(item, index) of categoryList" @mouseleave="changeLeave" @mouseenter="changeIndex(index)"
              :index="index" :key="item.categoryId" class="item bo" :class="{ selectActive: currentIndex == index }">
              <h3>
                <a :data-categoryName="item.categoryName" :data-categoryId1="item.categoryId">{{
                  item.categoryName }}</a>
              </h3>
              <div class="item-list clearfix" :style="{ display: currentIndex == index ? 'block' : 'none' }">
                <div v-for="item1 of item.categoryChild" :key="item1.categoryId" class="subitem">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="item1.categoryName" :data-categoryId2="item1.categoryId">{{
                        item1.categoryName
                      }}</a>
                    </dt>
                    <dd>
                      <em v-for="item2 of item1.categoryChild" :key="item2.categoryId">
                        <a :data-categoryName="item2.categoryName" :data-categoryId3="item2.categoryId"
                          href="javascript:;">{{ item2.categoryName
                          }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { throttle } from "lodash"
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true
    }
  },
  methods: {
    //  changIndex(event){
    //   console.log(event.target.getAttribute("index"));
    //   this.currentIndex = event.target.getAttribute("index")
    //  },
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    changeLeave() {
      this.currentIndex = -1;
    },
    goSearch(event) {
      let dataset = event.target.dataset;
      if (dataset.categoryname) {
        let location = { name: 'search' }
        let query = { categoryName: dataset.categoryname }
        if (dataset.categoryid1) {
          query.categoryId1 = dataset.categoryid1;
        } else if (dataset.categoryid2) {
          query.categoryId2 = dataset.categoryid2;
        } else if (dataset.categoryid3) {
          query.categoryId3 = dataset.categoryid3;
        }
        location.query = query;
        location.params = this.$route.params
        this.$router.push(location)
      }
    },
    showNav() {
      if (this.$route.name !== "home") {
        this.isShow = true;
        this.currentIndex = -1;
      }
    },
    hideNav() {
      if (this.$route.name !== "home") {
        this.isShow = false;
        this.currentIndex = -1;
      }
    }
  },
  mounted() {
    if (this.$route.name !== "home") {
      this.isShow = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state => {
        return state.home.categoryList;
      })
    })
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .selectActive {
    background-color: turquoise;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        overflow: hidden;

        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>