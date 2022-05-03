import CustomTable from 'modules/shared/customTable/CustomTable';
import Wrapper from 'modules/shared/wrapper/Wrapper'
import { Column } from 'react-table'


export type TableSearhAlbumResult = {
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
  return (
    <div>
      <Wrapper >
        <CustomTable data={albums} columns={columns} loading={loading} />
      </Wrapper>
    </div>
  )
}

export default AlbumList