<template>
  <v-app dark>
    <!-- left navigation drawer -->
    <v-navigation-drawer
      v-model="leftDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          avatar
          v-for="(item, index) in menuItems"
          :key="index"
          @click="goToPage(item, index)"
        >
          <v-list-tile-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action @click.stop="openTransportDrawer" v-if="index === 1">
            <v-btn icon>
              <v-icon color="grey">keyboard_arrow_right</v-icon>
            </v-btn>
          </v-list-tile-action>
            
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <!-- content -->
    <v-content>

      <v-toolbar 
        color="transparent" 
        dense
        flat
        absolute
      >
        <v-toolbar-items class="hidden-sm-and-up">
          <v-btn
            icon
            @click.stop="leftDrawer = !leftDrawer"
          >
            <v-icon>menu</v-icon>
          </v-btn>
        </v-toolbar-items>

        <v-spacer class="hidden-sm-and-up"></v-spacer>
        
        <Logo />
        
        <v-spacer class="hidden-sm-and-down"></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn 
            class="v-btn--menu"
            flat
            v-for="(item, key) in menuItems"
            :key="key"
            :to="item.link"
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <nuxt />
      <Modal/>
    </v-content>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="true"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          avatar
          v-for="(item, index) in cards"
          :key="index"
          @click.native="goToTransport(item.id)"
        >
          <!-- <v-list-tile-avatar>
            <v-icon color="grey">compare_arrows</v-icon>
          </v-list-tile-avatar> -->

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Modal from '@/components/Modal.vue'
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Modal,
    Logo
  },
  computed: {
    ...mapState('menu', [
      'menuItems', 
      'transportItems'
    ]),
    ...mapState('transport', [
      'cards', 
    ])
  },
  methods: {
    goToPage(item){
      this.leftDrawer = false;
      this.$store.commit('setCurrentTab', 'taps')
      this.$router.push({
        path: `${item.link}`
      })
    },
    openTransportDrawer(){
      this.leftDrawer = false;
      this.rightDrawer = true;
    },
    goToTransport(id){
      this.rightDrawer = false;
      this.$store.commit('setCurrentTab', id)
      this.$router.push({
        path: '/transport'
      })
    }
  },
  data() {
    return {
      leftDrawer: false,
      rightDrawer: false,
    }   
  }
}
</script>

<style scoped>
  .v-btn--logo{
    min-width: 0px;
    padding: 0px 8px;
  }
  .v-btn--menu {
    border-radius: 0px;
    -moz-transition: none;
    -webkit-transition: none;
    -o-transition: box-shadow 0 ease-in;
    transition: none;
  }
  .v-btn--menu.v-btn--active {
    -webkit-box-shadow: 0px 3px 0px 0px #E10A0C;
    -moz-box-shadow: 0px 3px 0px 0px #E10A0C;
    box-shadow: 0px 3px 0px 0px #E10A0C;
  }
  .v-btn--logo.v-btn--active {
    border-bottom: none;
  }
  .v-btn--menu.v-btn--active:before {
    background-color: transparent ;
  }
  .v-toolbar {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  @media screen and (max-width: 322px) {
    .v-toolbar {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }
  }
</style>
