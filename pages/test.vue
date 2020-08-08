<template>
    <div>
        <h1>Hello</h1>
        <ul>
            <li v-for="character in characters.results" :key="character.id">
                {{character.name}}
            </li>
        </ul>
  
        <div>
            <label>If you can see text appear in the box, it worked!</label>
            <button @click="getMessage()">Get Message</button>
            <div>
                <span v-show="show">{{ messageRxd }}</span>
            </div>
        </div>

            <div>
                <h2>Current Camera</h2>
                <code v-if="device">{{ device.label }}</code>
                <div>
                    <vue-web-cam
                        ref="webcam"
                        :device-id="deviceId"
                        width="100%"
                        @started="onStarted"
                        @stopped="onStopped"
                        @error="onError"
                        @cameras="onCameras"
                        @camera-change="onCameraChange"
                    />
                </div>

                <div>
                    <div>
                        <select v-model="camera">
                            <option>-- Select Device --</option>
                            <option
                                v-for="device in devices"
                                :key="device.deviceId"
                                :value="device.deviceId"
                            >{{ device.label }}</option>
                        </select>
                    </div>
                    <div>
                        <button type="button" @click="onCapture">Capture Photo</button>
                        <button type="button" @click="onStop">Stop Camera</button>
                        <button type="button" @click="onStart">Start Camera</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>Captured Image</h2>
                <div>
                    <img :src="img" />
                </div>
            </div>

        <div>
          <client-only>
            <video-player ref="videoPlayer" :playsinline="true" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)"></video-player>
          </client-only>
        </div>

    </div>
</template>

<script>
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import gql from 'graphql-tag'
import Qs from 'qs'

@Component({
    apollo:{
        characters: gql`
        query getCharacters{
            characters{
                results{
                    id
                    name
                }
            }
        }`
    }    
})
export default class test extends Vue{
  data(){
      return{
        email:'',
        password:'',
        messageRxd: '',
        messageRxd: 'Waiting for you to click the "Get Message" button',
        show: true,
        img: null,
        camera: null,
        deviceId: null,
        devices: [],
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
                      { type: 'video/mp4', src:'http://oss-xzb.oss-cn-beijing.aliyuncs.com/Files/61749a95c3c1b700b4842d8585ff0812.mp4' }
                  ],
          poster: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=40606c56972bd40746c7d4ff4b889e9c/377adab44aed2e73c29074528701a18b87d6fa57.jpg', //你的封面地址
          width: '100%',
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        }
      }
  }

  get device() {
    return this.devices.find(n => n.deviceId === this.deviceId);
  }

  get player() {
    return this.$refs.videoPlayer.player
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

  onCapture() {
    this.img = this.$refs.webcam.capture()
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

  //

  onPlayerPlay(player) {}
  onPlayerPause(player) {}

  getMessage () {
      return new Promise((resolve) => {
        this.socket.emit('getMessage', { id: 'abc123' }, (resp) => {
          this.messageRxd = resp
          resolve()
        })
      })
  }

  mounted () {
      this.socket = this.$nuxtSocket({ channel: '/index', persist: true })
  }
}
</script>