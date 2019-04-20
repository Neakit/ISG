<template>
    <div>
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
                                :data-car-id="`${card.id}`"
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
                    <v-btn 
                        style="backgroundColor: #E10A0C"
                        @click="openModal"    
                    >
                        Оформить звонок
                    </v-btn>
                </v-layout>
            </v-container>
        </div>
        <!--about section-->
        <div class="about">
            <v-container>
                <p class="h2 text-xs-center pt-4 pb-2 title">О компании</p>
                <p class="h6 text-left py-2">
                    Компания Inter Smart Group предоставляет автомобильные транспортные 
                    услуги на международном уровне. Наше неоспоримое преимущество это – логистика Smart, 
                    которая дает нашим клиентам полный контроль и уверенность в безопасности 
                    всех происходящих операций, гарантирует оперативность в документообороте и других 
                    бизнес-процессов нашей компании, а также предоставляет широкий перечень сервисов, 
                    которые смогут пригодиться на нелегкой стезе бизнеса. 
                </p>
                <p class="h6 text-left py-2">
                    Обращаясь к нам, Вы можете быть уверенными в сохранности доставляемого груза, 
                    поскольку мы ценим каждого клиента и нам важно ваше доверие. Отличительная 
                    особенность нашей компании в том, что мы занимаемся не просто перевозками - мы 
                    способны покрыть большой спектр задач. Мы готовы взять на себя превалирующую 
                    часть ваших рутин для достижения вами максимальных показателей прибыли, сокращения 
                    ненужных временных издержек, и уменьшения ваших расходов на персонал. 
                </p>
                <p class="h6 text-left py-2">
                    Если Вы ищете надежного партнера для перевозки груза, Вы - на верном пути, потому 
                    что нашим главным заданием является цель стать лучшими на рынке логистики.  
                </p>
                <p class="h6 text-left py-2">
                    С момента основания мы не стоим на месте и постоянно покоряем новые профессиональные 
                    вершины, постоянно расширяем базу партнеров и заслуживаем доверие ведущих компаний 
                    Украины и зарубежья. С тех пор мы стали гораздо более опытными, наладили дружеские 
                    и теплые отношения с нашими партнерами и перевезли уже более ста тысяч тонн грузов. 
                    Каждый день мы стремимся сделать наш сервис чуточку лучше.   
                </p>
                <p class="h6 text-left py-2">
                    За время своей практической деятельности мы убедились в том, что мы в состоянии 
                    осуществить перевозки любой степени сложности на высшем уровне, и самое главное – наши 
                    заказчики успели в этом убедиться. Inter Smart Group – это Smart перевозки нового поколения.    
                </p>
            </v-container>
        </div>
        <!--contacts section-->
        <div class="contacts">
            <v-container class="py-3">
                <p class="text-xs-center title">Контактная информация</p>
                <v-layout class="py-3" wrap>
                    <v-flex xs12 sm4>
                        <div class="py-2 social-link">
                            <img src="/icons/map.svg" class="social-icons" alt="icon">
                            <span>г. Киев, ул. И.Павла II 4/6, корпус А</span>
                        </div>
                        <div class="py-2">
                            <a 
                                href="mailto:pavliukny@gmail.com" 
                                class="social-link"
                            >
                                <img src="/icons/email.svg" class="social-icons" alt="icon">
                                <span>intersmartgroup@ukr.net</span>
                            </a>
                        </div>    
                    </v-flex>
                    <v-flex sm4 xs12>
                        <div class="py-2">
                            <a 
                                href="tel:+380934581710" 
                                class="social-link"
                            >
                                <img src="/icons/phone.svg" class="social-icons" alt="icon">
                                <span>+38 (093) 458-17-10</span>
                            </a>
                        </div>
                        <div class="py-2">
                            <a
                                class="social-link" 
                                href="tel:+380967998446" 
                            >
                                <img src="/icons/phone.svg" class="social-icons" alt="icon">
                                <span>+38 (096) 799-84-46</span>
                            </a>
                        </div>
                    </v-flex>
                    <v-flex class="text-left" sm4 xs12>
                        <div class="py-2">
                            <a 
                                href="https://t.me/joinchat/FnocjBUIuyayt5cW9el-dg" 
                                class="social-link"
                            >
                                <img 
                                    src="/icons/telegram.svg" 
                                    class="social-icons"
                                    alt="social"
                                >
                                <span>Найдите нас в Telegram</span>
                            </a>
                        </div>
                        <div class="py-2">
                            <a 
                                href="https://invite.viber.com/?g2=AQAMOCr8%2BoEL%2F0lgvGiqYaVTptq9e8NL%2BZE4eh%2B9u4KZF5S6t3qUOfSu9cU8se92"
                                class="social-link"
                            >
                                <img 
                                    src="/icons/viber.svg" 
                                    class="social-icons"
                                    alt="social"
                                >
                                <span>Найдите нас в Viber</span>
                            </a>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout class="py-4" row justify-center>
                    <v-btn style="backgroundColor: #E10A0C" @click="openModal">
                        Оформить звонок
                    </v-btn>
                </v-layout>
            </v-container>
        </div>
        <!--map section-->
        <no-ssr>
            <div @wheel="zoom">
                <l-map  
                    class="mini-map" 
                    :zoom=6 
                    :center="position" 
                    :options="options" 
                    refs="map"
                    style="height: 35vh;"
                >
                    <v-alert 
                        :value="isScrollable"
                        type="info"
                        class="map-alert text-center"
                    >
                        Нажмите CTRL, чтобы имзенить масштаб карты
                    </v-alert>
                    
                    <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                    <l-marker :lat-lng="position" :draggable="draggable">
                        <l-popup :content="popupContent"></l-popup>
                    </l-marker>
                </l-map>
            </div>
        </no-ssr>
        <v-footer>
            <v-spacer></v-spacer>
            <span class="mr-2">
              Все права защищены &copy; {{ new Date().getFullYear() }}
            </span>
        </v-footer>
    </div>
