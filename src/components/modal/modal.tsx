import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  name: string; // Example prop
  desc: string;
  image: string;
  link: string;
}

const BasicModal: React.FC<ModalProps> = ({ name, desc, image, link }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLinkOpen = () => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  return (
    <div>
      <Button onClick={handleOpen}>See More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={image} alt="image" className="mb-5" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {desc}
          </Typography>
          <div className="mt-5">
            <Button onClick={handleLinkOpen}>Open</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
