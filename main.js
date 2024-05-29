'use strict';



// FETCH RESTITUISCE UNA PROMISE DELLA CHIAMATA AL SERVER
// è  una libreria inclusa in javascript
// .then esegue le istruzioni passate, subito dopo la chiamata di fetch
// fetch restituisce una response che poi viene passata alla funzione di then
// utilizzo il doppio then per attendere le promise delle due risposte asincrone
// fetch('https://flynn.boolean.careers/exercises/api/random/mail')
// .then( (myResponse)=>myResponse.json() )
// .then( (data)=>console.log(data.response) ) ;

// faccio la stessa cosa con axios
// che semplifica il processo, ma va incluso nel progetto
// axios
//     .get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((myResponse)=>console.log(myResponse.data.response))
//     // catch serve a catturare le eccezioni della precedente istruzione
//     .catch((error)=>console.log(error));

const {createApp} = Vue;

createApp({
    data(){
        return{
            title: 'Vue email list',
            nCall: 100,
            emails: [],


        };
    },

    created(){
        console.log('Faccia una chiamata api');
        for(let i = 0; i < this.nCall ; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((myResponse)=>{
                this.emails.push(myResponse.data.response);
            });
        }
        
    }
}).mount('#app');