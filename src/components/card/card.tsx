import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Project from "@/model/Project";
import todo from "@/assets/todo.png";

interface ProjectProps {
  project: Project;
}

const MediaCard: React.FC<ProjectProps> = (props) => {
  const project = props.project;

  return (
    <Card sx={{ maxWidth: 345 }} className="m-5">
      <CardMedia sx={{ height: 140 }} image={todo} title={project.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Work</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
