<template>
    <div class="smart-wrap">
        <v-container class="smart">
            <p class="smart-header display-2">Логистика Smart это:</p>
            <v-layout class="smart-row" wrap>
                <v-flex 
                    order-xs2 
                    order-sm1
                    xs12
                    sm6    
                >
                    <strong>Скорость</strong>
                    <ul>
                        <li>налаженность бизнес-процессов</li>
                        <li>умная система приоритетовь, ресурсы компании перераспределяются туда, где они больше всего нужны</li>
                        <li>автоматизированный, быстрый и прозрачный документооборот</li>
                    </ul>
                </v-flex>
                <v-flex 
                    class="text-center" 
                    order-xs1 
                    order-sm2
                    xs12
                    sm6     
                >
                  <v-layout align-center justify-center>
                    <img 
                        src="/smart/clock.png" 
                        alt="smart-img"
                        style="height: 150px"    
                    />
                  </v-layout>
                </v-flex>
            </v-layout>
            <v-layout class="smart-row" wrap>
                <v-flex 
                    class="text-center" 
                    xs12
                    sm6 
                >   
                  <v-layout align-center justify-center>
                        <img 
                            src="/smart/gear.png" 
                            alt="smart-img"
                            style="height: 250px"    
                        >
                    </v-layout>
                </v-flex>
                <v-flex 
                    class="text-center" 
                    xs12
                    sm6
                >
                    <strong>Сервис</strong>
                    <ul class="text-left">
                        <li>личный персональный менеджер 24/7</li>
                        <li>полная ответственность за предоставляемые услуги</li>
                        <li>полная обработка грузов
                            <ul>
                                <li>Перевозки</li>
                                <li>Хранение</li>
                                <li>Сортировка</li>
                                <li>Фасовка</li>
                                <li>Стикеровка</li>
                                <li>Доставка "под ключ"</li>
                            </ul>
                        </li>
                    </ul>
                </v-flex>
            </v-layout>
            <v-layout class="smart-row" wrap>
                <v-flex 
                    class="text-left" 
                    order-xs2 
                    order-sm1
                    xs12
                    sm6 
                >
                    <strong>Безопасность</strong> 
                    <ul class="text-left">
                        <li>страхование грузов</li>
                        <li>служба безопасности</li>
                        <li>GPS мониторинг</li>
                        <li>регулярный техосмотр ТС</li>
                    </ul>
                </v-flex>
                <v-flex 
                    class="text-center"
                    order-xs1 
                    order-sm2
                    cols="12"
                    sm="6" 
                >
                  <v-layout align-center justify-center>
                        <img 
                            src="/smart/security.png" 
                            alt="smart-img"
                            style="height: 150px"    
                        >
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import transition from '~/mixins/transition'

export default {
    mixins: [transition]
}
</script>

<style>
.smart-wrap {
    background:  linear-gradient(
        rgba(0, 0, 0, 0.4), 
        rgba(0, 0, 0, 0.4)
        ), url("/smart/background_img.jpg");
    background-size: cover;
    min-height: 100vh;
}
.smart {
    padding-top: 9rem !important;
}
.smart-row {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.smart-row strong {
    padding-left: 24px;
    font-size: 22px;
}
.smart-header {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
@media screen and (max-width: 322px) {
    .smart-header{
        text-align: center;
    }
    .second-row {
       width: 100%;
    }
    .smart-row {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
}
</style>