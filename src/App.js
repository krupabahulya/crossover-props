import Markdown from "markdown-to-jsx";
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import README from "./markdown/README.md";
import Components1 from "./markdown/Components1.md";
import Components2 from "./markdown/Components2.md";

function App() {
  const [mdcontent, setMdcontent] = useState("");
  const [selectedTopic, setSelectedTopic] = useState({
    id: "1",
    topic: "README.md",
  });
  const allMarkdownFiles = [
    { id: "1", topic: "README.md" },
    {
      id: "2",
      topic: "Components1.md",
    },
    {
      id: "3",
      topic: "Components2.md",
    },
  ];
  // console.log("initial mdcontent: ", mdcontent);

  useEffect(() => {
    let content;
    if (selectedTopic.topic === "README.md") {
      content = fetch(README);
    } else if (selectedTopic.topic === "Components1.md") {
      content = fetch(Components1);
    } else if (selectedTopic.topic === "Components2.md") {
      content = fetch(Components2);
    }
    content
      .then((res) => res.text())
      .then((data) => setMdcontent(data))
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
