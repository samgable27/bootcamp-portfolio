import NftCoverImage from "../assets/project-images/NFT/nft-cover.png";
import NftFrontImage from "../assets/project-images/NFT/nft-front.png";
import NftFirstImage from "../assets/project-images/NFT/nft-desktop.png";
import NftSecondImage from "../assets/project-images/NFT/nft-phones-1.jpg";
import NftThirdImage from "../assets/project-images/NFT/nft-phones-2.jpg";

import SummaristCoverImg from "../assets/project-images/summarist/summarist-cover.png";
import SummaristFrontImg from "../assets/project-images/summarist/summarist-front.png";
import SummaristFirstImg from "../assets/project-images/summarist/summarist-desktop.png";
import SummaristSecondImg from "../assets/project-images/summarist/summarist-phones-1.png";
import SummaristThirdImg from "../assets/project-images/summarist/summarist-phones-2.png";

import EcommerceCover from "../assets/project-images/ecommerce/ecommerce-cover.png";
import EcommerceFrontImage from "../assets/project-images/ecommerce/ecommerce-front.png";
import EcommerceFirstImage from "../assets/project-images/ecommerce/ecommerce-desktop.png";
import EcommerceSecondImage from "../assets/project-images/ecommerce/ecommerce-phones-1.jpg";
import EcommerceThirdImage from "../assets/project-images/ecommerce/ecommerce-phones-2.jpg";

const projectsConfig = [
  {
    title: "Ultraverse NFT Marketplace",
    type: "Web App",
    description:
      "Frontend web application offering users an array of NFTs divided into categories like 'Hot Collections', 'New Items', and 'Top Sellers'. The application showcases dynamic routing, displaying relevant data depending on the selected NFT or Author, and sophisticated state logic encapsulated in reusable components managed by Redux Toolkit. The application was crafted using React and JavaScript, demonstrating a commitment to utilizing modern, efficient technologies.",
    liveLink: "https://sam-internship.vercel.app/",
    githubLink: "https://github.com/samgable27/sam-internship",
    coverImage: NftCoverImage,
    topImage: NftFrontImage,
    firstImage: NftFirstImage,
    secondImage: NftSecondImage,
    thirdImage: NftThirdImage,
  },
  {
    title: "Summarist",
    type: "Web App",
    description:
      "A comprehensive full-stack web application, serving as a digital platform for users to explore an extensive collection of self-help books. The platform's salient features include user authentication for login/logout, the facility to subscribe for either monthly or yearly payment plans, and the capacity for users to personalize their libraries by adding books of their choice, with both reading and audiobook options available.",
    liveLink: "https://summaristproject.vercel.app/",
    githubLink: "https://github.com/samgable27/virtualinternshipv2.1/",
    coverImage: SummaristCoverImg,
    topImage: SummaristFrontImg,
    firstImage: SummaristFirstImg,
    secondImage: SummaristSecondImg,
    thirdImage: SummaristThirdImg,
  },
  {
    title: "React Ecommerce",
    type: "Web App",
    description:
      "React-based E-Commerce web application designed for users to peruse a diverse collection of books. The application features dynamic routing, 'Add to Cart' and 'Remove from Cart' functionalities for an intuitive shopping experience. The technology stack incorporated React, JavaScript, and vanilla CSS, reflecting a commitment to create a user-friendly, aesthetically pleasing interface.",
    liveLink: "https://library-react-six.vercel.app/",
    githubLink: "https://github.com/samgable27/library-react/",
    coverImage: EcommerceCover,
    topImage: EcommerceFrontImage,
    firstImage: EcommerceFirstImage,
    secondImage: EcommerceSecondImage,
    thirdImage: EcommerceThirdImage,
  },
];

export default projectsConfig;
