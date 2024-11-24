import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-navbox">Description</div>
        <div className="description-box-navbox fade">Reviews(122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          reiciendis, animi assumenda voluptate nihil aliquid inventore corrupti
          magni magnam! Porro et iusto quas? Amet cum atque a error, ut esse!
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
          corporis iusto mollitia sed et exercitationem quod accusamus in,
          quaerat doloremque dolore aut quidem dicta minus natus quas ullam quo
          nobis.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
