<template>
    <client-only>
        <v-container>
            <v-row>
                <v-col xl="6" lg="6" md="6" sm="6" cols="12">
                    <v-text-field :prepend-icon="colorize" v-model="cur_first" label="FirstName *" outlined shaped clearable :clear-icon="clear"></v-text-field>
                </v-col>
                <v-col xl="6" lg="6" md="6" sm="6" cols="12">
                    <v-text-field v-model="cur_last" :prepend-icon="edit" label="LastName *" outlined filled shaped clearable :clear-icon="clear"></v-text-field>
                </v-col>
                <v-col xl="6" lg="6" md="6" sm="6" cols="12">
                    <v-radio-group v-model="cur_gender" row :prepend-icon="wc">
                        <v-radio label="Male" value="Male" color="indigo" :off-icon="unchecked" :on-icon="checked"></v-radio>
                        <v-radio label="Female" value="Female" color="error" :off-icon="unchecked" :on-icon="checked"></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col xl="6" lg="6" md="6" sm="6" cols="12">
                    <v-text-field label="Email *" v-model="cur_email" :prepend-icon="email" filled outlined shaped clearable :clear-icon="clear"></v-text-field>
                </v-col>
                <v-col xl="6" lg="6" md="6" sm="6" cols="12">
                    <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="cur_date" label="Date of Birth" :prepend-icon="date" readonly v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="cur_date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col xl="6" lg="6" md="6" sm="6" cols="12">
                    <v-text-field label="Phone" v-model="cur_phone" :prepend-icon="phone" filled outlined shaped clearable :clear-icon="clear"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </client-only>
</template>

<script type="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import { admin } from '~/store'
import * as icon from '@mdi/js'

@Component
export default class Self extends Vue{
    data(){
        return{
            menu:false,
            menu2:false,
            colorize:icon.mdiPencilPlusOutline,
            clear:icon.mdiClose,
            edit:icon.mdiPencilPlus,
            wc:icon.mdiHumanMaleFemale,
            unchecked:icon.mdiCheckboxBlankCircleOutline,
            checked:icon.mdiCheckboxBlankCircle,
            email:icon.mdiEmail,
            lock:icon.mdiLock,
            lock_confirm:icon.mdiLockOutline,
            visibility:icon.mdiEye,
            visibility_off:icon.mdiEyeOff,
            date:icon.mdiCalendarMonth,
            phone:icon.mdiPhone,
        }
    }
    
    get cur_first(){
        return admin.info.first
    }

    set cur_first(value){
        return admin.fill_first(value)
    }

    get cur_last(){
        return admin.info.last
    }

    set cur_last(value){
        return admin.fill_last(value)
    }

    get cur_gender(){
        return admin.info.gender
    }

    set cur_gender(value){
        return admin.fill_gender(value)
    }

    get cur_email(){
        return admin.info.email
    }

    set cur_email(value){
        return admin.fill_email(value)
    }

    get cur_phone(){
        return admin.info.phone
    }

    set cur_phone(value){
        return admin.fill_phone(value)
    }

    get cur_date(){
        return admin.info.birthday
    }

    set cur_date(value){
        return admin.fill_date(value)
    }
}
</script>
