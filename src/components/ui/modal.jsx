import React, { useState } from "react";
import Modal from "react-modal";
import CustomSlider from "./slider";
import { Button } from "./button";

Modal.setAppElement("#root");

export function ModalCustom({ project }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setModalIsOpen(true)}
        className="items-center hover:scale-110 transition delay-100"
        variant="primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        className="bg-white dark:bg-slate-950 py-5 px-5 rounded-xl shadow-lg max-w-3xl mx-4 dark:text-white"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20 bg-blur-sm"
      >
        <div className="flex justify-between mb-3 items-start">
          <h2 className="text-xl font-bold">Detail Project</h2>
          <Button onClick={() => setModalIsOpen(false)} variant="danger">
            X
          </Button>
        </div>
        <CustomSlider>
          {project.images.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt={item}
                className="rounded-md bg-slate-500"
              />
            );
          })}
        </CustomSlider>
        <h3 className="text-lg font-bold my-2">{project.title}</h3>
        <p className="text-sm mt-2">{project.description}</p>
      </Modal>
    </div>
  );
}
