import React from "react";
import image from "../Css/ima.jpg"

class Body extends React.Component{

    render() {
        return(

            // <main>
            //     <section id="chat">
            //         <section id="chat-entradas">
            //             Hola Mundo
            //         </section>
            //         <section id="chat-salidas">
            //             <div className="chat-salidas_input">
            //                 <input id="entrada" type="text"/>
            //                 <button id="boton-enviar">enviar</button>
            //             </div>
            //         </section>
            //     </section>
            // </main>

           <div class="  border border-secondary">
               <body class="container-fluid p-3 mb-2 bg-secondary bg-gradient ">

                   <div class="position-absolute top-50 start-50 translate-middle">
                       <header>
                           <img src="" className="img-thumbnail" alt="" />
                       </header>
                       <textarea ></textarea>
                       <br/>
                       <label ></label>
                       <input type="text" id="Name" name="Name" />
                       <button> enviar </button>

                   </div>
               </body>
           </div>
        )
    }
}

export default Body