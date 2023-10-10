import React from 'react';
import "./frontpage.css";

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
                    <h1 className='infoTitle'>Checklist para Análise Fundamentalista</h1>
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
                        <h6 className='forgotPassword'><a href=''>Esqueci a senha</a></h6>
                        <h6 className='register'><a href=''>Nova conta</a></h6>
                    </div>

                    <div >
                        <input className='loginBtn' type="submit" value="ENTRAR"/>
                    </div>

                    <div>
                        <div className='orBoarder'></div>
                        <span className='orWord'>ou</span>
                    </div>

                    <div className='signUpWithContainer'>
                        <div className='signUpWithGoogleContainer'>
                            <h6 className='signUpWithGoogle'>acesse com 
                                <div className='logoGoogleContainer'>
                                    <img className='logoGoogle' src='https://88ae784e400c50e563482987bb9e892e.cdn.bubble.io/f1676996378976x761068578122409100/Google__G__Logo.svg'
                                    alt='Logo de acesso via Google'/>
                                </div>
                            </h6>
                        </div>

                        <div className='signUpWithWeb3Container'>
                            <h6 className='signUpWithWeb3'>acesse com 
                                <div className='logoWeb3Container'>
                                    <img className='logoWeb3' src='https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg' alt='Logo de acesso via Web3'/>
                                </div>
                            </h6>
                        </div>
                    </div>

                </form>
            </div>

            <div className="footer">
                <img className="insta" src='/images/instagram.png' alt=''/>
                <img className="twitter" src='/images/twitter.png' alt=''/>
                <img className="linkedin" src='/images/linkedin.png' alt=''/>
                
            </div>

        </section>

        <h6 className="copy">@Copywright Zero Paralelo 2023</h6>
    </body>

  )}