function cambiaIdioma(){
    let switchLanguage = document.getElementById('inputSwitch').checked;
    let infoSpanish = document.getElementById('infoSpanish');
    let infoEnglish = document.getElementById('infoEnglish');
    if(switchLanguage){
        infoEnglish.innerHTML="";
        infoSpanish.innerHTML=
            `
                <p>Hola, mi nombre es Raúl.</p>
                <p>Creo que la honestidad es la única forma de mandar un mensaje.</p>
                <p>
                    Estoy estudiando desarrollo web y programación. <br>
                    Actualmente trabajo como desarrollador Front End. <br>
                    Pensé en formas de conseguir dinero para mis estudios, cursos y ayudar a mi familia. <br>
                </p>
                <p>
                    Te pregunto abiertamente si quieres ayudarme a lograr mis metas. <br>
                    Con el dinero pagaré cursos, equipo, comida, servicios y ayudaré a mi familia. <br>
                    Sientete con la libertad de mandarme un mensaje o solicitarme algo en el envío, yo leeré y responderé. <br>
                </p>
                <p>
                    Te agradezco el tiempo que dedicaste a leer esto. <br>
                    El botón es para ir a Paypal. <br>
                    Si enviarás tu ayuda, ten en mente que no puedo ofrecerte un servicio a cambio. <br>
                    No quisiera que alguien se sintiera estafado. <br>
                    De nuevo te agradezco y te mando un cordial saludo. <br>
                </p>
            `
            
    } else{
        infoSpanish.innerHTML="";
        infoEnglish.innerHTML=
            `
                <p>Hello, my name is Raúl.</p>
                <p>Im from Mexico.</p>
                <p>I believe that honesty is the only way to send a message.</p>
                <p>
                    Im studing web developing and programing. <br>
                    Actually im working in Web Developing Front End. <br>
                    I was trying to find ways to make money for my growth, courses, and to help my family. <br>
                    I just depend on me right now. <br>
                </p>
                <p>
                    I ask openly if you want to help me to grow and get my goals. <br>
                    I will pay courses, equipment, food, services and help for my family with money. <br>
                    Feel free to send a message or request. I will read and reply to them. <br>
                </p>
                <p>
                    Thank you for the time you spend reading this. <br>
                    The buttom is for going to paypal. <br>
                    If you will send your help, have on mind that i can not offer you a service for it. <br>
                    I do not want someone to feel ripped off. <br>
                    Thank you again, and i send you my best regard. <br>
                </p>
            `
    }
}