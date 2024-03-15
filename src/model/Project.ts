class Project {
  id: string;
  name: string;
  img?: string;
  desc: string;
  link: string;
  constructor(
    name: string,
    img: string,
    desc: string,
    id: string,
    link: string
  ) {
    this.name = name;
    this.img = img;
    this.id = id;
    this.desc = desc;
    this.link = link;
  }
}

export default Project;
