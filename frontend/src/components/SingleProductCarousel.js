const SingleProductCarousel = (props) => {
    return (
        <div className="single-product">
            <div className="product-img">
                <a data-toggle="modal" data-target={props.modal_id ? "#" + props.modal_id : "#exampleModal"} href="javascript:;">
                    <img className="default-img" src={props.src ? props.src : "https://via.placeholder.com/550x750"} alt="javascript:;" />
                    <img className="hover-img" src={props.src ? props.src : "https://via.placeholder.com/550x750"} alt="javascript:;" />

                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target={props.modal_id ? "#" + props.modal_id : "#exampleModal"} title="Quick View" href="javascript:;"><i className=" ti-eye"></i><span>Brzi pregled</span></a>

                    </div>
                    <div className="product-action-2">
                        <a data-toggle="modal" data-target={props.modal_id ? "#" + props.modal_id : "#exampleModal"} title="Add to cart" href="javascript:;">Add to wishlist</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a data-toggle="modal" data-target={props.modal_id ? "#" + props.modal_id : "#exampleModal"} href="javascript:;">{props.name ? props.name : "Product name"}</a></h3>
                <div className="product-price">
                    <span>{props.price ? props.price + ' ' + props.currency : "$29,00"}</span>
                </div>
            </div>
        </div>
    );
}

export default SingleProductCarousel;