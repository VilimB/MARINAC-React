import {useState} from 'react'
import { Redirect } from 'react-router'
import Axios from 'axios'

const Login = () => {

  const [tab, setTab] = useState(0) //0-login 1-registracija

  const [logUsername, setLogUsername] = useState("")
  const [logPassword, setLogPassword] = useState("")
  const [keepLogin, setKeepLogin] = useState(true);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")
  const [email, setEmail] = useState("")

  const url = 'https://studenti.sum.ba/MARINAC';

  const register = (e) =>{
      e.preventDefault()
      Axios.post(url + "/users/register", {
        username,
        password,
        email
      }).then((response) => {
        console.log(response);
        setUsername('')
        setPassword('')
        setRepassword('')
        setEmail('')
        setTab(0)
      })
      console.log("register complete")
  }

  const login = (e) =>{
    e.preventDefault()
    Axios.post(url + "/users/login", {
      logUsername,
      logPassword,
      keepLogin
    }).then((response) => {
      console.log(response);
      if(response.data.status === "success"){
        console.log(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('wishlist', response.data.wishlist);
        window.location.replace('#/')
        window.location.reload()
      }
    })
}

  return (
    
    <div class="js">
      
      {localStorage.getItem('user') && window.location.pathname === '/login' ? <Redirect to='/' /> : null}

      <div class="row">
        <div class="col-md-6 mx-auto p-0">
          <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <div class="card">
              <div class="login-box">
                <div class="login-snip"> <input id="tab-1" onChange={()=>{setTab(0)}} type="radio" name="tab" class="sign-in" checked={tab === 0} /><label for="tab-1" class="tab">Prijava</label> <input id="tab-2" onChange={()=>{setTab(1)}} type="radio" name="tab" class="sign-up" checked={tab === 1}/><label for="tab-2" class="tab">Registracija</label>
                  <div class="login-space">
                    <div class="login">
                      <div class="group"> <label for="user" class="label">Korisničko ime</label> <input onChange={(e)=>{setLogUsername(e.currentTarget.value)}} value={logUsername}  id="user" type="text" class="input" placeholder="" /> </div>
                      <div class="group"> <label for="pass" class="label">Lozinka</label> <input onChange={(e)=>{setLogPassword(e.currentTarget.value)}} value={logPassword}  id="pass" type="password" class="input" data-type="password" placeholder="" /> </div>
                      <div class="group"> <input id="check" onChange={(e)=>{setKeepLogin(!keepLogin)}} type="checkbox" class="check" checked={keepLogin} /> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                      <div class="group"> <input type="submit" onClick={login} class="button" value="Prijavite se" /> </div>
                      <div class="hr"></div>

                    </div>
                    <div class="sign-up-form">
                      <div class="group"> <label for="user" class="label">Korisničko ime</label> <input onChange={(e)=>{setUsername(e.currentTarget.value)}} value={username} id="user" type="text" class="input" placeholder="" /> </div>
                      <div class="group"> <label for="pass" class="label">Lozinka</label> <input onChange={(e)=>{setPassword(e.currentTarget.value)}} value={password} id="pass" type="password" class="input" data-type="password" placeholder="" /> </div>
                      <div class="group"> <label for="pass" class="label">Ponovite lozinku</label> <input onChange={(e)=>{setRepassword(e.currentTarget.value)}} value={repassword} id="pass" type="password" class="input" data-type="password" placeholder="" /> </div>
                      <div class="group"> <label for="pass" class="label">E-mail</label> <input onChange={(e)=>{setEmail(e.currentTarget.value)}} value={email} id="pass" type="text" class="input" placeholder="" /> </div>
                      <div class="group"> <input type="submit" onClick={register} class="button" value="Registrirajte se" /> </div>
                      <div class="hr"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default Login