import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Project from "@/model/Project";
import todo from "@/assets/todo.png";
import pokemon from "@/assets/pokemon.png";
import country from "@/assets/country.png";
import BasicModal from "../modal/modal";
import React from "react";

interface ProjectProps {
  project: Project;
}

const MediaCard: React.FC<ProjectProps> = (props) => {
  const project = props.project;

  let selectedImg: string;

  // Conditional statement to determine the image source based on the name
  if (project.img === "todo") {
    selectedImg = todo;
  } else if (project.img === "pokemon") {
    selectedImg = pokemon;
  } else {
    selectedImg = country;
  }

  return (
    <Card sx={{ maxWidth: 345 }} className="m-5">
      <CardMedia
        sx={{ height: 140 }}
        image={selectedImg}
        title={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This application is build using React. The detail description about
          the project can be viewed from the button below.
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">See Work</Button> */}
        <BasicModal
          name={project.name}
          desc={project.desc}
          image={selectedImg}
          link={project.link}
        />
      </CardActions>
    </Card>
  );
};

export default MediaCard;
