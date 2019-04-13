<template>
  <div class="transport-wrap">
      <v-container class="transport-inner">
          <v-layout>
              <v-flex xs12 md4 class="hidden-sm-and-down">
                <v-list 
                  dense 
                  class="transport-list"
                >
                  <v-list-tile
                    v-for="(item, index) in cards"
                    :key="index"
                    @click="scrollTo(item.id);"
                    :class="{ activeCar: index === activeCar }"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex xs12 md10>
                  <div 
                    class="slider-container" 
                    @scroll="setActiveItem"
                  >
                    <v-card 
                      color="transparent" 
                      class="py-2"
                       v-for="(item, index) in cards"
                      :key="index" 
                      :id="item.id"
                      flat
                    >
                    <v-layout wrap>
                      <v-flex xs12 sm5 d-flex class="align-center">
                        <v-img
                          :src="item.imgPath"
                          contain
                          width="200px"
                          height="200px"
                        ></v-img>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-card-title primary-title>
                          <div>
                            <div class="headline pb-2">{{ item.title }}</div>
                            <div>{{ item.text }}</div>
                          </div>
                        </v-card-title>
                      </v-flex>
                    </v-layout>
                    <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                      <v-spacer></v-spacer>
                      <v-btn
                        style="backgroundColor: #E10A0C"
                        class="py-1" 
                        @click="goToMain()" 
                      >
                        Заказать
                      </v-btn>
                    </v-card-actions>
                    </v-card>
                  </div>
              </v-flex>
          </v-layout>
      </v-container>
  </div>
</template>

<script>
import transition from '~/mixins/transition';
import { mapState, mapGetters } from 'vuex';

export default {
    beforeRouteEnter (to, from, next) {
      next(vm => {
          const selected = vm.$store.state.selectedTab;
          const index = vm.$store.state.transport.cards.findIndex(item => item.id === selected);
          if(selected) {
              vm.scrollTo(selected);
          }
      })
    },
    beforeRouteLeave (to, from, next) {
      next();
    },
    computed: {
      ...mapState('transport', ['cards']),
      ...mapGetters(['currentTab'])
    },
    methods: {
        scrollTo(element){
            this.$scrollTo(`#${element}`, 1000, {
                container: '.slider-container',
                easing: 'ease-in',
                onDone: (element) => {
                    this.setActiveItem();
                },
                offset: () => {
                  switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return 0
                    // case 'sm': return '400px'
                    // case 'md': return '500px'
                    // case 'lg': return '600px'
                    // case 'xl': return '800px'
                    default: return -75 
                  }
                },
            })
        },
        setActive(index){
            this.activeCar = index;
        },
        setActiveItem(e){
            const ids = this.cards.slice();
            const elems = ids.map((item, index) => {
                return  {
                    index,
                    elem: document.getElementById(`${item.id}`).getBoundingClientRect()
                }
            })
            const active = elems.find(item => {
                return item.elem.top > 0
            });
            this.setActive(active.index)
        },
    },
    mixins: [transition],
    data(){
        return {
            activeCar: 0,
        }
    },
    watch: {
      currentTab: function (newval, oldval) {
        if(newval != oldval) {
          const index = this.$store.state.transport.cards.findIndex(item => item.id === newval);
          if(index) {
            this.scrollTo(`${newval}`);
          }
        }
      },
    }
}
</script>

<style scoped>
.transport-wrap {
  background:  linear-gradient(
      rgba(0, 0, 0, 0.4), 
      rgba(0, 0, 0, 0.4)
      ), url("/home/background.png");
  background-size: cover;
  min-height: 100vh;
}
.transport-list{
  background: transparent;
  width: 65%
}
.activeCar {
    transition: all 0.5s ease-in; 
    box-shadow:inset 0px -2px 0px 0px #E10A0C;
}
.slider-container{
    overflow: scroll;
    -ms-overflow-style: none;  
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
     mask-image: linear-gradient(to top, 
    rgba(0,0,0,0.01) 3%, 
    rgba(0,0,0,1) 5%, 
    rgba(0,0,0,1) 97%, 
    rgba(0,0,0,0.01) 100%);
    height: 500px;
}
.slider-container::-webkit-scrollbar { 
    display: none; 
}
.transport-inner {
  padding-top: 7rem;
}
@media screen and (max-width: 322px) {
    .transport-inner {
      padding-top: 4rem
    }
}
</style>
