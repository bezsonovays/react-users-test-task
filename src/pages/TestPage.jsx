import React from 'react';
//components
import PageHeader from '../components/UI/PageHeader/PageHeader';

const TestPage = () => {
  return (
       <div className="users page">
        <div className="container">
          <header className="users__header">
              <PageHeader title="Test Page"/>
          </header>
        </div>
      </div>
   
  )
}

export default TestPage;