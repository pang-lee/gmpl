<template>
  <client-only>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader class="font-italic font-weight-bold">Reply</v-subheader>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col cols="5">
          <v-text-field v-model="search" :append-icon="search_icon" color="black" placeholder="Search..." single-line hide-details dense></v-text-field>
        </v-col>
      </v-row>
      <v-data-table class="elevation-5 mt-5" :headers="headers" :items="content" :page.sync="page" :search="search" :items-per-page="itemsPerPage" single-expand :expanded.sync="expanded" :expand-icon="expand" item-key="name" show-expand @page-count="pageCount = $event" hide-default-footer>
        <template v-slot:expanded-item="{ headers }">
          <td :colspan="headers.length">
            <v-card>
              <Chat v-if="visible" :participants="participants" :myself="myself" :messages="messages" :chat-title="chatTitle" :placeholder="placeholder" :colors="colors" :border-style="borderStyle" :hide-close-button="hideCloseButton" :close-button-icon-size="closeButtonIconSize" :submit-icon-size="submitIconSize" :submit-image-icon-size="submitImageIconSize" :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null" :async-mode="asyncMode" :scroll-bottom="scrollBottom" :display-header="true" :send-images="true" :profile-picture-config="profilePictureConfig" :timestamp-config="timestampConfig" @onImageClicked="onImageClicked" @onImageSelected="onImageSelected" @onMessageSubmit="onMessageSubmit" @onType="onType" @onClose="onClose"/>
            </v-card>
          </td>
        </template>
      </v-data-table>
      <v-pagination class="text-center pt-2 mt-3" v-model="page" :length="pageCount" circle :next-icon="last_page" :prev-icon="first_page"></v-pagination>
    </v-container>
  </client-only>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import {Chat} from 'vue-quick-chat'
import 'vue-quick-chat/dist/vue-quick-chat.css'
import * as icon from '@mdi/js'

@Component({
  components: {
        Chat
  }
})
export default class Reply extends Vue{
  data () {
      return {
        search_icon:icon.mdiCommentSearchOutline,
        expand:icon.mdiChevronDown,
        last_page:icon.mdiPageLast,
        first_page:icon.mdiPageFirst,
        search: '',
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        expanded: [],
        headers: [
          { text: 'Dessert (100g serving)', align: 'start', sortable: false, value: 'name'},
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        content: [
          { name: 'Froze Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%'},
          { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%'},
          { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%'},
          { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%'},
          { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%'},
          { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%'},
          { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%'},
          { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%'},
          { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%'},
          { name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%'},
          { name: 'FroYogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%'},
          { name: 'Ice sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%'},
          { name: 'Ecuater', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%'},
          { name: 'Cuppateke', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%'},
          { name: 'currybread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%'},
          { name: 'Jolly bond', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%'},
          { name: 'apple', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%'},
          { name: 'zumbra', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%'},
          { name: 'x-ray', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%'},
          { name: 'tiktok', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%'},
        ],
        visible: true,
            participants: [
                {
                    name: 'Arnaldo',
                    id: 1,
                    profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg'
                },
                {
                    name: 'José',
                    id: 2,
                    profilePicture: 'https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg'
                }
            ],
            myself: {
                name: 'Matheus S.',
                id: 3,
                profilePicture: 'https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg'
            },
            messages: [
                {
                    content: 'received messages',
                    myself: false,
                    participantId: 1,
                    timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
                {
                    content: 'sent messages',
                    myself: true,
                    participantId: 3,
                    timestamp: {year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
                {
                    content: 'other received messages',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                }
            ],
            chatTitle: 'My chat title',
            placeholder: 'send your message',
            colors: {
                header: {
                    bg: '#d30303',
                    text: '#fff'
                },
                message: {
                    myself: {
                        bg: '#fff',
                        text: '#bdb8b8'
                    },
                    others: {
                        bg: '#fb4141',
                        text: '#fff'
                    },
                    messagesDisplay: {
                        bg: '#f7f3f3'
                    }
                },
                submitIcon: '#b91010',
                submitImageIcon: '#b91010',
            },
            borderStyle: {
                topLeft: "10px",
                topRight: "10px",
                bottomLeft: "10px",
                bottomRight: "10px",
            },
            hideCloseButton: false,
            submitIconSize: 25,
            closeButtonIconSize: "20px",
            asyncMode: false,
            toLoad: [
                {
                    content: 'Hey, John Doe! How are you today?',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2011, month: 3, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
                {
                    content: "Hey, Adam! I'm feeling really fine this evening.",
                    myself: true,
                    participantId: 3,
                    timestamp: {year: 2010, month: 0, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
            ],
            scrollBottom: {
                messageSent: true,
                messageReceived: false
            },
            displayHeader:true,
            profilePictureConfig: {
                others: true,
                myself: true,
                styles: {
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%'
                }
            },
            timestampConfig: {   
                format: 'HH:mm',
                relative: false
            }
      }
    }

    onType(event) {
            //here you can set any behavior
        }

        loadMoreMessages(resolve) {
            setTimeout(() => {
                resolve(this.toLoad); //We end the loading state and add the messages
                //Make sure the loaded messages are also added to our local messages copy or they will be lost
                this.messages.unshift(...this.toLoad);
                this.toLoad = [];
            }, 1000);
        }

        onMessageSubmit(message) {
            /*
            * example simulating an upload callback. 
            * It's important to notice that even when your message wasn't send 
            * yet to the server you have to add the message into the array
            */
            this.messages.push(message);
 
            /*
            * you can update message state after the server response
            */
            // timeout simulating the request
            setTimeout(() => {
                message.uploaded = true
            }, 2000)
        }

        onClose() {
            this.visible = false;
        }

        onImageSelected(files, message){
            let src = 'https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg'
            this.messages.push(message);
            /**
             * This timeout simulates a requisition that uploads the image file to the server.
             * It's up to you implement the request and deal with the response in order to
             * update the message status and the message URL
             */
            setTimeout((res) => {
                message.uploaded = true
                message.src = res.src
            }, 3000, {src});
        }

        onImageClicked(message){
            /**
             * This is the callback function that is going to be executed when some image is clicked.
             * You can add your code here to do whatever you need with the image clicked. A common situation is to display the image clicked in full screen.
             */
            console.log('Image clicked', message.src)
        }
}
</script>