</template>

<script>
import transition from '~/mixins/transition';
import { mapState, mapMutations } from 'vuex';

export default {
  mixins: [transition],
  methods: {
    ...mapMutations(['openModal']),
    goToCard(id){
        this.$store.commit('setCurrentTab', id)
        this.$router.push({
            path: '/transport'
        })
    },
    zoom (event) {
        event.stopPropagation();
        // up
        if (event.ctrlKey === true && event.deltaY < 0) {
            event.preventDefault();
            const zoomInBtn = document.getElementsByClassName('leaflet-control-zoom-in')[0];
            zoomInBtn.click();
        } else if (event.ctrlKey === true && event.deltaY > 0) {
            event.preventDefault();
            const zoomOutBtn = document.getElementsByClassName('leaflet-control-zoom-out')[0];
            zoomOutBtn.click();
        } else {
            this.isScrollable = true;
            setTimeout(()=>{
                this.isScrollable = false;
            }, 1000);
        }
    },
},
  data() {
      return {
            position: [50.42032799, 30.52887082],
            draggable: true,
            popupContent: "г. Киев, ул. И.Павла II 4/6, корпус А",
            isScrollable: false,
            options: {
                scrollWheelZoom: false
            }
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
.about {
    background: transparent;
    font-family: 'Montserrat', sans-serif;
}
.social-icons {
    height: 2rem;
    cursor: pointer;
    padding-right: 3px;
}
.contacts {
    background:  linear-gradient(
        rgba(0, 0, 0, 0.4), 
        rgba(0, 0, 0, 0.4)
        ), url("/home/about.jpg");
    background-size: cover;
    color: white;
    font-family: 'Montserrat', sans-serif;
}
.social-link {
    display: flex;
    display: -webkit-box; 
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex; 
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
}
.map-alert {
    position: relative;
    z-index: 999;
    width: 50%;
    top: 5%;
    left: 0;
    border-radius: 2px;
}
.swiper-container{
    mask-image: linear-gradient(to right, 
    rgba(0,0,0,0.01) 0%, 
    rgba(0,0,0,1) 3%, 
    rgba(0,0,0,1) 97%, 
    rgba(0,0,0,0.01) 100%);
}

</style>
