
import './product.css';
import { addtocart } from '../../Logintoolkit/authSlice';
import { useDispatch } from 'react-redux';
const Product=()=> {

  const dispatch = useDispatch();

    const pro = [
      {
        name: 'Boho Scented Candles',
        image: 'https://m.media-amazon.com/images/I/81z-g9rGkWL._AC_UF894,1000_QL80_.jpg',
        price: "$19.99",
        rating: 4.5,
        id:1
      },
      {
        name: 'Jar Candles',
        image: 'https://www.safetyandhealthmagazine.com/ext/resources/images/fsh-micro/candle.jpg?t=1665498134&width=768',
        price: "$29.99",
        rating: 5,
        id:2
      },
      {
        name: 'BeesWax White Candles',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/PJ/LR/XK/82077063/decorating-candles-with-pressed-leaves.jpg',
        price: "$19.99",
        rating: 4.5,
        id:3
      },
      {
        name: ' scented pillar candle',
        image: 'https://www.ikea.com/in/en/images/products/jaemnmod-scented-pillar-candle-sweet-pea-purple__1096617_pe864474_s5.jpg?f=s',
        price: "$29.99",
        rating: 5,
        id:4
      },{
        name: ' luxury scented candles',
        image: 'https://fleck.co.in/cdn/shop/products/1wick3.jpg?v=1686048651',
        price: "$19.99",
        rating: 4.5,
        id:5
      },
      {
        name: 'Oil Candles',
        image: 'https://fragranceinnovation.com.au/wp-content/uploads/2021/08/FIA_Day_2_183-1.jpg',
        price: "$29.99",
        rating: 5,
        id:6
      },{
        name: ' Sustainable Candles',
        image: 'https://static1.squarespace.com/static/547a3834e4b053a861c4874e/t/63a09afad66efb089187aa4d/1671477743469/Sustainably+Chic+%7C+Sustainable+Fashion+%26+Lfiestyle+Blog+%7C+Bests+Eco+Friendly+Non+Toxic+Sustainable+Candles.jpg?format=1500w',
        price: "$19.99",
        rating: 4.5,
        id:7
      },
      {
        name: ' Roses Scented Candle ',
        image: 'https://beautifultouches.com/wp-content/uploads/2023/09/Pink-candles-and-flowers.jpg',
        price: "$29.99",
        rating: 5,
        id:8
      },
      {
        name: 'Boho Scented Candles',
        image: 'https://m.media-amazon.com/images/I/81z-g9rGkWL._AC_UF894,1000_QL80_.jpg',
        price: "$19.99",
        rating: 4.5,
        id:1
      },
      {
        name: 'Jar Candles',
        image: 'https://www.safetyandhealthmagazine.com/ext/resources/images/fsh-micro/candle.jpg?t=1665498134&width=768',
        price: "$29.99",
        rating: 5,
        id:2
      },
      {
        name: 'BeesWax White Candles',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/PJ/LR/XK/82077063/decorating-candles-with-pressed-leaves.jpg',
        price: "$19.99",
        rating: 4.5,
        id:3
      },
      {
        name: ' scented pillar candle',
        image: 'https://www.ikea.com/in/en/images/products/jaemnmod-scented-pillar-candle-sweet-pea-purple__1096617_pe864474_s5.jpg?f=s',
        price: "$29.99",
        rating: 5,
        id:4
      },{
        name: ' luxury scented candles',
        image: 'https://fleck.co.in/cdn/shop/products/1wick3.jpg?v=1686048651',
        price: "$19.99",
        rating: 4.5,
        id:5
      }
      
    ];

    const add = (arg)=>{
      dispatch(addtocart(arg))
    }
      return (
        <>
        <section id="cardouter">
          {pro.map(e=>{
            return <div key={e.id}>
                 <div class="product-card">
          <div class="product-image">
              <img src={e.image} alt="Product Image"/>
          </div>
          <div class="product-details">
              <div class="product-name">{e.name}</div>
              <div class="product-price">{e.price}</div>
              
          </div>
          <center id='a'><button onClick={()=>{add(e)}}> Add to cart </button></center>
      </div> 
            </div>
          })}
          </section>
        </>
      );
    }
    
    export default Product;