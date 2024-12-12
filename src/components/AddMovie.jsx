import React, { useState } from "react";
import { Button, Modal, Select, Input, message } from "antd";
const { TextArea } = Input;

const AddMovie = (props) => {
  const [movieData, setMovieData] = useState({
    id: "",
    title: null,
    description: null,
    posterURL: null,
    rating: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //   Handle error
  const errorAlert = (error_msg) => {
    messageApi.open({
      type: "error",
      content: error_msg,
    });
  };
  //   *****

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // Conditions for handling errors
    if (movieData.title === null) {
      return errorAlert("Please enter movie title");
    }
    if (movieData.posterURL === null) {
      return errorAlert("Please enter post URL");
    }
    if (movieData.description === null) {
      return errorAlert("Please enter description");
    }
    // *****

    // This will generate a random ID and pass to PetData
    const createMovieId = { ...movieData, id: Date.now() };
    console.log(createMovieId);

    props.handleAddNewMovie(createMovieId);
    // ******
    setMovieData({
      id: "",
      title: null,
      description: null,
      posterURL: null,
      rating: null,
    });

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Add New Movie
      </Button>
      <Modal
        title="Enter new movie"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="grid gap-2">
          {/* Input Name */}
          <Input
            value={movieData.title}
            onChange={(event) =>
              setMovieData({ ...movieData, title: event.target.value })
            }
            placeholder="Movie title"
          />
          {/* Input Name */}
          <Input
            value={movieData.posterURL}
            onChange={(event) =>
              setMovieData({ ...movieData, posterURL: event.target.value })
            }
            placeholder="Movie posterURL"
          />
          {/* Input Name */}
          <TextArea
            value={movieData.description}
            onChange={(event) =>
              setMovieData({ ...movieData, description: event.target.value })
            }
            rows={4}
          />

          {/* Selection for rating */}
          <Select
            defaultValue="Rating"
            style={{
              width: 120,
            }}
            onChange={(value) => setMovieData({ ...movieData, rating: value })}
            options={[
              {
                value: "1",
                label: "1",
              },
              {
                value: "2",
                label: "2",
              },
              {
                value: "3",
                label: "3",
              },
              {
                value: "4",
                label: "4",
              },
              {
                value: "5",
                label: "5",
              },
              {
                value: "6",
                label: "6",
              },
              {
                value: "7",
                label: "7",
              },
              {
                value: "8",
                label: "8",
              },
              {
                value: "9",
                label: "9",
              },
              {
                value: "10",
                label: "10",
              },
            ]}
          />
        </div>
      </Modal>
    </>
  );
};

export default AddMovie;
