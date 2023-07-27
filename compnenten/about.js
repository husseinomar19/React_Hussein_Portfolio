import React, { Component } from "react";
import { FaFileCode } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

class About extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.animation);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animation);
  }

  animation = () => {
    const items = document.querySelectorAll(".about_items");
    items.forEach((item, index) => {
      const pos = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (pos <= windowHeight) {
        // Add animation class after a delay based on the index
        setTimeout(() => {
          item.classList.add("animation");
        }, index * 400); // Adjust the delay (400ms here) based on your preference
      } 
    });
  };

  render() {
    return (
      <div className="about_hussein">
        {/* Project Completed */}
        <div className="about_items">
          <span className="about_icon">
            <FaFileCode id="por_icon" />
          </span>
          <span className="about_tekst">
            <h2 id="project_nummber">200+</h2>
            <p>Projects Completed</p>
          </span>
        </div>
        {/* Years Experiences */}
        <div className="about_items">
          <span className="about_icon">
            <HiUsers id="exp_icon" />
          </span>
          <span className="about_tekst">
            <h2 id="experience">01+</h2>
            <p>Years of Experience</p>
          </span>
        </div>
        {/* Happy Client */}
        <div className="about_items">
          <span className="about_icon">
            <HiUsers id="cli_icon" />
          </span>
          <span className="about_tekst">
            <h2 id="client">80+</h2>
            <p>Happy Clients</p>
          </span>
        </div>
      </div>
    );
  }
}

export default About;
