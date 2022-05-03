import { CircularProgress, Paper, styled, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { Column, useTable } from 'react-table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

type TableProps<Data extends object> = {
  columns: Column<Data>[]
  data: Data[]
  loading: boolean
}

const CustomTable = <DataType extends object>({ columns, data, loading }: TableProps<DataType>) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data })

  return (
    <WrapperTable>
      {loading && <WrapperSpinner><CircularProgress /></WrapperSpinner>}
      <TableContainer component={Paper} sx={{ minHeight: "80vh" }}>
        <Table {...getTableProps()} aria-label="customized table">
          <TableHead>
            {
              headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <StyledTableCell {...column.getHeaderProps()}>{column.render('Header')}</StyledTableCell>
                  ))}
                </TableRow>)
              )
            }
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <StyledTableRow {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <StyledTableCell component="th" scope="row" {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </StyledTableCell>
                    )
                  })}
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </WrapperTable >
  )
}

const WrapperTable = styled('div')(({ theme }) => ({
  position: 'relative',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    '&:first-child': {
      width: '100px',
      [theme.breakpoints.up('sm')]: {
        width: '100px',
      },
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const WrapperSpinner = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: 'flex',
  alignItems: "center",
  justifyContent: "center"
}))

export default CustomTable;