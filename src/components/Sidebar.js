import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

export default function Sidebar() {
    return (
        <>
            <div className="ui sidebar inverted vertical menu sidebar-menu" id="sidebar">
                <div className="item">
                    <div className="header">General</div>
                    <div className="menu">
                            <div className="item">
                                <i className="icon tachometer alternate"></i>
                               <Link to='/dashboard/overview'>Dashboard</Link>
                            </div>
                        
                    </div>
                </div>
                <div className="item">
                    <div className="header">
                        Administration
                    </div>
                    <div className="menu">
                            <div className="item"><i className="cogs icon"></i>Settings</div>

                            <div className='item'><i className="users icon"></i>Team</div>
                        
                    </div>
                </div>

            
                    <div className="item">
                        <i className=" icon chart line"></i>
                        <Link to={'projects'}>Projects</Link>
                    </div>
     

                    <div className="item">
                        <i className="icon lightbulb"></i>
                        <Link to={'create-project'}>Create New Project</Link>
                    </div>
                <div className="item">
                    <div className="header">Other</div>
                    <div className="menu">
                            <div className="item">
                                <i className="icon envelope"></i>
                                Messages
                            </div>

                            <div className="item">
                                <i className="icon calendar alternate"></i>
                                Calendar
                            </div>
                    </div>
                </div>

                <div className="item">
                    <form action="#">
                        <div className="ui mini action input">
                            <input type="text" placeholder="Search..." />
                            <button className="ui mini icon button">
                                <i className=" search icon"></i>
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </>

    )
}