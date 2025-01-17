import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    venue: "",
    date: "",
    start_time: "",
    end_time: "",
    event_description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your submission logic here
  };
  const fieldStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "purple", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "purple", // Border color when focused
      },
    },
  };
  return (
    <div className="w-full px-28 pt-10">
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-4xl font-bold text-black">Create Event</h1>
        <div className="m-4 flex flex-col justify-center items-center gap-4">
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            required
            sx={fieldStyle}
          />

          <TextField
            label="Venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            fullWidth
            required
            sx={fieldStyle}
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            sx={fieldStyle}
          />

          <div className="flex w-full gap-2">
            <TextField
              label="Start-Time"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              className="w-full"
              sx={fieldStyle}
            ></TextField>
            <TextField
              label="End-Time"
              name="end_time"
              value={formData.end_time}
              onChange={handleChange}
              className="w-full"
              sx={fieldStyle}
            ></TextField>
          </div>

          <h1 className="text-2xl font-bold text-black">Event Description</h1>
          <TextField
            label="Description"
            name="event_description"
            fullWidth
            value={formData.event_description}
            onChange={handleChange}
            multiline
            rows={8}
            sx={fieldStyle}
          ></TextField>

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              alignSelf: "center",
              mt: 2,
              backgroundColor: "purple",
              opacity: "0.7",
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
