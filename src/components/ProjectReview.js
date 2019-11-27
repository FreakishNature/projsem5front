import React from 'react';
import '../style/App.css';
import Header from './main/Header';
import qs from 'query-string';

class ProjectReview extends React.Component {
    state = {
        apiUrl : "http://localhost:8081",
        isEditing : false
    }

    componentDidMount(){

        let projectName = qs.parse(this.props.location.search,{ ignoreQueryPrefix: true }).name;
        // console.log(projectName)
        fetch( `${this.state.apiUrl}/projects/${projectName}`, {
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
        .then(loadedProject => this.setState({loadedProject})
        );
    }

    render(){
        console.log(this.state)
        return (
            <div className="projectContent">
                <Header/>
                {this.isEditing ?                 
                    (<input></input>)
                    :
                (<h1>{this.state.loadedProject}</h1>)
                }

                <div>
                    <h1>About this project</h1>
                    <div className="projectDescription">
                        {this.state.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectReview;
