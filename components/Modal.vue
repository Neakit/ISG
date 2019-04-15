<template>
  <v-layout row justify-center>
    <v-dialog 
      v-model="modalDialog" 
      persistent 
      max-width="500px"
    >
      <v-card light>
        <div class="text-xs-right">
          <v-btn 
            flat 
            icon
            @click="closeModal"
          >
              <v-icon>close</v-icon>
            </v-btn>
        </div>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-alert
                :value="success"
                type="success"
              >
                Ваше сообщение доставлено telegram менеджеру
              </v-alert>
              <v-alert
                :value="failed"
                type="warning"
              >
                Заявка не была доставлена. Пожалуйста, перезвоните по номеру телефона и объясните свою задачу
              </v-alert>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="number"
                v-model.number="form.number"
                @keyup="setNumber($event)"
                label="Номер Вашего телефона:"
                placeholder="Чтобы мы с Вами связались"
                :rules="numberRules"
                required
                :disabled="isDisabled"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
                <v-textarea
                color="#E10A0C"
                v-model="form.request"
                label="Ваш запрос:"
                placeholder="В свободной форме"
                :disabled="isDisabled"
              ></v-textarea>
              <small>Что везти, куда и откуда</small>
            </v-flex>
            <v-flex xs12 d-flex class="justify-space-between">
            <v-btn 
              color="white" 
              style="backgroundColor: #E10A0C"
              flat 
              @click="sendMessage"
            >
              Отправить
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn 
              color="white" 
              style="backgroundColor: #E10A0C"
              flat 
              @click="resetMessage"
            >
              Сбросить
            </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

  export default {
    data(){
      return {
        success: false,
        form: {
          number: '',
          request: ''
        },
        failed: false,
        isDisabled: false,
        numberRules: [
          v => !!v || 'Введите номер Вашего телефона',
        ]
      }
    },
    computed: {
      ...mapState(['modalDialog'])
    },
    methods: {
      ...mapMutations(['closeModal']),
      setNumber(e){
        if(e.keyCode == 190 || e.keyCode == 188) {
          let fixed = this.form.number.replace(e.key, '')
          this.form.number = fixed 
        }
      },
      resetMessage() {
        this.form = {
          number: '',
          request: ''
        }
      },
       async sendMessage(evt){
            evt.preventDefault();
            const token = '758656160:AAFOgfAykvEzP5VmjF_vleas8mnn1GrmyL0';
            const url = `https://api.telegram.org/bot${token}/sendMessage?`
            const postData = {
                chat_id: -322156299,
                text: `Номер: ${this.form.number}. \n Запрос: ${this.form.request}`,
            }
            this.$nuxt.$loading.start()
            try {
                const { ok } = await this.$axios.$post(url, postData)
                if(ok) {
                this.isDisabled = true;
                this.toggleSuccessMsg(true)
                setTimeout(()=> {
                    this.closeModal()
                    this.toggleSuccessMsg(false)
                }, 4000)
            }
            } catch (e) {
                this.isDisabled = true;
                this.toggleFailedMsg(true);
                setTimeout(()=> {
                    this.closeModal()
                    this.toggleFailedMsg(false);
                }, 10000)
            }
            this.$nuxt.$loading.finish()
        },
        toggleSuccessMsg(bool) {
          this.success = bool
        },
        toggleFailedMsg(bool) {
          this.success = bool
        }
    }
  }
</script>

<style>
.modal-header{
    border-bottom: 0;
    padding-bottom: 0 !important;
}
.modal-header button {
    padding-top: 12px !important;
}
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
</style>
