var app = new Vue({
    el: '#app',
    data: {
        promo: " ",
        lijst: [],
        code: " CODE: ",
        message1: "",
        coupon: false
    },
    methods: {
        rndStr() {
          let text = ""
          let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      
            for( let i=0; i < 5; i++ ) {
                    text += chars.charAt(Math.floor(Math.random() * chars.length))
            }
            this.promo=text,
            this.lijst.push(text)
        
        }
    },
    mounted () {

        for(let i = 0; i < this.lijst.length; i++){
            if(this.code == this.lijst[i]){
                this.coupon = true;
                break;
            }
        }

        if(this.coupon == true){
            console.log('Code klopt')
            this.message1="Coupon klopt"
        }
        else{
            console.log('Coupon is incorrect')
        }
        
        
    }
    
})



