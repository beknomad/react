import React from 'react';

const Login = (props) =>{

    const {email,
         setEmail, 
         password, 
         setPassword, 
         handleLogin, 
         handleSignup, 
         hasAccount, 
         setHasAccount, 
         emailError, 
         passwordError} = props;
    return(
        <section className="login">
            <div className="loginContainer">
                <label>Е-Мэйл</label>
                <input type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Нууц үг</label>
                <input type="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Нэвтрэх</button>
                    <p>
                        Бүртгэл байхгүй ? 
                        <span onClick={() => setHasAccount(!hasAccount)}>Бүртгүүлэх</span>
                    </p>
                    </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Бүртгүүлэх</button>
                        <p> 
                            Хаяг байгаа ? 
                            <span onClick={()=> setHasAccount(!hasAccount)}>Нэвтрэх</span>
                        </p>
                        </>
                      )}
                </div>
            </div>
        </section>
    )
}
export default Login;