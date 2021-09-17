import {useEffect, useState} from 'react'
import BRATOSLAV from "../images/bratoslav.jpg"
import BRATOSLAV2 from "../images/bratoslav2.jpg"
import klupa from "../images/klupa.jpg"
import ProductModal from "./ProductModal"
import SingleProduct from './SingleProduct'

const product_list = [
    {
        id: 1,
        name: 'Benč',
        price: 199.99,
        currency: 'KM',
        src: 'https://m.media-amazon.com/images/I/51bRZ5ueqYL._AC_SL1001_.jpg',
        modal_id: 'modal1',
        description: "Benč brate",
        stars: 3,
        reviews: 15,
    },
    {
        id: 2,
        name: 'Mali Benč',
        price: 59.99,
        currency: 'KM',
        src: 'https://sc04.alicdn.com/kf/HTB1MOlzXACy2eVjSZSyq6xukVXah.jpg',
        modal_id: 'modal2',
        description: "Mali Benč brate",
        stars: 4,
        reviews: 15,
    },
    {
        id: 3,
        name: 'Veliki Benč',
        price: 299.99,
        currency: 'KM',
        src: klupa,
        modal_id: 'modal3',
        description: "VelikiBenč brate",
        stars: 5,
        reviews: 15,
    },
    {
        id: 4,
        name: 'Benč',
        price: 199.99,
        currency: 'KM',
        src: 'https://m.media-amazon.com/images/I/51bRZ5ueqYL._AC_SL1001_.jpg',
        modal_id: 'modal4',
        description: "Benč brate",
        stars: 3,
        reviews: 15,
    },
    {
        id: 5,
        name: 'Benč za klošare',
        price: 0.99,
        currency: 'KM',
        src: 'https://64.media.tumblr.com/f90a16b017022ebdbfcb90ff00210bd0/29ab9c9f820c7c54-9e/s400x600/a6ba8150128990d8d7bd848e6c5b6b6fac13de05.jpg',
        modal_id: 'modal5',
        description: "Benč brale",
        stars: 3,
        reviews: 15,
    },
    {
        id: 6,
        name: 'Benč',
        price: 199.99,
        currency: 'KM',
        src: 'https://m.media-amazon.com/images/I/51bRZ5ueqYL._AC_SL1001_.jpg',
        modal_id: 'modal6',
        description: "Benč brate",
        stars: 3,
        reviews: 15,
    },
    {
        id: 7,
        name: 'Benč',
        price: 199.99,
        currency: 'KM',
        src: 'https://m.media-amazon.com/images/I/51bRZ5ueqYL._AC_SL1001_.jpg',
        modal_id: 'modal7',
        description: "Benč brate",
        stars: 3,
        reviews: 15,
    },
    {
        id: 8,
        name: 'Benč',
        price: 199.99,
        currency: 'KM',
        src: 'https://m.media-amazon.com/images/I/51bRZ5ueqYL._AC_SL1001_.jpg',
        modal_id: 'modal8',
        description: "Benč brate",
        stars: 3,
        reviews: 15,
    },
];

