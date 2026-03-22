import React, { useState } from 'react'
import { FeatureTabsData } from '../../data/featureTabData';
import '../../css/FeatureTabs.css'

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(FeatureTabsData[0]);

  return (
    <div className='feature-container'>
      {/* TOP TABS */}
      <div className='feature-tabs'>
        {FeatureTabsData.map((tab) => (
          <button
            key={tab.id}
            type='button'
            className={`feature-tab ${activeTab.id === tab.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveTab(tab)}
            onClick={() => setActiveTab(tab)}
          >
            <div className='feature-tab-icon'>{tab.icon}</div>
            <p>{tab.title}</p>
          </button>
        ))}
      </div>

      {/* CONTENT BELOW */}
      <div className='feature-content'>
        <h2>{activeTab.title}</h2>
        <p>{activeTab.description}</p>

        <button className='feature-btn'>Apply Now</button>
      </div>
    </div>
  )
}

export default FeatureTabs