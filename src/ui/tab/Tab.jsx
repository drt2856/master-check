import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./tab.css";
import { useLocation, useParams } from 'react-router-dom';

const Tabs = ({ tabs }) => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get('tab');

    const intitialTab = () => {
        console.log(tab);
        //cambiar esta condicion para cuando no se encuentre un label de la lista que coincida con el tab de la query
        if(!tab){
            return tabs[0].label
        }else{
            return tab
        }
    }

    const [activeTab, setActiveTab] = useState(intitialTab);


    const handleTabClick = (label) => {
        setActiveTab(label);
    };

    return (
        <div className='min-container'>
            <div className="tab-buttons">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        className={tab.label === activeTab ? 'active' : ''}
                        onClick={() => handleTabClick(tab.label)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <TransitionGroup className="tab-content">
                {tabs.map((tab) => (
                    tab.label === activeTab && (
                        <CSSTransition
                            key={tab.label}
                            timeout={300}
                            classNames="fade"
                        >
                            <div>{tab.component}</div>
                        </CSSTransition>
                    )
                ))}
            </TransitionGroup>
        </div>
    );
};

export default Tabs;
