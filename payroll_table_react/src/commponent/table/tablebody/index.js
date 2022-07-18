import React from 'react';
import TableBody from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '../../button/index';

//* Style
import { StyledTableCell } from './styled';

export default function TableBodys(props) {
  return (
    <>
      <TableBody>
        {props.data.map((row,index) => (
          <TableRow
            key={index}
            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          > 
            <StyledTableCell align="center">
              <Button
                index={index}
                action={props.deleteRow}
                title={'Удалить'}
                // style={classes.headbtn}
              />
            </StyledTableCell>
            <StyledTableCell align="center">{row.date}</StyledTableCell>
            <StyledTableCell align="center">{row.product}</StyledTableCell>
            <StyledTableCell align="center">
              <input
                placeholder="Number" 
                id="number" 
                type="number"
                name={'number'}
                disabled={true}
                value={row.number}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <input
                placeholder="Price" 
                id="price" 
                type="number"
                disabled={true}
                value={row.price}
              />
            </StyledTableCell>
            <StyledTableCell align="center">{row.summ}</StyledTableCell>
            <StyledTableCell align="center">
              <button>Редактировать</button>
            </StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}