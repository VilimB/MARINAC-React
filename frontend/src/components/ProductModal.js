import Axios from 'axios'

const ProductModal = (props) => {

    const url = 'https://studenti.sum.ba/MARINAC';

    function addToWishlist() {
        if (localStorage.getItem('wishlist') && JSON.parse(localStorage.getItem('wishlist')).items) {
            var wishlist = JSON.parse(localStorage.getItem('wishlist'));
            if (wishlist.items.filter((i) => i.id === props.id).length === 0) wishlist.items.push(props);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
        else localStorage.setItem('wishlist', JSON.stringify({ items: [props] }));
        if (localStorage.getItem('wishlist') && JSON.parse(localStorage.getItem('wishlist')).items && localStorage.getItem('user')) {
            Axios.put(url + "/users/wishlist", {
                wishlist: localStorage.getItem('wishlist') && JSON.parse(localStorage.getItem('wishlist')).items ? localStorage.getItem('wishlist') : null,
                id: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null,
            }).then((response) => {
                console.log(response);
            })
        }
    }

    return (
        <div className="modal fade" id={props.modal_id ? props.modal_id : "exampleModal"} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true"></span></button>
                    </div>
                    <div className="modal-body">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mfp-image-holder">
                                <img className="mfp-img" style={{ maxWidth: '400px' }} src={props.src ? props.src : "https://via.placeholder.com/550x750"} alt="javascript:;" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="quickview-content">
                                    <h2>{props.name ? props.name : "Product name"}</h2>
                                    <div className="quickview-ratting-review">
                                        <div className="quickview-ratting-wrap">
                                            <div className="quickview-ratting">
                                                {Array.from(Array(props.stars && props.stars <= 5 && props.stars >= 0 ? props.stars : 0).keys()).map((n) => <i className="yellow fa fa-star"></i>)}
                                                {Array.from(Array(props.stars && props.stars <= 5 && props.stars >= 0 ? 5 - props.stars : 5).keys()).map((n) => <i className="fa fa-star"></i>)}
                                            </div>
                                            <a href="javascript:;"> ({props.reviews ? props.reviews : 0} customer reviews)</a>
                                        </div>
                                        <div className="quickview-stock">
                                            <span><i className="fa fa-check-circle-o"></i> in stock</span>
                                        </div>
                                    </div>
                                    <h3>{props.price ? props.price : "$29,00"}</h3>
                                    <div className="quickview-peragraph">
                                        <p>{props.description ? props.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam."}</p>
                                    </div>
                                    <div className="add-to-cart" onClick={addToWishlist}>
                                        <a data-toggle="modal" data-target={props.modal_id ? "#" + props.modal_id : "#exampleModal"} href="javascript:;" className="btn">Add to wishlist <i className="ti-heart"></i></a>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;