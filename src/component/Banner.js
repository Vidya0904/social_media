import React from "react";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

function Banner() {
  return (
    <div className="p-10 bg-sky-100">
      <div className="absolute space-y-2.5 top-30 right-20">
        <svg
          class="flex h-10 w-10 bg-white rounded-full shadow-5xl shadow-lg"
          viewBox="0 0 15 8"
        >
          <Icon path={mdiClose} />
        </svg>
        <div className="">
          <button class="h-10 w-20  justify-right font-bold text-white bg-blue-800 rounded-lg shadow-5xl shadow-lg">
            + Invite
          </button>
        </div>
      </div>
      <div>
        <div class="md:flex md:items-center space-x-4 my-3">
          <span className="text-5xl font-light">Start Your</span>
          <img
            class="shrink-0 h-10 w-10 rounded-full"
            src="/images/w.png"
            alt=""
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex text-3xl font-bold my-2">
            <p className="text-blue-800 whitespace-pre">Social Media </p>
            <p> Conversation</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex text-xs">
            <p>All your social networks.</p>
            <button className="flex h-6 w-37 bg-slate-300 rounded-full opacity-100">
              <p className="whitespace-pre font-bold"> One simple </p>
              <p className="whitespace-pre text-blue-800 font-bold">
                dashboard{" "}
              </p>
            </button>
          </div>

          <div className="flex">
            <img
              class="shrink-0 h-8 w-8 rounded-full"
              src="/images/fb.png"
              alt=""
            />
            <img
              class="shrink-0 h-8 w-8 rounded-full"
              src="/images/ig.png"
              alt=""
            />
            <img
              class="shrink-0 h-8 w-8 rounded-full"
              src="/images/tw.png"
              alt=""
            />
            <button className="h-8 w-8 bg-gray-300 rounded-full">
              <p className="">5+</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
