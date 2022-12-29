import { Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const WrapperContent = ({ children }: { children: any }) => {
  const key = useLocation();
  if (key.pathname == "/xahoi") {
    key.pathname = "Xã Hội";
  }
  if (key.pathname == "/") {
    key.pathname = "Trang chủ";
  }
  if (key.pathname == "/chinhsachlamviec") {
    key.pathname = "Chính sách làm việc";
  }
  if (key.pathname == "/thegioi") {
    key.pathname = "Thế giới";
  }
  if (key.pathname == "/video") {
    key.pathname = "Video";
  }
  return (
    <Grid xs={12} sx={{ p: 5 }}>
      <Typography variant="h3">{key.pathname}</Typography> <br />
      <Grid container>{children}</Grid>
    </Grid>
  );
};
export default WrapperContent;
