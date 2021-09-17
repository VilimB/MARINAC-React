import BRATOSLAV from "../images/bratoslav.jpg"

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-top section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="single-footer about">
                                <div className="logo">
                                    <a href="index.html"><img src={BRATOSLAV} alt="#" /></a>
                                </div>
                                <p className="text">Marinac je firma koja se bavi dizajniranjem i proizvodnjom fitness opreme. Trenutno je jedan od rastućih brendova na domaćem tržištu.</p>
                                <p className="call">Imate pitanje? Nazovite nas!<span><a href="tel:123456789">+387 63 174 542</a></span></p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer links">
                                <h4>Informacije</h4>
                                <ul>
                                    <li><a href="#">O nama</a></li>
                                    <li><a href="#">Kontaktirajte nas</a></li>
                                    <li><a href="#">Pomoć</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer links">
                                <h4>Korisnički centar</h4>
                                <ul>
                                    <li><a href="#">Načini plaćanja</a></li>
                                    <li><a href="#">Povratak novca</a></li>

                                    <li><a href="#">Dostava</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer social">
                                <h4>Upoznajte nas</h4>
                                <div className="contact">
                                    <ul>
                                        <li>Rudarska b.b.</li>
                                        <li>88000 Mostar, BiH</li>
                                        <li>marko150999@gmail.com</li>
                                        <li>+387 63 174 542</li>
                                    </ul>
                                </div>
                                <ul>
                                    <li><a href="https://www.facebook.com/pages/category/Product-Service/Marinac-fitness-equipment-102360891489329/"><i className="ti-facebook"></i></a></li>
                                    <li><a href="https://www.instagram.com/marinac_fitnessequipment/?hl=en"><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="left">
                                    <p>Copyright © 2020 <a href="http://www.wpthemesgrid.com" target="_blank"></a>  -  All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer