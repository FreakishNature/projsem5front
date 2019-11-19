import React from 'react';
import '../../style/App.css';

class ProjectDemo extends React.Component{
    truncateText(text, maxLength) {
        if (text.length > maxLength) {
            text = text.substr(0,maxLength) + '...';
        }
        return text;
    }
    
    render(){
        return (
            <div className='projectDemo'>
                <div className='demoProjectImg'>
                    <img src="../../img/userImg.png" alt="error"/>
                </div>                
                <div className='demoProjectName'>{this.props.name}</div>
                <div className='demoProjectDescription'>{this.truncateText(this.props.description,100)}</div>
                <hr></hr>
                <div className='demoProjectInvestedSum'>Invested : {this.props.investedSum}</div>
            </div>
        );
    }
}

export default ProjectDemo;