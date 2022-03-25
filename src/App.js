import Markdown from "markdown-to-jsx";
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function App() {
  const initialMarkdownFile = "./markdown/README.md";

  const [selectedTopic, setSelectedTopic] = useState({
    id: "1",
    topic: "README.md",
    sourcefile: "./markdown/README.md",
  });

  const allMarkdownFiles = [
    { id: "1", topic: "README.md", sourcefile: "./markdown/README.md" },
    {
      id: "2",
      topic: "Components1.md",
      sourcefile: "./markdown/Components1.md",
    },
    {
      id: "3",
      topic: "Components2.md",
      sourcefile: "./markdown/Components2.md",
    },
  ];
  const [mdcontent, setMdcontent] = useState("");
  // console.log("initial mdcontent: ", mdcontent);

  // import all md-files at page load
  useEffect(() => {
    import(selectedTopic.sourcefile)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setMdcontent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [selectedTopic]);

  const handleSelectedTopic = (event) => {
    setSelectedTopic(
      allMarkdownFiles.find((file) => file.id === event.target.id)
    );
    console.log("selected topic: ", selectedTopic.topic);
    console.log("selected sourcefile: ", selectedTopic.sourcefile);
    //setMdcontent(require("selectedTopic.sourcefile"));
    // setMdcontent(selectedTopic.sourcefile);
  };

  return (
    <>
      <Container>
        <div className='App'>
          <div className='container-md'>
            <Row>
              <header className='App-header'>
                <h1>React documentation for props</h1>
              </header>
            </Row>

            <Row>
              <Col sm={4}>
                <section className='menu'>
                  <ListGroup as='ol' numbered>
                    <ListGroup.Item
                      id='1'
                      action
                      onClick={handleSelectedTopic}
                      href='#link1'
                    >
                      {allMarkdownFiles[0].topic}
                    </ListGroup.Item>
                    <ListGroup.Item
                      id='2'
                      action
                      onClick={handleSelectedTopic}
                      href='#link2'
                    >
                      {allMarkdownFiles[1].topic}
                    </ListGroup.Item>
                    <ListGroup.Item
                      id='3'
                      action
                      onClick={handleSelectedTopic}
                      href='#link3'
                    >
                      {allMarkdownFiles[2].topic}
                    </ListGroup.Item>
                  </ListGroup>
                </section>
              </Col>

              <Col sm={8}>
                <section className='main'>
                  <Markdown>{mdcontent}</Markdown>
                </section>
              </Col>
            </Row>

            <Row>
              <footer>Footer Content</footer>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
