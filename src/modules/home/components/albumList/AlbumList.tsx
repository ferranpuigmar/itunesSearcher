import { Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CustomTable from 'modules/shared/customTable/CustomTable';
import Wrapper from 'modules/shared/wrapper/Wrapper'
import { Column } from 'react-table'
import ViewAgendaRoundedIcon from '@mui/icons-material/ViewAgendaRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { useState } from 'react';
import CustomGrid from 'modules/shared/customGrid/CustomGrid';

export type TableSearhAlbumResult = {
  id: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
}

type AlbumListProps = {
  albums: TableSearhAlbumResult[];
  loading: boolean;
}

const columns: Column<TableSearhAlbumResult>[] = [
  {
    Header: 'Artwork',
    accessor: 'artworkUrl100',
    Cell: (row) => {
      return <img height="100%" width="100%" src={row.cell.value} alt={row.cell.value} />
    },
  },
  {
    Header: 'Artist Name',
    accessor: 'artistName',
  },
  {
    Header: 'Album Name',
    accessor: 'collectionName',
  }
]

const AlbumList = ({ albums, loading = false }: AlbumListProps) => {
  const [layoutViewTable, setLayoutViewTable] = useState<boolean>(true)

  return (
    <>
      <GridToolbar >
        <Wrapper styles={GridToolBarWrapper}>
          <ViewTools>
            <Typography variant="body2">Layout Views</Typography>
            <ViewToolsActions>
              <ViewAgendaRoundedIcon onClick={() => setLayoutViewTable(true)} />
              <GridViewRoundedIcon onClick={() => setLayoutViewTable(false)} />
            </ViewToolsActions>
          </ViewTools>
        </Wrapper>
      </GridToolbar>
      {!albums.length && !loading
        ? <NoResults><Typography variant="h5">No results...</Typography></NoResults> :
        <Wrapper styles={ViewsWrapper} >
          {layoutViewTable ? (<CustomTable data={albums} columns={columns} loading={loading} />) : (<CustomGrid data={albums} loading={loading} />)}
        </Wrapper>
      }
    </>
  )
}

const ViewsWrapper = {
  paddingTop: "20px"
}

const GridToolbar = styled(Toolbar)(({ theme }) => ({
  position: 'sticky',
  top: '56px',
  zIndex: 2,
  backgroundColor: theme.palette.grey[200],
  [theme.breakpoints.up('sm')]: {
    minHeight: '56px',
  }
}))

const GridToolBarWrapper = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: '20px',
  paddingBottom: '20px'
}

const ViewTools = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}))

const ViewToolsActions = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  '> *': {
    marginLeft: '10px',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.5
    }
  }
}))

const NoResults = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: '50%',
  transform: 'translateY(-39px)'
}))

export default AlbumList