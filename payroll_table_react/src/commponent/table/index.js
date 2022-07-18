import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addValue,
  delValue,
  storeValue
} from '../reducer/tablereducer';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

//* Component
import Button from '../button/index';
import TableHead from './tablehead/index';
import TableBody from './tablebody/index';

//* Style
import StyledTableContainer from './muistyle';

export default function BasicTable() {
  const data = useSelector(storeValue);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleSave = () => {
    dispatch(addValue({
      product: inputValue.product,
      number: inputValue.number,
      price: inputValue.price,
      summ: inputValue.number * inputValue.price,
    }, 
    ))
  };

  const deleteRow = (i) => {
    console.log(i);
    let arr = data.filter((item,index) => 
      index !== i
    )
    dispatch(delValue(arr))
  };

  return (
    <>
      <div>
        <Button
          action={handleSave}
          title={'Ред Количетсво'}
          // style={classes.headbtn}
        />
      </div>
      <div className='root'>
        <StyledTableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead
              data={data}
              setInputValue={setInputValue} 
              handleSave={handleSave}
            />
            <TableBody
              data={data}
              deleteRow={deleteRow}
            />
          </Table>
        </StyledTableContainer>
      </div>
    </>
  );   
}