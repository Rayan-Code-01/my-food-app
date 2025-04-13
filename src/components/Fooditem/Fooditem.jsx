// import { useContext } from 'react';
// import { assets } from '../../assets/assets';
// import './Fooditem.css';
// import { StoreContext } from '../context/StoreContext';

// const Fooditem = ({ id, name, price, image, description }) => {
//     // const [itemcount, setItemcount] = useState(0);
//     const { cartItems, addTocart, removeFromcart } = useContext(StoreContext);

//     return (
//         <div className='food-item'>
//             <div className="food-item-image-container">
//                 <img src={image} alt="image" className='food-item-image' />
//                 {!cartItems[id] ? (
//                     <img className='add' onClick={() => {
//                         console.log('adding item')

//                         const Fooditem = ({ id, name, price, image, description }) => {
//                             // const [itemcount, setItemcount] = useState(0);
//                             const { cartItems, addTocart, removeFromcart } = useContext(StoreContext);
//                             return (
//                                 <div className='food-item'>
//                                     <div className="food-item-image-container">
//                                         <img src={image} alt="image" className='food-item-image' />
//                                         {!cartItems[id] ? (
//                                             <img className='add' onClick={() => addTocart(id)} src={assets.add_icon_white} />) :
//                                             <div className='food-item-counter'>
//                                                 <img onClick={() => removeFromcart(id)} src={assets.remove_icon_red} alt="" />
//                                                 <p>{cartItems[id]}</p>
//                                                 <img onClick={() => setCartItems(id)} src={assets.add_icon_green} alt="" />
//                                             </div>}
//                                     </div>
//                                     <div className="food-item-info">
//                                         <div className="food-item-name-rating">
//                                             <p>{name}</p>
//                                             <img src={assets.rating_starts} alt="" />
//                                         </div>
//                                         <p className="food-item-desc">{description}</p>
//                                         <p className="food-item-price">RS {price}</p>
//                                     </div>
//                                 </div>
//                             )
//                         }

// export default Fooditem;

//                         // niche ka code sahi hai ise check karne k liye likha tha 

//                         // import { useContext } from 'react';
//                         // import { assets } from '../../assets/assets';
//                         // import './Fooditem.css';
//                         // import { StoreContext } from '../context/StoreContext';

//                         // const Fooditem = ({ id, name, price, image, description }) => {
//                         //     const { cartItems, addTocart, removeFromcart } = useContext(StoreContext);

//                         //     return (
//                         //         <div className='food-item'>
//                         //             <div className="food-item-image-container">
//                         //                 <img src={image} alt="image" className='food-item-image' />
//                         //                 {!cartItems[id] ? (
//                         //                     <img className='add' onClick={() => addTocart(id)} src={assets.add_icon_white} alt="add" />
//                         //                 ) : (
//                         //                     <div className='food-item-counter'>
//                         //                         <img onClick={() => removeFromcart(id)} src={assets.remove_icon_red} alt="remove" />
//                         //                         <p>{cartItems[id]}</p>
//                         //                         <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt="add" />
//                         //                     </div>
//                         //                 )}
//                         //             </div>
//                         //             <div className="food-item-info">
//                         //                 <div className="food-item-name-rating">
//                         //                     <p>{name}</p>
//                         //                     <img src={assets.rating_starts} alt="rating" />
//                         //                 </div>
//                         //                 <p className="food-item-desc">{description}</p>
//                         //                 <p className="food-item-price">RS {price}</p>
//                         //             </div>
//                         //         </div>
//                         //     );
//                         // }

//                         // export default Fooditem;

//                         addTocart(id)
//                     }} src={assets.add_icon_white} />) :
//                     <div className='food-item-counter'>
//                         <img onClick={() => removeFromcart(id)} src={assets.remove_icon_red} alt="" />
//                         <p>{cartItems[id]}</p>
//                         <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt="" />

//                     </div>}
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt="" />
//                 </div>
//                 <p className="food-item-desc">{description}</p>
//                 <p className="food-item-price">RS {price}</p>
//             </div>
//         </div>
//     )
// }

// export default Fooditem

// // niche ka code sahi hai ise check karne k liye likha tha

import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Fooditem.css';
import { StoreContext } from '../context/StoreContext';

const Fooditem = ({ id, name, price, image, description }) => {
    const { cartItems, addTocart, removeFromcart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img src={image} alt="image" className='food-item-image' />
                {!cartItems[id] ? (
                    <img className='add' onClick={() => addTocart(id)} src={assets.add_icon_white} alt="add" />
                ) : (
                    <div className='food-item-counter'>
                        <img onClick={() => removeFromcart(id)} src={assets.remove_icon_red} alt="remove" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt="add" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">RS {price}</p>
            </div>
        </div>
    );
}

export default Fooditem;
