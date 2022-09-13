import React from "react";
import Icon from "@mdi/react";
import {
  mdiHomeOutline,
  mdiCogOutline,
  mdiBellOutline,
  mdiPlus,
  mdiMagnify,
  mdiMicrophoneOutline,
} from "@mdi/js";

function Header() {
  return (
    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between space-x-4 items-center ">
      <img
          class="shrink-0 h-10 w-10 rounded-full"
          src="/images/w.png"
          alt=""
        />
      <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
              <Icon path={mdiHomeOutline} />
            </svg>
      </div>
      <div class="group flex items-center space-x-4">
      <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
              <Icon path={mdiMagnify} />
            </svg>
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
        <div class="flex space-x-4 inset-y-20">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <Icon path={mdiMicrophoneOutline} />
          </svg>
        </div>
        </div>

      <div class="group flex items-center space-x-4">
        <div class="flex space-x-4 ...">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <Icon path={mdiPlus} />
          </svg>

          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <Icon path={mdiBellOutline} />
          </svg>

          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <Icon path={mdiCogOutline} />
          </svg>
        </div>
        <img
          class="shrink-0 h-10 w-10 rounded-full"
          src="/images/1.jpg"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Header;
