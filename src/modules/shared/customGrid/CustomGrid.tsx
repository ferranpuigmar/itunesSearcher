import { TableSearhAlbumResult } from "modules/home/components/albumList/AlbumList";
import Box from "@mui/material/Box";
import AlbumCard from "modules/home/components/albumCard/AlbumCard";
import { styled, Theme } from "@mui/material";
import Spinner from "../spinner/Spinner";

type CustomGridProps = {
  data: TableSearhAlbumResult[];
  loading: boolean;
};

const CustomGrid = ({ data, loading }: CustomGridProps) => {
  return (
    <WrapperGrid>
      {loading && <Spinner />}
      <Box display="grid" sx={customGridStyles}>
        {
          data.map(item => {
            return <AlbumCard key={item.id} data={item} />
          })
        }
      </Box>
    </WrapperGrid>
  );
};

const customGridStyles = (theme: Theme) => ({
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 3,
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 4
  }
})

const WrapperGrid = styled('div')(() => ({
  position: 'relative'
}));

export default CustomGrid;