const Proizvodi = () => {
    const [perPage, setPerPage] = useState(5);
    const [sortBy, setSortBy] = useState('none');
    const [lastPage, setLastPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProductList, setCurrentProductList] = useState([]);
    const [minInput, setMinInput] = useState('');
    const [maxInput, setMaxInput] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(-1);
    const [priceCheck1, setPriceCheck1] = useState(false);
    const [priceCheck2, setPriceCheck2] = useState(false);
    const [priceCheck3, setPriceCheck3] = useState(false);


    function sortNone(a, b){
        return 0
    }

    function sortName(a, b){
        return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0
    }

    function sortPrice(a, b){
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0
    }

    useEffect(() => {
        setLastPage(parseInt(Math.ceil(parseFloat((product_list.filter((p)=> (p.price >= minPrice) && (maxPrice >= 0 ? p.price <= maxPrice : true))).length / perPage))));
        console.log(perPage)
        console.log(lastPage)
        return () => {
        }
    }, [perPage, setPerPage, priceCheck1, setPriceCheck1, priceCheck2, setPriceCheck2, priceCheck3, setPriceCheck3, currentProductList, minInput, setMinInput, maxInput, setMaxInput, minPrice, setMinPrice, maxPrice, setMaxPrice, setCurrentProductList]);

    useEffect(() => {
        setCurrentPage(1);
        return () => {
            
        }
    }, [lastPage, setLastPage]);

    useEffect(() => {
        setCurrentProductList(((product_list.filter((p)=> (p.price >= minPrice) && (maxPrice >= 0 ? p.price <= maxPrice : true))).sort(sortBy === 'name' ? sortName : sortBy === 'price' ? sortPrice : sortNone).slice((currentPage-1) * perPage, ((currentPage-1) * perPage + perPage < product_list.length ? (currentPage-1) * perPage + perPage : product_list.length))));
        console.log('product list: ');
        console.log(currentProductList);
        return () => {
        }
    }, [sortBy, setSortBy, perPage, setPerPage, currentPage, setCurrentPage, minPrice, setMinPrice, maxPrice, setMaxPrice]);

    useEffect(() => {
        if(minInput==='' || isNaN(minInput) || minInput < 0){ 
            setMinInput('');
            setMinPrice(0); 
        }
        else{
            setMinPrice(parseInt(minInput));
        }
        if(maxInput==='' || isNaN(maxInput) || maxInput < 0){ 
            setMaxInput('');
            setMaxPrice(-1); 
        }
        else{
            setMaxPrice(parseInt(maxInput));
        }
        return () => {
        }
    }, [minInput, setMinInput, maxInput, setMaxInput]);

    useEffect(() => {
        console.log(priceCheck1);
        console.log(priceCheck2);
        console.log(priceCheck3);
        if(priceCheck1){
            setMinPrice(0);
            setMaxPrice(50);
        }
        else if(priceCheck2){
            setMinPrice(50);
            setMaxPrice(100);
        }
        else if(priceCheck3){
            setMinPrice(100);
            setMaxPrice(250);
        }
        else{
            if(minInput==='' || isNaN(minInput) || minInput < 0) setMinPrice(0)
            else{
                setMinPrice(parseInt(minInput));
            }
            if(maxInput==='' || isNaN(maxInput) || maxInput < 0) setMaxPrice(-1)
            else{
                setMaxPrice(parseInt(maxInput));
            }
        }
        return () => {
        }
    }, [priceCheck1, setPriceCheck1, priceCheck2, setPriceCheck2, priceCheck3, setPriceCheck3]);

    function countProducts(min, max){
        return (product_list.filter((p)=> p.price >= min && p.price <= max)).length;
    }

    return (
        <div className="js">
            
            <section className="product-area shop-sidebar shop section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="shop-sidebar">

                                <div className="single-widget range">
                                    <h4>Pregledavanje po cijeni</h4>
                                    <div className="price-filter">
                                        <div className="price-filter-inner">
                                            <div id="slider-range"></div>
                                            <div className="price_slider_amount">
                                                <div className="label-input">
                                                    <span style={{width: '100%', display:'inline-block'}}>Od: <input onChange={(e)=>{setMinInput(e.currentTarget.value); setPriceCheck1(false); setPriceCheck2(false); setPriceCheck3(false);}} value={minInput} style={{width: '100px', border:'1px solid'}} type="text" id="min" name="price" placeholder="min" /></span>
                                                    <span style={{width: '100%', display:'inline-block'}}>Do: <input onChange={(e)=>{setMaxInput(e.currentTarget.value); setPriceCheck1(false); setPriceCheck2(false); setPriceCheck3(false);}} value={maxInput} style={{width: '100px', border:'1px solid'}} type="text" id="max" name="price" placeholder="max" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="check-box-list">
                                        <li>
                                            <label className="checkbox-inline" htmlFor="1"><input name="news" id="1" type="checkbox" checked={priceCheck1} onChange={(e)=>{setPriceCheck2(false); setPriceCheck3(false); setPriceCheck1(!priceCheck1);}} />0 KM - 50 KM<span className="count">({countProducts(0, 50)})</span></label>
                                        </li>
                                        <li>
                                            <label className="checkbox-inline" htmlFor="2"><input name="news" id="2" type="checkbox" checked={priceCheck2} onChange={(e)=>{setPriceCheck1(false); setPriceCheck3(false); setPriceCheck2(!priceCheck2)}} />50 KM - 100 KM<span className="count">({countProducts(50, 100)})</span></label>
                                        </li>
                                        <li>
                                            <label className="checkbox-inline" htmlFor="3"><input name="news" id="3" type="checkbox" checked={priceCheck3} onChange={(e)=>{setPriceCheck1(false); setPriceCheck2(false); setPriceCheck3(!priceCheck3)}} />100 KM - 250 KM<span className="count">({countProducts(100, 250)})</span></label>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="shop-top">
                                        <div className="shop-shorter">
                                            <div className="single-shorter">
                                                <label>Show :</label>
                                                <select value={perPage} onChange={(e)=>{setPerPage(parseInt(e.currentTarget.value))}}>
                                                    <option value="5">5</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                </select>
                                            </div>
                                            <div className="single-shorter">
                                                <label>Sort By :</label>
                                                <select value={sortBy} onChange={(e)=>{setSortBy(e.currentTarget.value)}}>
                                                    <option value="none">None</option>
                                                    <option value="name">Name</option>
                                                    <option value="price">Price</option>
                                                </select>
                                            </div>
                                            <div className="single-shorter">
                                                <label>Page :</label>
                                                <select value={currentPage} onChange={(e)=>{setCurrentPage(parseInt(e.currentTarget.value))}}>
                                                    {[...Array(lastPage).keys()].map((p, key)=>{
                                                        return <option value={'' + (p+1)} key={key}>{p+1}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {currentProductList.map((product, key) => <SingleProduct key={key} {...product} />) }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {product_list.map((product, key) => <ProductModal key={key} {...product} />) }

        </div>
    );
}

export default Proizvodi;