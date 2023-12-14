import React, { useContext } from "react";
import Sort from "./../Sort";
import Categories from "./../Categories.tsx";
import Pizza from "./../Pizza";
import { SerachContext } from "../../App.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import MyLoader from "./../MyLoader";
import Pagin from "../../pan/Pagin";
import { setCategoryId, setPageCount } from "../../redux/slice/filterSlice";

// import { fetchPizza } from "../../redux/slice/pizzaSlice";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const pageCount = useSelector((state) => state.filterSlice.pageCount);

  const { serch } = useContext(SerachContext);
 const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const onChangeId = (id) => {
    dispatch(setCategoryId(id));
  };

  const onPage = (number) => {
    dispatch(setPageCount(number));
  };

  // const fetchPizz = async () => {
  //   setIsloading(true);
  //   dispatch( fetchPizza({pageCount}));
  // };

 

  React.useEffect(() => {
     axios
    .get(
      `https://63ebd01332a081172392801a.mockapi.io/items?&page=${pageCount}&limit=4`
    )
    .then((res) => {
      setItems(res.data);
      setIsloading(false);
    });
  window.scrollTo(0, 0);
    
  }, [pageCount])
 

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(serch.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj, index) => <Pizza {...obj} key={index} />);
  return (
    <div>
      <div className="content__top">
        <Categories valueCategory={categoryId} onClickCategory={onChangeId} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <MyLoader key={index} />)
          : pizzas}
      </div>
      <Pagin onChangePage={onPage} />
    </div>
  );
}

export default Home;
