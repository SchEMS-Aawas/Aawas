import React from 'react';
import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";

const News = () => {
  return (
    <Banner className="flex w-full items-center justify-between border-b border-gray-200 bg-blue-500 p-8 dark:border-gray-600 dark:bg-gray-700 rounded-lg shadow-lg">
      <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
        <form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
          <Label
            htmlFor="email"
            className="mb-2 mr-auto shrink-0 text-lg font-medium text-white dark:text-gray-400 md:m-0 md:mb-0"
          >
            Sign up for our newsletter
          </Label>
          <TextInput
            id="email"
            placeholder="Enter your email"
            required
            type="email"
            className="mb-2 md:mb-0 px-4 py-2 rounded-md"
          />
          <Button type="submit" className="px-6 py-2 rounded-md bg-white text-blue-500 hover:bg-gray-200">
            Subscribe
          </Button>
        </form>
      </div>
      <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-white dark:text-gray-400">
        <HiX className="h-4 w-4" />
      </Banner.CollapseButton>
    </Banner>
  );
};

export default News;
