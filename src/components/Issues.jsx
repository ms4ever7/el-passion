import React, { Component } from 'react';

import Issue from './Issue';

const ISSUES_LIST = [
  {
    date: '19-07-2016',
    issues: [
      { id: 1, title: 'Page changes', starred: true },
      { id: 2, title: 'Review of last issues', starred: true }
    ]
  },
  {
    date: '18-07-2016',
    issues: [
      { id: 1, title: 'Visual UI Update Review', starred: false },
      { id: 2, title: 'Sidebar Changes', starred: false }
    ]
  },
  {
    date: '15-07-2016',
    issues: [
      { id: 1, title: 'Crash Update', starred: false },
      { id: 2, title: 'Page visual ui update preview', starred: true },
      { id: 3, title: 'Sidebar Update', starred: false },
    ]
  },
  {
    date: '14-8-2016',
    issues: [
      { id: 1, title: 'Crash Issue', starred: true },
      { id: 2, title: 'Visual Update & Crash resolve', starred: true },
      { id: 3, title: 'Crash Issue', starred: true },
    ]
  }
]

class Issues extends Component {
  state = {
    issues: [...ISSUES_LIST]
  }

  starIssue = (selectedDate, selectedId) => {
    const { issues } = this.state;
    const appropriateDate = issues.find(({ date }) => date === selectedDate);
    const appropriateIssue = appropriateDate.issues.find(({ id }) => id === selectedId);

    appropriateIssue.starred = !appropriateIssue.starred;

    this.setState({ issues });
  }

  render() {
    const { issues } = this.state;
    return (
      <main className="issues">
        {issues.map((issue, index) => <Issue {...issue} onClick={this.starIssue} key={index} />)}
      </main>
    );
  }
}

export default Issues;