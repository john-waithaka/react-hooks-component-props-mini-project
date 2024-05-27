// import React from "react";


// const defaultDate = "January 1, 1970";

// const Article = ({ title, date, preview }) => {
//   const aboutDate = date || defaultDate;
//   return (
//     <article>
//       <h3>{title}</h3>
//       <small>{aboutDate}</small>
//       <p>{preview}</p>
//     </article>
//   );
// };

// export default Article;


//solution

import React from "react";

function makeEmojiList(minutes) {
  const interval = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = "";
  for (let i = 0; i < minutes; i += interval) {
    emojis += emoji;
  }

  return emojis;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}


export default Article;