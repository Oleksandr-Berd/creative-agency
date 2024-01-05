import imgProj1 from "../assets/images/mobile/image-slide-1.jpg";
import imgProjTab1 from "../assets/images/tablet/image-slide-1.jpg";
import imgProjDesk1 from "../assets/images/desktop/image-slide-1.jpg";
import imgProj2 from "../assets/images/mobile/image-slide-2.jpg";
import imgProjTab2 from '../assets/images/tablet/image-slide-2.jpg'
import imgProjDesk2 from '../assets/images/desktop/image-slide-2.jpg'
import imgProj3 from "../assets/images/mobile/image-slide-3.jpg";
import imgProjTab3 from '../assets/images/tablet/image-slide-3.jpg'
import imgProjDesk3 from '../assets/images/desktop/image-slide-3.jpg'


export const projects = [
  {
    id: 1,
    image: { mob: imgProj1, tab: imgProjTab1, desk: imgProjDesk1 },
    title: "Lean Product Roadmap",
    date: "2019 Project",
  },
  {
    id: 2,
    image: { mob: imgProj2, tab: imgProjTab2, desk: imgProjDesk2 },

    title: "New Majestic Hotel",
    date: "2018 Project",
  },
  {
    id: 3,
    image: { mob: imgProj3, tab: imgProjTab3, desk: imgProjDesk3 },

    title: "Crypto Dashboard",
    date: "2016 Project",
  },
];
