// import axios from 'axios';
import Card from 'components/admincard'
import React from 'react'
import { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Category() {
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const name = e.target.name.value; 
          const description = e.target.description.value; 
      
          // const requestData = {
          //   name,
          //   description,
          // };
          // const response = await axios.post("https://api-academy.tabaani.co/api/categories", requestData);
      
          // const res = response.data;
      
          e.target.reset();
          setSuccessAlert(true);
          setTimeout(() => {
            setSuccessAlert(false);
          }, 3000);
        } catch (error) {
          console.error(error);
          setErrorAlert(true);
          setTimeout(() => {
            setErrorAlert(false);
          }, 3000);
        }
      };
      


  return (

    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
    <div class="relative flex items-center justify-between">
      <div class="text-xl font-bold  dark:text-white">Add Category</div>
    </div>
    <div class="mt-8 h-full overflow-x-scroll xl:overflow-hidden"></div>

    {successAlert && (
      <div
        class="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="font-medium">Success!</span> Category added successfully.
      </div>
    )}
    {errorAlert && (
      <div
        className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        An error occurred while adding the Category. Please try again.
      </div>
    )}
    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
   
      <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            class="text-sm font-bold text-navy-700 dark:text-white"
            for="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            class="mt-2 block w-full rounded-md border border-gray-500 bg-white px-4 py-2 text-gray-700 focus:border-orange-500 focus:border-orange-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300  dark:focus:border-orange-500"
            placeholder=" "
            required
          />
        </div>


        <div>
          <label
            class="text-sm font-bold text-navy-700 dark:text-white"
            for="description"
          >
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            class="mt-2 block w-full rounded-md border border-gray-500 bg-white px-4 py-2 text-gray-700 focus:border-orange-500 focus:border-orange-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-orange-500"
            placeholder=" "
            required
          />
        </div>

      </div>

      <div class="mt-6 flex justify-end">
        <button
          className="flex  items-center justify-start gap-2 rounded-[10px] bg-[#000000] py-1  pl-6 pr-2  text-center text-sm  font-medium capitalize leading-tight text-white"
          type="submit"
        >
          Save Category
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>
    </form>
  </Card>
  )
}
