var app = new Vue({
    el: '#app',
    data: {
        promo: "BOH232",
        lijst: [],
        code: "konijn"
    },
    methods: {
        rndStr(len) {
          let text = ""
          let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      
        for( let i=0; i < len; i++ ) {
                  text += chars.charAt(Math.floor(Math.random() * chars.length))
        }
  
              return text
          }
    },
    mounted () {
        setInterval(() => {
          let promo = this.rndStr(5)
          this.lijst.push(promo)
          this.promo = promo
          console.log(this.lijst)

        for(let i = 0; i < this.lijst.length; i++){
            if(this.code == this.lijst[i]){
                console.log("Code klopt");
                return
            }
            else{
                console.log("je bent skeer");
                return
            }
        }
        }, 10000000000000)
        
    },

    checking () {
        
    }
    
})



