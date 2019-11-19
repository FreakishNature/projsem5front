import React from 'react';
import '../../style/App.css';

class MainLogo extends React.Component{
    render(){
        return (
            <div>
                <img id="MainLogo" src='../../img/header3.jpg'/>
                <div>
                ЭТОТ ТЕКСТ ДОЛЖЕН СПРОВОЦИРОВАТЬ ВАС ПОЛЬЗОВАТЬСЯ НАШЕЙ ПЛАТФОРМОЙ, НО Я НЕ ЗНАЮ ЧТО ЗДЕСЬ ПИСАТЬ
                </div>
                <div>
                    <a href='#signup' id="joinUs">
                        JOIN US
                    </a>
                </div>
            </div>
        );
    }
}

export default MainLogo;