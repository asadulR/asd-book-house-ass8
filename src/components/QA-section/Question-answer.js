import React from 'react';
import { Accordion } from 'react-bootstrap';

const QuestionAnswer = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center pt-5 mb-5'>Question/ Answer </h2>

            <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header> <h6 className='text-primary'>How react works ?</h6> </Accordion.Header>
                <Accordion.Body>
                React is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates.  React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger-scale projects. React can be used on client and server-side as well as with other frameworks.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> <h6 className='text-primary'>Difference between props and state ?</h6> </Accordion.Header>
                <Accordion.Body>
                    Props are the arguments you pass to react components when you declare them. State is the stuff a react component itself keeps track of.
                    Properties (or props) are the things that are passed into the component from the outside, specifically typically from a parent component.
                    State meanwhile represents exactly that, the internal “state” of the component. Since each instance of a component on the page gets an instance of the component class, each one gets it’s own state. (Implementation detail, a pure functional component still gets an instance, but that is managed entirely by React and hooks let you store state on, and manage the state of that instance).
                    Both props and state should be considered immutable, but the source of them is different. An example of how they might be used in a self-validating component:
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> <h6 className='text-primary'>How useState works ?</h6> </Accordion.Header>
                <Accordion.Body>
                Use state hook is a very common hook in react which is used to store and update any variable value on a component level. The reason why we would store the variable value inside the state is so that we can access those values without any sort of DOM manipulation which are not available in React JS.
                useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default QuestionAnswer;