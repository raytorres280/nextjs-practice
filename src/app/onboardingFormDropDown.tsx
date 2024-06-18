'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import CaseCategories from './CaseCategories'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function CaseCategoryMenuItems() {
  const items = Object.values(CaseCategories)
  const stringKeys = items.filter(x => isNaN(parseInt(x)));
  console.log(items)
  return (
    <>
      {
        stringKeys.map(key => {
          return (
            <li><a>{key}</a></li>
          )
        })
      }
    </>
  )
}

export default function OnboardingFormDropDown() {
  return (
    <div className="bg-black-800">
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <CaseCategoryMenuItems />
        </ul>
      </details>
    </div>
  )
}
