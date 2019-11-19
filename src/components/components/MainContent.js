import React from 'react';
import ProjectDemo from './ProjectDemo';
import '../../style/App.css';

class MainContent extends React.Component{
    constructor(){
        super();
        this.state = {
            apiUrl : "http://localhost:8081",
            fetchAmountDemoProject : 3,
            startIndexDemoProject : 0,
            loadedProjects : []
        }
    }
    loadProjects(){
        fetch(this.state.apiUrl + "/projects",{
            mode: 'cors',
            headers:{
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Requested-With": "XMLHttpRequest",
                "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
              }
        })
        .then( res => res.json())
        .then(loadedProjects => this.setState({loadedProjects})
        );
    }

    componentDidMount(){
        this.loadProjects();
    }
    renderProjectDemo(){
        return this.state.loadedProjects.map( project =>{
            return <ProjectDemo
                key= {project.name}
                name={project.name}
                description={project.description}
                investedSum={project.investedSum}
           />;
        });
    }

    render(){
        return (
            <div>
                 <div className="projectsOnMainPage"> 
                     {this.renderProjectDemo()}
                 </div>
            </div>
        );
    }
}

export default MainContent;