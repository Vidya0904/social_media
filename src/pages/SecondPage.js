import React from "react";
import Icon from "@mdi/react";
import { mdiPencilBox, mdiMagnify, mdiCogOutline } from "@mdi/js";

function SecondPage() {
  return (
    <div className=" container p-4 max-h-max shadow-xl shadow-gray-400">
      <div className="relative p-7">
        <img
          className="relative rounded-lg w-30 h-13"
          src="/images/1.jpg"
          alt=""
        />{" "}
        <img
          className="absolute -bottom-3 left-32 rounded-full w-20 h-20  border-white border-4"
          src="/images/2.jpg"
          alt=""
        />
      </div>
      <div className=" p-3 text-center">
        <p className="font-medium text-lg ml-20 flex">
          Annabel Alexsa
          <svg class="h-5 w-5 ml-5 fill-orange-600" viewBox="0 0 20 20">
            <Icon path={mdiPencilBox} />
          </svg>
        </p>
        <p className="font-semibold text-slate-400">New York City</p>
      </div>

      <div className="shadow-xl shadow-gray-200 h-80 w-70 rounded-lg">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
              <Icon path={mdiMagnify} />
            </svg>
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full rounded-lg py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-white-500 focus:ring-white-500 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
        </label>

        <div className="relative flex space-x-10 place-content-center py-5">
          <button className="border-b-4 hover:border-blue-500">All</button>
          <button className="border-b-4 hover:border-blue-500">fb</button>
          <button className="border-b-4 hover:border-blue-500">ig</button>
          <button className="border-b-4 hover:border-blue-500">tw</button>
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <Icon path={mdiCogOutline} />
          </svg>
        </div>
        <div className="mx-7">
          <div class="grid grid-cols-1 divide-y">
            <div className="flex p-3">
              <img
                className="rounded-full w-10 h-10 "
                src="/images/5.jpg"
                alt=""
              />
              <div className="ml-3">
                <p className="font-medium">Jenny Rose</p>
                <p className="text-xs text-slate-400">England</p>
              </div>
              <img
                class="h-5 w-5 rounded-full ml-20 mt-3 shadow-md shadow-gray-500"
                src="/images/ig.png"
                alt=""
              />
            </div>
            <div className="flex p-3 mt-3">
              <img
                className="rounded-full w-10 h-10"
                src="/images/7.jpg"
                alt=""
              />
              <div className="ml-3">
                <p className="font-medium">Jenny Rose</p>
                <p className="text-xs text-slate-400">England</p>
              </div>
              <img
                class="shrink-0 h-5 w-5 rounded-full ml-20 mt-3 shadow-md shadow-gray-500"
                src="/images/fb.png"
                alt=""
              />
            </div>
            <div className="flex p-3">
              <img
                className="rounded-full w-10 h-10"
                src="/images/6.jpg"
                alt=""
              />
              <div className="ml-3">
                <p className="font-medium">Jenny Rose</p>
                <p className="text-xs text-slate-400">England</p>
              </div>
              <img
                class="shrink-0 h-5 w-5 rounded-full ml-20 mt-3 shadow-md shadow-gray-500"
                src="/images/tw.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
