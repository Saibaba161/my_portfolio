import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
  deploymentsHeader,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        {/* Deployments Section */}
        
        <h1
            className="deployments-heading-text"
            style={{ color: theme.text }}
        >
            {deploymentsHeader.title}
        </h1>

        <div className="deployments-section">
          <div className="deployments-card">
            <div className="deployments-content">
              
            <div className="bg-img"><img src="taskmaster.jpg" alt=""/></div>
              <h3> TaskMaster </h3>
              <p>Allows the user to manage their tasks by allowing them to set deadlines for their tasks and even edit the info after</p>
              <a href="https://taskmaster-frontend-zeta.vercel.app/login" target="_blank" rel="noopener noreferrer"><button className="view-deployment" title="https://taskmaster-frontend-zeta.vercel.app/login">View Deployment</button></a>
            </div>
          </div>
          <div className="deployments-card">
          <div className="deployments-content">
            <img src="weather.jpg" alt=""/>
              <h3> Weather Application </h3>
              <p>The user can get the Weather information of any location at a given time</p>
              <a href="https://weather-api-ten-beryl.vercel.app/" target="_blank" rel="noopener noreferrer"><button>View Deployment</button></a>
            </div>
          </div>
          <div className="deployments-card">
          <div className="deployments-content">
            <img src="movierulz_clone.jpg" alt="" />
              <h3> Movierulz Clone </h3>
              <p>User can access the information about any movie or TV series. The trending functionality renders what is trending right now</p>
              <a href="https://movierulz-clone-1lbr.vercel.app/" target="_blank" rel="noopener noreferrer"><button>View Deployment</button></a>
            </div>
          </div>
        </div>

        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
