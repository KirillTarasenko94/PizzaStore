import React from "react";

type CategoriesProps = {
  valueCategory: number;
  onClickCategory: (i: number) => void,

}

const Categories: React.FC<CategoriesProps>= ({valueCategory, onClickCategory})  => {
  
  const categories = ['Все','Мясные','Вегетарианская','Острые','Гриль','Закрытые']
  return (
    <div className="categories">
      <ul>
         {
          categories.map((categotyId, index) => (
            <li key={index} onClick={()=> onClickCategory(index)} className={valueCategory === index ? 'active' : ';'}>{categotyId}</li>
          ))
         }
      </ul>
    </div>
  );
}

export default Categories;
