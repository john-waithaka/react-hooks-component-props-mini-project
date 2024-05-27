// import React from "react";

// const defaultImage = "https://via.placeholder.com/215";

//  About = ({ image, about }) => {
//   const aboutImage = image || defaultImage;
//   return (
//     <aside>
//       <img src={aboutImage} alt="blog logo" />
//       <p>{about}</p>
//     </aside>
//   );
// };

// export default About;


//solution
import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;