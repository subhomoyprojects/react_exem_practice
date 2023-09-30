import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function BlogItem(props) {
  return (
    <Card style={{ height: "100%" }}>
      <CardMedia sx={{ height: 140 }} image={`data:${props.imageType};base64,${props.image}`} title="" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.title} <small style={{ display: "block", color: "#555", fontSize: "14px" }}>Date: {format(new Date(props.date), "yyyy/MM/dd")}</small>
        </Typography>
        <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: props.content.trim().split(" ").slice(0, 20).join(" ") }}></Typography>
      </CardContent>
      <CardActions>
        <Link to={`/blog/${props.id}`} className="btn btn-primary">
          View More
        </Link>
      </CardActions>
    </Card>
  );
}

BlogItem.propTypes = {
  image: PropTypes.string,
  imageType: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};
