import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

interface FormValues {
  taskText: string;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { taskText: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = ({ taskText }) => {
    onAddTask(taskText.trim());
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      gap={2}
      marginBottom={2}
    >
      <TextField
        fullWidth
        label="Новая задача"
        variant="outlined"
        {...register("taskText", { required: "Введите текст задачи" })}
        error={!!errors.taskText}
        helperText={errors.taskText?.message}
      />
      <Button type="submit" variant="contained" color="primary">
        Добавить
      </Button>
    </Box>
  );
};

export default AddTask;
