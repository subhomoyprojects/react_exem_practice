import { useParams } from "react-router-dom";

import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Instance from "../../Redux/Helper";
import { format } from "date-fns";

export default function BlogDetails() {
  const getUrl = useParams();
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    Instance.get(`/allBlog`).then((res) => setApiData(res.data.data));
  }, []);
  return (
    <main>
      <Container>
        {Array.isArray(apiData) &&
          apiData.map((item) => {
            return getUrl.id === item._id ? (
              <Card key={item._id}>
                <CardMedia sx={{ height: 500 }} image={`data:${item.photo.contentType};base64,${item.photo.data}`} title="" />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    {item.title} <small style={{ display: "block", color: "#555", fontSize: "14px" }}>Date: {format(new Date(item.createdAt), "yyyy/MM/dd")}</small>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: item.postText }}></Typography>
                </CardContent>
              </Card>
            ) : null;
          })}
      </Container>
    </main>
  );
}
