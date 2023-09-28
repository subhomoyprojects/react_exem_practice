import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const params = useParams();
  return <div>BlogDetails{params.id}</div>;
}
