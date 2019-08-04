import React, { Component } from 'react';

import IconGithub from '../assets/icon-github.svg';
import IconOpenIssue from '../assets/icon-open-issue.svg';
import IconClosedIssue from '../assets/icon-closed-issue.svg';

import Tab from './Tab';

class SideBar extends Component {
  state = {
    activeTab: 1
  }

  render() {
    const { activeTab } = this.state;

    return (
      <section className="sidebar">
        <div className='sidebar__top-buttons'>
          <span className='sidebar__top-button sidebar__top-button--red'></span>
          <span className='sidebar__top-button sidebar__top-button--yellow'></span>
          <span className='sidebar__top-button sidebar__top-button--green'></span>
        </div>

        <div className="sidebar__tabs">
          <Tab
            active={activeTab === 1}
            onClick={() => this.setState({ activeTab: 1 })}
            imgSrc={IconGithub}
            issuesCount={12}>
            All
          </Tab>
          <Tab
            active={activeTab === 2}
            onClick={() => this.setState({ activeTab: 2 })}
            imgSrc={IconOpenIssue}
            issuesCount={4}>
            Open
          </Tab>
          <Tab
            active={activeTab === 3}
            onClick={() => this.setState({ activeTab: 3 })}
            imgSrc={IconClosedIssue}
            issuesCount={8}>
            Closed
          </Tab>
        </div>
      </section>
    );
  }
}

export default SideBar;