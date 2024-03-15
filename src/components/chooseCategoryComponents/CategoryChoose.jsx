import "./category.css";
const CategoryChoose = () => {
  return (
    <div className="choose__main">
      <div className="choose__main-spec1">
        <p>Price</p>
        <select name="" id="">
         <option value="none">By Price</option>
         <option value="none">By Price1</option>
        </select>
      </div>
      <div className="choose__main-spec2">
        <p>Nbr-of-Rooms</p>
        <select name="" id="">
        <option value="none"> By rooms</option>
        </select>
      </div>
      <div className="choose__main-spec3">
        <p>Location</p>
        <select name="" id="">
        <option value="none">By Location</option>

        </select>
      </div>
      <div className="choose__main-btn">
        <button>Search (45) results</button>
      </div>
    </div>
  );
};

export default CategoryChoose;
