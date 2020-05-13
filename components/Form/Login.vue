<template>
    <div>
        <v-form>
            <div class="white" :class="{error: validation.hasError('email')}">
                <v-text-field label="Email" name="login" prepend-icon="mdi-account" type="text" v-model='email'/>
                <div class="red--text .font-italic font-weight-bold ml-8">{{ validation.firstError('email') }}</div>
                <v-text-field label="Password" name="password" prepend-icon="mdi-lock" v-model="password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" @click:append="show = !show" counter/>
                <div class="red--text .font-italic font-weight-bold ml-8">{{ validation.firstError('password') }}</div>
            </div>
        </v-form>
        <v-card-actions>
        <v-spacer />
            <v-btn color="primary" @click="submit">Login</v-btn>
        </v-card-actions>
    </div>
</template>

<script type="ts">
import { Validator } from 'simple-vue-validator';
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
    validators:{
            email(value){
                return Validator.value(value).required().email();
            },
            password(value){
                return Validator.value(value).required().minLength(6);
            }
    }
})
export default class Register extends Vue{
    data(){
            return{
                email:'',
                password:'',
                show:false,
            }
        }

    submit(){
            this.$validate()
            .then((success) => {
              if (success) {
                    alert("success")
                    this.$router.push("/admin")
                }else{

                }
            });
        }
}
</script>

<style scoped>

</style>