<template>
  <v-container fluid>
    <v-subheader class="d-flex justify-center font-italic font-weight-bold">Restream</v-subheader>
    <v-divider></v-divider>
    <div v-if="code" class="d-flex justify-center">
    <v-btn class="mt-4" outlined text x-large href='https://api.restream.io/loginForm?response_type=code&client_id=d5276986-193d-4a4b-8003-2e27eb0dad9a&redirect_uri=http://localhost:3000/admin&state=fj1iro2jro12ijoi1'>
      Live Stream On Restream&nbsp;<v-icon>{{ stream }}</v-icon>
    </v-btn>      
    </div>
    <v-card v-else>
      <v-row>
        <v-col cols="12" xl="6" lg="6">
          <v-list>
            <v-subheader class="d-flex justify-center">Restream UserName:&nbsp;&nbsp;{{ restream.username }}</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="chan in channel" :key="chan.id">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ chan.displayName }} - <a :href="chan.url">{{ chan.url }}</a>
                    <v-list-item-subtitle class="mt-3">Status:&nbsp;&nbsp;{{ chan.enabled == true ? 'active' : 'inactive' }}</v-list-item-subtitle>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="12" xl="6" lg="6">
          <v-btn-toggle mandatory color="red" group class="d-flex justify-center my-4">
            <v-btn text outlined @click="onStart">Open Camera&nbsp;<v-icon>{{ videoup }}</v-icon></v-btn>
            <v-btn text outlined @click="onStop">Close Camera&nbsp;<v-icon>{{ videodown }}</v-icon></v-btn>
          </v-btn-toggle>
          <vue-web-cam ref="webcam" :device-id="deviceId" width="100%" @started="onStarted" @stopped="onStopped" @error="onError" @cameras="onCameras" @camera-change="onCameraChange"/>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import * as icon from '@mdi/js'
import { admin } from '~/store'

@Component
export default class Restream extends Vue{
  data(){
    return{
      stream:icon.mdiVideoBox,
      videoup:icon.mdiVideoOutline,
      videodown:icon.mdiVideoOffOutline,
      restream:{},
      channel:[],
      camera: null,
      deviceId: null,
      devices: []
    }
  }

  get device() {
    return this.devices.find(n => n.deviceId === this.deviceId)
  }

  get code(){
    if(this.$route.fullPath.indexOf('code') == -1) return true
    else{
      admin.get_token(this.$route.fullPath.substring(this.$route.fullPath.indexOf('=') + 1, this.$route.fullPath.indexOf('&')))
      this.restream = admin.restreamProfile
      this.channel = admin.restreamChannel
      return false
    }
  }

 @Watch('camera')
  onCameraChanged(val) {
    this.deviceId = val
  }

  @Watch('devices')
  onDeviceChanged() {
    const first = this.devices[0]
    if (first) {
      this.camera = first.deviceId
      this.deviceId = first.deviceId
    }
  }

  onStarted(stream) {
    console.log('On Started Event', stream)
  }

  onStopped(stream) {
    console.log('On Stopped Event', stream)
  }

  onStop() {
    this.$refs.webcam.stop()
  }

  onStart() {
    console.log(this.$refs.webcam)
    this.$refs.webcam.start()
  }

  onError(error) {
    console.log('On Error Event', error)
  }

  onCameras(cameras) {
    this.devices = cameras
    console.log('On Cameras Event', cameras)
  }

  onCameraChange(deviceId) {
    this.deviceId = deviceId
    this.camera = deviceId
    console.log('On Camera Change Event', deviceId)
  }
}
</script>

