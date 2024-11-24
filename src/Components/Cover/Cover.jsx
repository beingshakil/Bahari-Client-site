import './Cover.css';
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png";

function Cover() {
  return (
    <div className='cover'>
      <div className="cover-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>New Collections</p>
          <p>For everyone</p>
        </div>
        <div className="cover-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="cover-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
}

export default Cover;
