import React from "react";
import Icon from "@mdi/react";
import {
  mdiChevronDown,
  mdiChat,
  mdiPhoneRemove,
  mdiPencilBox,
  mdiCogOutline,
} from "@mdi/js";

function ThirdPage() {
  return (
    <div className="container p-4 max-h-max shadow-xl shadow-gray">
      <div className="ml-5">
        <div className="flex space-x-10">
          <button className="h-10 w-10 bg-white rounded-full shadow-5xl shadow-lg">
            <p className="text-blue-700 font-medium">15</p>
          </button>
          <p className="text-slate-400 py-2 font-medium">Waiting for</p>
          <p className="text-blue-700 py-2 font-bold">15 friends</p>
        </div>

        <div class="grid grid-cols-1 divide-y">
          <div>
            <div className="flex pb-5">
              <button className="flex mt-6 h-10 w-24 border-2 border-slate-300 rounded-full">
                <div className="flex mt-1 ml-3">
                  <p className="font-medium">all</p>
                  <svg class="h-5 w-5 mt-1 ml-1" viewBox="0 0 20 20">
                    <Icon path={mdiChat} />
                  </svg>
                  <svg class="h-5 w-5 mt-1 ml-4" viewBox="0 0 20 20">
                    <Icon path={mdiChevronDown} />
                  </svg>
                </div>
              </button>
              <div className="flex ml-7">
                <img
                  class="shrink-0 h-7 w-7 rounded-full ml-2 mt-7 shadow-md shadow-gray-500"
                  src="/images/fb.png"
                  alt=""
                />
                <img
                  class="shrink-0 h-7 w-7 rounded-full ml-2 mt-7 shadow-md shadow-gray-500"
                  src="/images/ig.png"
                  alt=""
                />
                <img
                  class="shrink-0 h-7 w-7 rounded-full ml-2 mt-7 shadow-md shadow-gray-500"
                  src="/images/tw.png"
                  alt=""
                />
                <button className="h-8 w-8 bg-gray-300 ml-2 mt-7 rounded-full">
                  <p className="">5+</p>
                </button>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex py-8 mt-3">
              <img
                className="rounded-full w-10 h-10"
                src="/images/7.jpg"
                alt=""
              />
              <div className="ml-3">
                <p className="font-medium">Jenny Rose</p>
                <p className="text-xs text-slate-400">Today</p>
              </div>
              <img
                class="shrink-0 h-6 w-6 rounded-full ml-20 mt-2 shadow-md shadow-gray-500"
                src="/images/ig.png"
                alt=""
              />
              <svg class="h-5 w-5 mt-2 ml-3" viewBox="0 0 20 20">
                <Icon path={mdiChat} />
              </svg>
            </div>
          </div>
          <div>
            <div className=" py-6 mt-2">
              <div className="flex">
                <img
                  className="rounded-full w-8 h-8"
                  src="/images/5.jpg"
                  alt=""
                />
                <p className="font-medium ml-1 mt-1">John Helis</p>
                <img
                  class="shrink-0 h-5 w-5 rounded-full ml-2 mt-2 shadow-md shadow-gray-500"
                  src="/images/fb.png"
                  alt=""
                />
                <div className="flex ml-20">
                <svg class="h-5 w-5 mt-2 ml-3" viewBox="0 0 20 20">
                  <Icon path={mdiPencilBox} />
                </svg>
                <svg class="h-5 w-5 mt-2 ml-3" viewBox="0 0 20 20">
                  <Icon path={mdiPhoneRemove} />
                </svg>
                <svg class="h-5 w-5 mt-2 ml-3" viewBox="0 0 20 20">
                  <Icon path={mdiCogOutline} />
                </svg>
                </div>
               
              </div>
              <div className="p-6">
                <button className="flex h-10 w-32 ml-28 bg-white border-1 border-slate-200 rounded-full border-1  shadow-md shadow-gray-500">
                  <p className="font-medium text-slate-500 text-sm ml-4 mt-2">
                    {" "}
                    Start Messages{" "}
                  </p>
                </button>
                <p className="font-medium text-sm ml-36 mt-2">14:32 Pm</p>
                
                  <p className="w-12 bg-gray-300 ml- mt-7 text-center rounded-full">Hello</p>
                
                <img
                  class="shrink-0 h-24 w-32 mt-6 rounded-lg"
                  src="/images/1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
