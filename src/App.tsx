import React from "react";
import { Container, Typography, Box } from "@mui/material";
import TaskContainer from "./components/TaskContainer";

const App: React.FC = () => {
  return (
    <Container>
      <Box marginBottom={2}>
        <Typography variant="h4">ToDo</Typography>
      </Box>
      <TaskContainer />
    </Container>
  );
};

export default App;
