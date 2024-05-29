import React from "react";

type EmptyProps = {
  message: string;
};

export default function Empty({ message }: EmptyProps) {
  return (
    <div className="place-content-center grid bg-brand-highlight-50 my-6 rounded-lg w-full h-72">
      <p className="font-light text-2xl text-brand-text">{message}</p>
    </div>
  );
}
