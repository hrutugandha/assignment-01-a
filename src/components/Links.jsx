import React from 'react'
import '../App.css';

 function Links() {

    const links = [{name:'Services',link:'https://www.wizardingworld.com/'},
                    {name:'Projects',link:'https://www.wizardingworld.com'},
                    {name:"About",link:'http://www.wizardingworld.com/'}]; 

    return (
      <div className="container-links">
         {links.map((e) =>{
            return <a key={e.name} href={e.link}>{e.name}</a>
         })}
        </div>
    );
  }


  export default Links;