const { createApp } = Vue

createApp({
    data() {
      return {
        mailList : [],
        email : '',
      }
    },
    methods: {
        trovaMail () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (res) => 
            {this.email = res.data.response
            this.mailList.push(this.email)})
        },

        PushMail (){  
            for (let x=0;x<10;x++){
                this.trovaMail()    
            }             
        },
    },
    created() {
        this.PushMail()
    },


}).mount('#app')