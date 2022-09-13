import React from "react";
import Icon from "@mdi/react";
import {
  mdiShieldLockOutline,
  mdiPlayBoxOutline,
  mdiArrowDownDropCircleOutline,
  mdiPlusBox,
} from "@mdi/js";

function FirstPage() {
  return (
    <div className="container p-4 max-h-max shadow-xl shadow-gray">
      <div className="columns-2 py-3 ml-10 ">
        <div className="py-2">
          <p className="font-bold ">Your Shortcuts </p>
        </div>
        <div className="py-3">
          <p className="flex text-slate-400">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
              <Icon path={mdiShieldLockOutline} />
            </svg>
            Private Chat{" "}
          </p>
        </div>
        <div className="py-3">
          <p className="flex font-bold text-blue-700">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
              <Icon path={mdiPlayBoxOutline} />
            </svg>
            Watch
          </p>
        </div>
        <div className="py-3 ml-10">
          <button className="font-bold text-blue-700">Edit</button>
        </div>
        <div className="py-3 ml-10">
          <button className="h-6 w-10 font-bold text-white bg-orange-400 justify-center rounded-full">
            5
          </button>
        </div>
        <div className="py-3 ml-10">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <Icon path={mdiArrowDownDropCircleOutline} />
          </svg>
        </div>
      </div>

      <div className="flex space-x-10 place-content-center">
        <button className="border-b-4 hover:border-blue-500">Live</button>
        <button className="border-b-4 hover:border-blue-500">Saved</button>
        <button className="border-b-4 hover:border-blue-500">Latest</button>
      </div>
      <div className="divide-y-2 divide-gray-200 mx-6">
        <div>
          <div className="flex space-x-5 py-5 place-content-center">
            <img
              class="shrink-0 h-20 w-24 rounded-lg"
              src="/images/1.jpg"
              alt=""
            />
            <img
              class="shrink-0 h-20 w-24 rounded-lg"
              src="/images/1.jpg"
              alt=""
            />
            <img
              class="shrink-0 h-20 w-24 rounded-lg"
              src="/images/1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="py-10">
          <div className="flex">
            <p className="font-bold">Events</p>
            <button className="flex text-slate-400 font-bold ml-28">
              Create
              <svg class="h-5 w-5 fill-slate-300 ml-4" viewBox="0 0 20 20">
                <Icon path={mdiPlusBox} />
              </svg>
            </button>
          </div>
          <div className="flex mt-5 ">
            <img
              class="shrink-0 h-8 w-8 rounded-full"
              src="/images/1.jpg"
              alt=""
            />
            <img
              class="shrink-0 h-8 w-8 rounded-full"
              src="/images/4.jpeg"
              alt=""
            />
            <img
              class="shrink-0 h-8 w-8 rounded-full"
              src="/images/5.jpg"
              alt=""
            />

            <p className="text-xs text-slate-400 font-bold ml-6 py-2 place-content-center">
              36 friends
            </p>
          </div>
        </div>
        <div className="flex py-5 text-lg whitespace-pre font-medium ">
          <p className="text-blue-700">Wow </p>
          <p className="text-slate-500">New Followers</p>
        </div>
      </div>
      <div className="flex place-content-center">
        <div className="flex space-x-2">
          <button className="h-8 w-8 bg-slate-200 rounded-full">
            <p className="text-blue-800 font-medium">Mr</p>
          </button>
          <img
            class="shrink-0 h-8 w-8 rounded-full"
            src="/images/1.jpg"
            alt=""
          />
          <button className="h-8 w-8 bg-slate-200 rounded-full">
            <p className="text-blue-800 font-medium">DC</p>
          </button>
          <img
            class="shrink-0 h-8 w-8 rounded-full"
            src="/images/1.jpg"
            alt=""
          />
        </div>
        <div className="mb-10 ml-24">
          <button className="h-6 w-6 bg-violet-500 rounded-full">
            <p className="text-white font-medium">3</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
