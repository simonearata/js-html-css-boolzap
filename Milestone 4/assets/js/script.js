var app = new Vue({
  el: "#app",
  data: {
    user:{
      name: 'Nome utente',
      avatar: '_io'
    },
    activeIndex: 0,
    strDate:'',
    strMessage: '',
    strUser: '',
    now: dayjs().format('DD-MM-YY HH:mm:ss'),
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],
  },

  methods: {
    // funzione per le immagini
    avatarImg(avatar) {
      return `assets/img/avatar${avatar}.jpg`
    },

    // selezioniamo utente attivo
    activeUser(index) {
      console.log('posizione cliccata', index)
      this.activeIndex = index;
    },

    // aggiungo il messaggio alla conversazione
    addMessage(){
      if(this.strMessage.length > 0){
        this.pushMessage(this.strMessage, 'sent');
        this.strMessage = ""

        setTimeout(() =>{
          this.pushMessage('ok', 'received')
        }, 1000)
      }
    },

    // funzione che mi pusha il messaggio all'interno dell'array
    pushMessage(text, status){
      this.contacts[this.activeIndex].messages.push({
        date: this.now,
        text: text,
        status: status
      });
    },

    // cercare utente nell'input
    searchUser(){
      this.contacts.forEach((contact)=>{
        if(contact.name.toLowerCase().includes(this.strUser.toLowerCase())){
          contact.visible = true;
        }else{
          contact.visible = false;
        }
      })
    },

    // funzione per determinare l'ultimo accesso
    ultimoAccesso(index){
      let messaggioUser = this.contacts[index].messages;
      return messaggioUser[messaggioUser.length-1].date
    },

    ultimoMessaggio(index){
      let strUltimo = this.contacts[index].messages;
      return strUltimo[strUltimo.length-1].text
    }

  } 
})

