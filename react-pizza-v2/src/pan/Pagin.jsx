import React from 'react'
import ReactPaginate from 'react-paginate';
import style from './pan.module.scss'

function Pagin({onChangePage}) {
  return (
    <ReactPaginate
    className={style.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(e) => onChangePage(e.selected + 1)}
    pageRangeDisplayed={8}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
  )
}

export default Pagin