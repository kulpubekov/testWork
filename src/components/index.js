import React, {} from 'react';
import CreateTask from "./create-task";
import TaskList from "./task-list";
import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <Container maxWidth="sm">
      <CreateTask/>
      <TaskList/>
    </Container>

  );
};

export default App;
