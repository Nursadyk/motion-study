"use client";
import React from "react";
import { Button } from "./Button";
interface Props {
  closeMessage: () => void;
  isError: {
    isTrue: boolean;
    isError: boolean;
  };
  message: string;
}
export const UserMessages: React.FC<Props> = ({
  closeMessage,
  isError,
  message,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-[rgba(0, 0, 0, 0.8)]">
      <div className=" flex flex-col justify-center items-center space-y-4 py-4 px-2 bg-white  w-fit">
        {isError.isTrue && (
          <h3 className=" text-green-700 text-lg text-center">{message}</h3>
        )}
        {isError.isError && (
          <h3 className="text-red-500 text-lg text-center">{message}</h3>
        )}
        <Button type="button" onClick={closeMessage}>
          Close
        </Button>
      </div>
    </div>
  );
};
