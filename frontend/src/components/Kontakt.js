import { useState } from "react";
import Axios from 'axios'

const Kontakt = () => {
	const [fullname, setFullname] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

  const url = 'https://studenti.sum.ba/MARINAC';

	function sendEmail(e){
		e.preventDefault()
    Axios.post(url + "/contact/send", {
      fullname,
      phone,
      email: localStorage.getItem('user') == null ? email : JSON.parse(localStorage.getItem('user')).email,
	  message
    }).then((response) => {
      console.log(response);
    })
	}

  return (
    <div class="js">
      <section id="contact-us" class="contact-us section">
        <div class="container">
          <div class="contact-head">
            <div class="row">
              <div class="col-lg-8 col-12">
                <div class="form-main">
                  <div class="title">
                    <h4>Imate pitanje?</h4>
                    <h3>Napišite nam poruku</h3>
                  </div>
                  <form class="form" method="POST" action="insert.php">
                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>
                            Ime i prezime<span>*</span>
                          </label>
                          <input
                            name="username"
                            type="username"
                            placeholder=""
							value={fullname}
							onChange={(e)=>{setFullname(e.currentTarget.value)}}
                          />
                        </div>
                      </div>

                      {localStorage.getItem("user") == null ? (
                        <div class="col-lg-6 col-12">
                          <div class="form-group">
                            <label>
                              e-mail<span>*</span>
                            </label>
                            <input 
							name="email" 
							type="email" 
							placeholder="" 
							value={email}
							onChange={(e)=>{setEmail(e.currentTarget.value)}}
							/>
                          </div>
                        </div>
                      ) : null}
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>
                            Broj mobitela<span>*</span>
                          </label>
                          <input
                            name="phone"
                            type="phone"
                            placeholder="npr. +387 63 123 456"
							value={phone}
							onChange={(e)=>{setPhone(e.currentTarget.value)}}
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group message">
                          <label>
                            Vaša poruka<span>*</span>
                          </label>
                          <textarea
                            name="message"
                            type="message"
                            placeholder=""
							value={message}
							onChange={(e)=>{setMessage(e.currentTarget.value)}}
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group button">
                          <button type="submit" class="btn " onClick={(e)=>{sendEmail(e)}}>
                            Pošalji
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="single-head">
                  <div class="single-info">
                    <i class="fa fa-phone"></i>
                    <h4 class="title">Pozovite nas</h4>
                    <ul>
                      <li>+387 63 174 542</li>
                      <li>+387 63 077 665</li>
                    </ul>
                  </div>
                  <div class="single-info">
                    <i class="fa fa-envelope-open"></i>
                    <h4 class="title">E-mail:</h4>
                    <ul>
                      <li>
                        <a href="mailto:info@yourwebsite.com">
                          marko150999@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@yourwebsite.com">
                          support@yourwebsite.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="map-section">
        <div id="myMap"></div>
      </div>
    </div>
  );
};
export default Kontakt;
