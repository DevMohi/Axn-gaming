import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container py-5">
            <h1 className='display-5 text-center fw-bold py-3'>FAQ</h1>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>What is Context Api?</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>A React app can use the <span className='fw-bold'>React Context API</span> to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. React.createContext() is all you need. It will give you a customer and a provider. Provider is a component that supplies the state to its children, as its name suggests. It will contain the "store" and serve as the parent of all components that may require it. A component that consumes and uses the state is known as a consumer.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Difference between Inline, Blocks and Inline Blocks</h5></Accordion.Header>
                    <Accordion.Body>
                        <p><span className='fw-bold'>Inline</span> elements dont start on a new line and occupy just the width it requires. You cant set the width or height. <br />
                            <span className='fw-bold'>Inline-Block</span> , It's the same as inline element, except it doesnt start on a new line, but you can set the width and height of the values. <br />
                            <span className='fw-bold'>Block</span> The element will start on a new line and occupy the whole width available, also you can set the width and height of a block element.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>What is Semantic Tag?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>A <span className='fw-bold'>Semantic</span> element clearly describes its meaning to both the browser and the developer.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page . Elements such as header, footer and main are all considered semantic because they accurately describe the purpose of the element. </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
};

export default Blogs;