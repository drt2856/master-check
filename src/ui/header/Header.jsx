import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {

    const [show, setShow] = useState("")
    function cerrar() {
        setShow(prevState=>{
            if(prevState==="show"){
                return
            }

        })
    }
    
    return(<header id="header" >
        <nav className='navbar navbar-expand-lg navegation'>

            <button className="navbar-toggler" onClick={cerrar} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse navbar-text"+show}  id="navbarSupportedContent">
                <ul className='navbar-nav ms-auto '>
                    <li className='nav-item'>
                        <NavLink className='nav-link' onClick={()=>setShow("show")} to={"/goal"}>Metas</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' onClick={()=>setShow("show")} to={"/task/"}>Tareas</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' onClick={()=>setShow("show")} to={"/habit"}>Habitos</NavLink>
                    </li>
                </ul>

            </div>

        </nav>
    </header>)
}