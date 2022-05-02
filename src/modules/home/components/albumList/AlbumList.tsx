import { useMemo, useState } from 'react'
import Wrapper from 'modules/shared/wrapper/Wrapper'
import { SearchAlbumResult, SearchResponse } from 'services/searchByTerms'
import { Column, useTable } from 'react-table'

type AlbumListProps = {
  albums: SearchAlbumResult[]
}

const data: SearchAlbumResult[] = [
  {
    wrapperType: "track",
    kind: "song",
    artistId: 909253,
    collectionId: 1469577723,
    trackId: 1469577741,
    artistName: "Jack Johnson",
    collectionName: "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
    trackName: "Upside Down",
    collectionCensoredName: "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
    trackCensoredName: "Upside Down",
    artistViewUrl: "https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl": "https://music.apple.com/us/album/upside-down/1469577723?i=1469577741&uo=4",
    trackViewUrl: "https://music.apple.com/us/album/upside-down/1469577723?i=1469577741&uo=4",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5e/5b/3d/5e5b3df4-deb5-da78-5d64-fe51d8404d5c/mzaf_13341178261601361485.plus.aac.p.m4a",
    artworkUrl30: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/30x30bb.jpg", artworkUrl60: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/60x60bb.jpg", artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/100x100bb.jpg", collectionPrice: 9.99,
    trackPrice: 1.29,
    releaseDate: "2005-01-01T12:00:00Z",
    collectionExplicitness: "notExplicit",
    trackExplicitness: "notExplicit",
    discCount: 1,
    discNumber: 1,
    trackCount: 14,
    trackNumber: 1,
    trackTimeMillis: 208643,
    country: "USA",
    currency: "USD",
    primaryGenreName: "Rock",
    isStreamable: true
  }
]

type TableSearhAlbumResult = {
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
}

export const albumListResultToDTO = (data: SearchAlbumResult[]): TableSearhAlbumResult[] => {
  const result = data.map(row => ({
    artistName: row.artistName,
    collectionName: row.collectionName,
    artworkUrl100: row.artworkUrl100
  }))

  return result;
}

const AlbumList = ({ albums }: AlbumListProps) => {

  // const [albumList, setAlbumList] = useState<TableSearhAlbumResult[]>(albumListResultToDTO(data));

  const data = useMemo(
    (): TableSearhAlbumResult[] => [
      {
        artistName: "Hello",
        collectionName: "World",
        artworkUrl100: "sadas"
      }
    ],
    []
  );

  const columns: Column<TableSearhAlbumResult>[] = useMemo(
    () => [
      {
        Header: 'Artist Name',
        accessor: 'artistName',
      },
      {
        Header: 'Album Name',
        accessor: 'collectionName',
      },
      {
        Header: 'Artwork',
        accessor: 'artworkUrl100',
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data })





  return (
    <div>
      <Wrapper >
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px red',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </Wrapper>
    </div>
  )
}

export default AlbumList