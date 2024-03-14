class Project {
  id: string;
  name: string;
  img?: string;
  constructor(name: string, img: string, id: string) {
    this.name = name;
    this.img = img;
    this.id = id;
  }
}

export default Project;
