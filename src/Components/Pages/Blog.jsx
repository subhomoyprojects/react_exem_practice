import { Autocomplete, Chip, Container, Grid, TextField, Typography } from "@mui/material";
import BlogItem from "./SubComponent/BlogItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogCategoryThunk, blogThunk } from "../../Redux/Slice/BlogSlice";

export default function Blog() {
  const { items, categories } = useSelector((state) => state.Blog);
  console.log(items);
  console.log(categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogThunk());
    dispatch(blogCategoryThunk());
  }, [dispatch]);
  return (
    <main>
      <Container>
        <Typography variant="h4" style={{ marginBottom: "40px" }}>
          Blog
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={9}>
            <Grid container spacing={3}>
              {Array.isArray(items) &&
                items.map((item) => {
                  return (
                    <Grid key={item._id} item sm={6}>
                      <BlogItem id={item._id} title={item.title} content={item.postText} image={item.photo.data} imageType={item.contentType} date={item.createdAt} />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          <Grid item sm={3}>
            <Typography variant="h5" style={{ marginBottom: "20px" }}>
              Category
            </Typography>
            <Autocomplete
              multiple
              options={categories.map((option) => option.category)}
              renderTags={(value, getTagProps) => value.map((option, index) => <Chip key={option._id} variant="outlined" label={option} {...getTagProps({ index })} />)}
              renderInput={(params) => <TextField {...params} variant="outlined" label="Category" placeholder="Blog Category" />}
            />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
