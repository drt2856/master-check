import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./tab.css";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);

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
