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
                <p>I believe that honesty is the only way to send a message.</p>
                <p>
                    I'm studying web development and programming. <br>
                    I'm currently working as a front-end developer. <br>
                    I've thought of ways of getting money for my studies, courses and to help my family. <br>
                </p>
                <p>
                    I'm openly asking you to help me achieve my goals. <br>
                    With the money I'll pay for courses, equipment, food and services and I'll help my family. <br>
                    Feel free to send me a message or request, I'll read and answer it. <br>
                </p>
                <p>
                    I thank you for the time spent reading this. <br>
                    The button goes to Paypal. <br>
                    If you were to send help, do have in mind that I can't offer you a service in exchange. <br>
                    I wouldn't want anyone to feel scammed. <br>
                    Thank you again, best regards.<br>
                </p>
            `
    }
}