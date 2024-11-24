/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/assets/dropdown_icon.png'; 
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {

  const { all_Product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shop-category-IndexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shop-category-products">
        {all_Product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">Explore More</div>
    </div>

  );
};

export default ShopCategory;
