import React from "react";
import graph1 from '../img/graph (1).png';
import graph2 from '../img/graph (2).png';

function Span() {
//   useEffect(() => {
    const handleScroll = () => {
      const spanTitleElement = document.querySelector(".span_title");
      const position = spanTitleElement.getBoundingClientRect().top;
      if (position <= 900) {
        spanTitleElement.classList.add("show");
      }
    };

    // handleScroll(); // Initial check on component mount

     window.addEventListener("scroll", handleScroll);

   
  // }, []);

  return (
    <div id="span_title" className="span_title">
      <img src={graph1} alt="span" />
      <h2>Hi! There</h2>
      <img src={graph2} alt="span" />
    </div>
  );
}

export default Span;

