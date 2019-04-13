<template>
    <div class="contacts-wrap"> 
        <v-container class="contacts-page">
            <h2 class="text-center h1" style="color: white">
              Контактная информация
            </h2>
              <v-layout class="py-3" wrap>
                    <v-flex xs12 sm4>
                        <div class="py-2 social-link">
                            <img src="/icons/map.svg" class="social-icons" alt="icon">
                            <span>Украина, г. Киев, ул. Луговая</span>
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
                                <span>+38(096)-799-84-46</span>
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
                    <v-btn style="backgroundColor: #E10A0C">
                        Оформить звонок
                    </v-btn>
                </v-layout>
            <!--map section-->
            <no-ssr>
                <div @wheel="zoom">
                <l-map  
                    class="mini-map" 
                    :zoom=6 
                    :center="position" 
                    :options="options" 
                    refs="map"
                    style="height: 35vh"
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
        </v-container>
    </div> 
</template>

<script>
import transition from '~/mixins/transition'

export default {
    mixins: [transition],
    data(){
        return {
            position: [50.42032799, 30.52887082],
            draggable: true,
            popupContent: "Украина, г. Киев, ул. Луговая 12",
            isScrollable: false,
            options: {
                scrollWheelZoom: false
            }
        }
    },
    methods: {
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
        }
    }
}
</script>

<style >
  .contacts-wrap {
      background:  linear-gradient(
          rgba(78, 129, 173, 0.4), 
          rgba(78, 129, 173, 0.4)
          ), url("/contacts/background_img.jpg");
      background-size: cover;
      min-height: 100vh;
  }
  .contacts-page {
      padding-top: 9rem !important;
      padding-bottom: 1rem !important;
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
  .social-icons {
    height: 2rem;
    cursor: pointer;
    padding-right: 3px;
  }
  .map-alert {
      position: relative;
      z-index: 999;
      width: 50%;
      top: 5%;
      left: 0;
      border-radius: 2px;
  }
</style>
