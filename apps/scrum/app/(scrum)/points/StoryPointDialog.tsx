'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ProductOwnerIcon from '../characters/ProductOwnerIcon'
import StoryPointConversation from './StoryPointConversation'
import ScrumMasterIcon from '../characters/ScrumMasterIcon'
import DevelopmentTeamIcon from '../characters/DevelopmentTeamIcon'

// TODO: refactor together with FeatureDialog
export default function StoryPointDialog() {
  const [open, setOpen] = useState(true)

  const handleClose = () => setOpen(false)

  return (
    <Transition.Root show={open} as={Fragment} appear>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <Dialog.Panel className="relative flex flex-col items-center justify-center overflow-hidden py-12 px-[5%]">
                <div className="flex flex-col gap-9">
                  <StoryPointConversation name="產品負責人" Icon={ProductOwnerIcon}>
                    <p>
                      產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召開
                      <b>短衝規劃會議（Sprint Planning）</b>
                      。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出
                      <b>短衝待辦清單（Sprint Backlog）</b>
                      ，並由開發團隊在接下來的產品開發週期裡執行。
                    </p>
                  </StoryPointConversation>
                  <StoryPointConversation name="敏捷教練" Icon={ScrumMasterIcon}>
                    <p>
                      嗨嗨~你是新來的前端吧！我是這次的 Scrum Master
                      XX，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
                      Scrum 瞭解。這位是 XX ，是我們開發團隊的成員唷～
                      <br />
                      目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以
                      <b>負擔的點數 (Sprint Point) 大約是 20 點左右</b>。
                    </p>
                  </StoryPointConversation>
                  <StoryPointConversation name="開發團隊" Icon={DevelopmentTeamIcon}>
                    <p>
                      嘿！新來的，你應該還不知道點數是什麼意思吧？
                      <br />
                      我來跟你介紹一下吧～ Sprint Point 目的是為了<b>衡量速度</b>
                      ，是用大概花費的時間預估出的相對點數。
                      <br />
                      我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！
                      <br />
                      (我們平常管理任務是使用 Jira 這套軟體，你有時間記得先去註冊和熟悉唷～)
                    </p>
                  </StoryPointConversation>
                </div>
                <div className="mt-9 flex w-full items-center justify-end">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="bg-secondary-green-light text-neutral-black-dark text-h4 shadow-button active:shadow-button-inset rounded-xl py-4 px-14 outline-none"
                  >
                    沒問題！
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
