<template>
    <div>
        <v-form>
            <div class="white" :class="{error: validation.hasError('login')}">
                <v-text-field label="Email *" name="login" :prepend-icon="account" clearable :clear-icon="clear" v-model="login.email"/>
                <div class="red--text font-italic font-weight-bold ml-8">{{ validation.firstError('login.email') }}</div>
                <v-text-field label="Password *" name="password" :prepend-icon="lock" clearable :clear-icon="clear" v-model="login.password" :append-icon="show ? visibility : visibility_off" :type="show ? 'text' : 'password'" @click:append="show = !show" counter/>
                <div class="red--text font-italic font-weight-bold ml-8">{{ validation.firstError('login.password') }}</div>
            </div>
        </v-form>
        <v-card-actions>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-icon color="indigo" v-bind="attrs" v-on="on" @click="facebook_login()">{{facebook}}</v-icon>
            </template>
            <span>Facebook</span>
        </v-tooltip>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-icon class="ml-3" color="red" v-bind="attrs" v-on="on">{{google}}</v-icon>
            </template>
            <span>Google</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-icon class="ml-3" color="light-blue" v-bind="attrs" v-on="on">{{twitter}}</v-icon>
            </template>
            <span>Twitter</span>
        </v-tooltip>
        <v-spacer/>
        <v-btn text x-small :ripple="false" class="mr-4" @click="forget()">Forget?</v-btn>
        <v-btn color="primary" @click="submit">Login</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import { Validator } from 'simple-vue-validator'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Swal from 'sweetalert2'
import { auth } from '~/store'
import * as icon from '@mdi/js'

@Component({
    validators:{
        'login.email'(value){
            return Validator.value(value).required().email()
        },
        'login.password'(value){
            return Validator.value(value).required().minLength(6)
        }
    }
})
export default class Register extends Vue{
    data(){
        return{
            facebook:icon.mdiFacebook,
            account:icon.mdiAccount,
            clear:icon.mdiClose,
            lock:icon.mdiLock,
            visibility:icon.mdiEye,
            visibility_off:icon.mdiEyeOff,
            google:icon.mdiGooglePlus,
            twitter:icon.mdiTwitter,
            login:{
                email:'',
                password:'',    
            },
            show:false,
        }
    }

    submit(){
        this.$validate()
            .then((success) => {
                if(success){
                    auth.authenticate_API(this.login)
                        .then(() => { this.$router.push('/admin/' + auth.token) })
                }else{
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        timer: 2000,
                    })
                }
            })
    }

    async forget(){
        const { value: email } = await Swal.fire({
            type: 'question',
            title: 'Reset Your Password',
            input: 'email',
            inputPlaceholder: 'Enter your email address',
            showCloseButton: true,
        })

        if (email) {
            auth.forget_password({requestType:"PASSWORD_RESET", email:email})
            Swal.fire(`Entered email: ${email}`)
        }
    }
}
</script>

<style scoped>

</style>