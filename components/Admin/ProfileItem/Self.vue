<template>
    <client-only>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-text-field prepend-icon="mdi-account-edit-outline" v-model="cur_first" label="FirstName *" outlined shaped clearable></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="cur_last" prepend-icon="mdi-account-edit" label="LastName *" outlined filled shaped clearable></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-radio-group v-model="cur_gender" row prepend-icon="mdi-human-male-female">
                        <v-radio label="Male" value="Male" color="indigo"></v-radio>
                        <v-radio label="Female" value="Female" color="error"></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col cols="6">
                    <v-text-field label="Email *" v-model="cur_email" prepend-icon="mdi-email" hint="For Example: Joe64@mail.com" filled outlined shaped clearable></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="cur_date" label="Date of Birth" prepend-icon="mdi-table-large" readonly v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="cur_date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="6">
                    <v-text-field label="Phone" v-model="cur_phone" prepend-icon="mdi-card-account-phone" filled outlined shaped clearable></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </client-only>
</template>

<script type="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import { admin } from '~/store'

@Component
export default class Self extends Vue{
    data(){
        return{
            menu:false,
            menu2:false
        }
    }
    
    get cur_first(){
        return admin.info[0].first
    }

    set cur_first(value){
        return admin.fill_first(value)
    }

    get cur_last(){
        return admin.info[0].last
    }

    set cur_last(value){
        return admin.fill_last(value)
    }

    get cur_gender(){
        return admin.info[0].gender
    }

    set cur_gender(value){
        return admin.fill_gender(value)
    }

    get cur_email(){
        return admin.info[0].email
    }

    set cur_email(value){
        return admin.fill_email(value)
    }

    get cur_phone(){
        return admin.info[0].phone
    }

    set cur_phone(value){
        return admin.fill_phone(value)
    }

    get cur_date(){
        return admin.info[0].birthday
    }

    set cur_date(value){
        return admin.fill_date(value)
    }
}
</script>
