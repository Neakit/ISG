<template>
  <div class="main pt-5">
    <v-container>
        <p class="display-1 font-weight-medium pb-4 pt-5">
            Международные перевозки по любым направлениям
        </p>
        <no-ssr>
            <swiper :options="swiperOption" >
                <swiper-slide 
                    v-for="(card, i) in cards" 
                    :key="i" 
                    style="width: 250px; cursor: pointer"
                >
                    <img 
                        :src="card.imgPath" 
                        alt="Card image" 
                        style="width: 100%" 
                        :data-car-id="`#${card.id}`"
                    />
                    <p class="title font-weight-light py-2 text-xs-center">{{ card.title }}</p>
                </swiper-slide> 
            </swiper>
        </no-ssr>
        <v-layout justify-space-around>
            <span class="group">
                <v-icon class="mt-1">keyboard_arrow_left</v-icon>
                <v-icon class="mb-1">pan_tool</v-icon>
                <v-icon class="ml-1">keyboard_arrow_right</v-icon>
            </span>
        </v-layout>
        <v-layout class="py-4" row justify-center>
            <v-btn style="backgroundColor: #E10A0C">
                Оформить звонок
            </v-btn>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import transition from '~/mixins/transition';
import { mapState } from 'vuex';

export default {
  mixins: [transition],
  methods: {
    goToCard(id){
        this.$store.commit('setCurrentTab', id)
        this.$router.push({
            path: '/transport'
        })
    }
  },
  computed: {
      ...mapState('transport', ['cards']),
      swiperOption() { 
            return {
                on: {
                    click:  e => {
                        this.goToCard(e.target.dataset.carId)
                    },
                },
                slidesPerView: 5,
                spaceBetween: 30,
                loop: true,
                freeMode: true,
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            }
        }
  }
}
</script>

<style>
.main {
    background:  linear-gradient(
        rgba(0, 0, 0, 0.4), 
        rgba(0, 0, 0, 0.4)
        ), url("/home/background.png");
    background-size: cover;
}
</style>
