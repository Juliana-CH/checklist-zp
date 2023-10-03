import "./cover.css";

export default function Home() {

  return (
    <body className='mainStyle'>

        <header className='headerStyle'>
            <div className='mainImage'>
                <img src='/images/completeZP_black.jpeg' width={'100%'}/>
            </div>
            {/* <h1 className='headerTitle'>Análise Fundamentalista</h1> DEFINIR SE HAVERÁ TÍTULO*/}
        </header>

    
            
        <section>
            <div className='loginContainer'>
                <form action='' method='post'>
                    <div>
                        <label for="username">Nome de Usuário:</label>
                        <input type="text" id="username" name="username" required/>
                    </div>

                    <div>
                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>

                    <div>
                        <input type="submit" value="Entrar"/>
                    </div>
                </form>
                
            </div>

            <div className='infoContainer'>
                <div className='infoText'>
                    <h1 className='infoTitle'>Análise Fundamentalista</h1>
                    <h2 className='infoSubTitle'>Busque as respostas para as perguntas certas 
                e você estará mais seguro para tomar decisões.</h2>
                    <h3 className='infoAdvice'>Preencha somente os campos em amarelo. Bom estudo!</h3>
                </div>
            </div>

        </section>
    </body>

  )}