import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
        <Nav />
        <Jumbotron />
        {/* <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              <h1>Render Recipes Here</h1>
            </Col>
            <RecipeList>
              { this.state.recipes.map( recipe => {
                return (
                  <RecipeListItem 
                    key = {recipe.title}
                    title = { recipe.title}
                    href = { recipe.href}
                    ingredient = { recipe.ingredient}
                    thumbnail = { recipe.thumbnail}

                  />

                )
              })}
            </RecipeList>
          </Row>
        </Container> */}
      </div>
  );
}

export default App;
