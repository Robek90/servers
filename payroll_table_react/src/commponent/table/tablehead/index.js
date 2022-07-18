import React, { useEffect, useState } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//* Style
import { StyledTableCell, StyledTableRow } from './styled';

export default function TableHeader(props) {
  const [date, setDate] = useState('');
  const [product, setProduct] = useState('');
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState('');

  useEffect(()=>{
    props.setInputValue({date, product, number, price});
  },[date,product,number,price]);

  return (
    <>
      <TableHead>
        <TableRow>
          <StyledTableCell/>
          <StyledTableCell align="center">
            <p>Дата</p>
            <input
              placeholder="Date" 
              id="date" 
              type="date"
              name={'date'}
              value={date}
              onChange={(e)=>{
                setDate(e.target.value);
              }}
            />
          </StyledTableCell>
          <StyledTableCell align="center">
            <p>Продукты</p>
            <input
              placeholder="Product" 
              id="product" 
              type="text"
              name={'product'}
              value={product}
              onChange={(e)=>{
                setProduct(e.target.value);
              }}
            />
          </StyledTableCell>
          <StyledTableCell align="center">
            <p>Количество шт.</p>
            <input
              placeholder="Number" 
              id="number" 
              type="number"
              name={'number'}
              value={number}
              onChange={(e)=>{
                setNumber(e.target.value);
              }}
            />
          </StyledTableCell>
          <StyledTableCell align="center">
            <p>Цена в рублях</p>
            <input
              placeholder="Price" 
              id="price" 
              type="number"
              name={'price'}
              value={price}
              onChange={(e)=>{
                setPrice(e.target.value);
              }}
            />
          </StyledTableCell>
          <StyledTableCell align="center">
            <p>Cумма:</p>
          </StyledTableCell>
          <StyledTableCell/>
        </TableRow>
      </TableHead>
    </>
  );
}