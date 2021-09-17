import { useState } from "react";
import Axios from 'axios'

const WishlistModal = (props) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')).items : []);

    const url = 'https://studenti.sum.ba/MARINAC';

    function removeFromWishlist(id) {
        if (localStorage.getItem('wishlist')) {
            var wishlistJSON = JSON.parse(localStorage.getItem('wishlist'));
            wishlistJSON.items = wishlistJSON.items.filter((i) => i.id !== id);
            localStorage.setItem('wishlist', JSON.stringify(wishlistJSON));
            setWishlist([...(wishlistJSON.items)]);
            if (localStorage.getItem('wishlist') && JSON.parse(localStorage.getItem('wishlist')).items && localStorage.getItem('user')) {
                Axios.put(url + "/users/wishlist", {
                    wishlist: localStorage.getItem('wishlist') && JSON.parse(localStorage.getItem('wishlist')).items ? localStorage.getItem('wishlist') : null,
                    id: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null,
                }).then((response) => {
                    console.log(response);
                })
            }
        }
    }

    return (
        <div className="modal fade" id={"wishModal"} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true"></span></button>
                    </div>
                    <div className="modal-body">
                        {wishlist.length > 0 ? wishlist.map((item) =>
                            <div className="row no-gutters">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mfp-image-holder">
                                    <img className="mfp-img" style={{ maxWidth: '300px' }} src={item.src ? item.src : "https://via.placeholder.com/550x750"} alt="javascript:;" />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="quickview-content">
                                        <h2>{item.name ? item.name : "Product name"}</h2>
                                        <div className="quickview-ratting-review">
                                            <div className="quickview-ratting-wrap">
                                                <div className="quickview-ratting">
                                                    {Array.from(Array(item.stars && item.stars <= 5 && item.stars >= 0 ? item.stars : 0).keys()).map((n) => <i className="yellow fa fa-star"></i>)}
                                                    {Array.from(Array(item.stars && item.stars <= 5 && item.stars >= 0 ? 5 - item.stars : 5).keys()).map((n) => <i className="fa fa-star"></i>)}
                                                </div>
                                                <a href="javascript:;"> ({item.reviews ? item.reviews : 0} customer reviews)</a>
                                            </div>
                                            <div className="quickview-stock">
                                                <span><i className="fa fa-check-circle-o"></i> in stock</span>
                                            </div>
                                        </div>
                                        <h3>{item.price ? item.price : "$29,00"}</h3>
                                        <div className="quickview-peragraph">
                                            <p>{item.description ? item.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam."}</p>
                                        </div>
                                        <div className="add-to-cart" onClick={() => { removeFromWishlist(item.id) }}>
                                            <a href="javascript:;" className="btn">Remove from wishlist <i className="ti-heart"></i></a>
                                        </div>
                                        <div className="default-social">
                                            <h4 className="share-now">Share:</h4>
                                            <ul>
                                                <li><a className="facebook" href="javascript:;"><i className="fa fa-facebook"></i></a></li>
                                                <li><a className="twitter" href="javascript:;"><i className="fa fa-twitter"></i></a></li>
                                                <li><a className="youtube" href="javascript:;"><i className="fa fa-pinterest-p"></i></a></li>
                                                <li><a className="dribbble" href="javascript:;"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                            : <div className="row no-gutters">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="quickview-content">
                                        <h2>Wishlist is empty</h2>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishlistModal;