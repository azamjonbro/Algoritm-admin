<template>
    <div class="page ">
        <div class="page__top">
        <h2>Settings</h2>
        </div>
        <div class="page-bottom">
        
        <div class="form d-flex column j-start gap12">
            <div class="form-group d-flex column" style="gap: 12px;">
                <label for="username">Username</label>
                <input type="text" v-model="newUser.username" placeholder="Yangi username kiriting" id="username">
            </div>
            <div class="form-group d-flex column" style="gap: 12px;">
                <label for="username">Password</label>
                <input type="text" v-model="newUser.password" placeholder="Yangi parolni kiriting" id="username">
            </div>
            <div class="form-group d-flex column" style="gap: 12px;">
                <label for="username">Parolni qaytarish</label>
                <input type="text" v-model="requirePassword" placeholder="Parolingizni qaytadan kiriting" id="username">
                <p class="error-message" v-if="errorText">{{ errorText }}</p>
            </div>
            <button @click="putUser" :disabled="disabledButton" :class="disabledButton?'disabled':''" class="create-button">Yangilash</button>
        </div>
        </div>
    </div>
</template>
<script>
import axios from '@/Utils/axios';

export default {
    name: "SettingsPage",
    data(){
        return{
            disabledButton:true,
            newUser:{
                username:"",
                password:""
            },
            requirePassword:"",
            errorText:false
        }
    },
    watch: {
    'newUser.username': function () {
        this.validateForm();
    },
    'newUser.password': function () {
        this.validateForm();
    },
    requirePassword: function () {
        this.validateForm();
    }
},
    methods:{
        async putUser(){
            if(this.newUser.password!==this.requirePassword){
                this.errorText="Iltimos parolni to'g'ri kiriting"
            }
            if(this.newUser.password.length!==3){
                this.errorText="Parolingiz eng kamida 8 ta bo'lishi kerak"
            }
            if(this.newUser.username<5){
                this.errorText="username eng kamida 5 ta bo'lishi kerak"
            } 

            try {   
            const response = await axios.patch('/user/1', {
            username: this.newUser.username,
            password: this.newUser.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

            console.log("Foydalanuvchi yangilandi:", response.data);
            // Qo‘shimcha xabar yoki redirect qilish mumkin
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
            this.errorText = "Ma'lumotlarni saqlashda xatolik yuz berdi.";
        }
            
        },
        validateForm() {
        if (this.newUser.username && this.newUser.password && this.requirePassword) {
            this.disabledButton = false;
        } else {
            this.disabledButton = true;
        }
    },
        
    }
}
</script>
<style></style>