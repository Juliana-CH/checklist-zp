import "./cover.css";

export default function Home() {

  return (
    <body className='mainStyle'>

        <header className='headerStyle'>
            <div className='mainImage'>
                <img src='/images/ZPcomplete_white.png' width={'100%'}/>
            </div>
        </header>

    
            
        <section>

            <div className='infoContainer'>
                <div className='infoText'>
                    <h1 className='infoTitle'>Análise Fundamentalista</h1>
                    <h2 className='infoSubTitle'>Busque as respostas para estas perguntas 
                    e você estará mais seguro para tomar decisões.</h2>
                </div>
            </div>

            <div className='loginContainer'>
                <form className='formContainer' action='' method='post'>LOGIN
                    <div className='username'>
                        <label className='usernameTitle' for="username"></label>
                        <input className='usernameField' type="text" id="username" 
                            name="username" placeholder="usuário" required/>
                    </div>

                    <div className='password'>
                        <label className='passwordTitle' for="password"></label>
                        <input className='passwordField' type="password" id="password" 
                            name="password" placeholder="senha" required/>
                    </div>

                    <div className='startAccounts'>
                        <h6 className='forgotPassword'>Esqueci a senha</h6>
                        <h6 className='register'>Nova conta</h6>
                    </div>

                    <div >
                        <input className='loginBtn' type="submit" value="Entrar"/>
                    </div>

                    <div className='signUpOthers'>
                        <h6>Acesse com</h6>

                    </div>
                </form>
                
            </div>

        </section>
    </body>

  )}