import { Container, Grid, Typography } from "@mui/material";
import BlogItem from "./SubComponent/BlogItem";
import { useEffect, useState } from "react";
import Instance from "../../Redux/Helper";

export default function Blog() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    Instance.get(`/allBlog`).then((res) => setApiData(res.data.data));
  }, []);

  return (
    <main>
      <Container>
        <Typography variant="h4" style={{ marginBottom: "40px" }}>
          Blog
        </Typography>
        <Grid container spacing={3}>
          {Array.isArray(apiData) &&
            apiData.map((item) => {
              return (
                <Grid key={item._id} item sm={4}>
                  <BlogItem id={item._id} title={item.title} content={item.postText} image={item.photo.data} imageType={item.contentType} date={item.createdAt} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </main>
  );
}
