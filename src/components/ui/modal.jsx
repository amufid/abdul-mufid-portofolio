import React, { useState } from "react";
import Modal from "react-modal";
import CustomSlider from "./slider";
import { Button } from "./button";

Modal.setAppElement("#root");

export function ModalCustom({ project }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setModalIsOpen(true)} variant="detail">
        Detail
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        className="bg-white dark:bg-slate-950 py-10 px-7 rounded-lg shadow-lg max-w-3xl my-10 mx-5 dark:text-white"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
      >
        <div className="flex justify-between mb-2 items-center">
          <h2 className="text-xl font-bold">Detail project</h2>
          <Button onClick={() => setModalIsOpen(false)} variant="danger">
            X
          </Button>
        </div>
        <CustomSlider>
          {project.images.map((item, index) => {
            return <img key={index} src={item} alt={item} />;
          })}
        </CustomSlider>
        <h3 className="text-lg font-bold my-2">{project.title}</h3>
        <p className="text-sm mt-2">{project.description}</p>
      </Modal>
    </div>
  );
}
