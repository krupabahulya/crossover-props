import Markdown from "markdown-to-jsx";
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function App() {
  const initialMarkdownFile = "./markdown/README.md";

  const allMarkdownFiles = [
    { filename: "README.md", source: "./markdown/README.md" },
    { filename: "Components1.md", source: "./markdown/Components1.md" },
    { filename: "Components2.md", source: "./markdown/Components2.md" },
  ];
  const [mdcontent, setMdcontent] = useState("");

  // import all md-files at page load
  useEffect(() => {
    import(`${initialMarkdownFile}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setMdcontent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  // handler to select md file
  const selectMd = () => {
    console.log("select the md file");
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
                    <ListGroup.Item action onClick={selectMd} href='#link1'>
                      {allMarkdownFiles[0].filename}
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={selectMd} href='#link2'>
                      {allMarkdownFiles[1].filename}
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={selectMd} href='#link3'>
                      {allMarkdownFiles[2].filename}
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
