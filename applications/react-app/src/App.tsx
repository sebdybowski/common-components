import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonComponent, ParagraphComponent, LinkComponent, HeadingComponent, TableComponent } from '@common-components/react';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra at erat et volutpat. Praesent sollicitudin vel nulla sit amet sagittis. Donec rutrum sem sit amet massa sodales mollis. In suscipit auctor ante. Quisque eget interdum felis. Nunc eu consequat tortor. Mauris bibendum purus eu mauris venenatis rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eleifend imperdiet massa, ut ultrices est eleifend nec. Ut in ullamcorper augue. Aenean ultrices ullamcorper dignissim. Nulla commodo molestie tincidunt.';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <h2>Button component</h2>
        <ButtonComponent label='Test Button' onClick={() => alert("Hi, I'm a button alert!")}/>
        <br/>

        <h2>Paragraph component</h2>
        <ParagraphComponent content={LOREM_IPSUM}/>
        <br/>

        <h2>Link component</h2>
        <LinkComponent url="https://www.google.com/" blank label="Link to google.com"/>
        <br/>

        <h2>Heading components</h2>
        <HeadingComponent content="Level 1 Heading"/>
        <HeadingComponent content="Level 2 Heading" level={2}/>
        <HeadingComponent content="Level 3 Heading" level={3}/>
        <HeadingComponent content="Level 4 Heading" level={4}/>
        <HeadingComponent content="Level 5 Heading" level={5}/>
        <HeadingComponent content="Level 6 Heading" level={6}/>
        <br/>

        <h2>Table component</h2>
        <TableComponent
          tableTitle="Test table"
          headers={JSON.stringify(['header1', 'header2'])}
          rows={JSON.stringify([
            ['one', 'two'],
            ['three', 'four'],
          ])}
        />

        <TableComponent
          tableTitle="Test sumarizing table"
          headers={JSON.stringify(['header1', 'header2'])}
          rows={JSON.stringify([
            [1, 5],
            [8, 14],
          ])}
          sum
        />
      </header>
    </div>
  );
}

export default App;
