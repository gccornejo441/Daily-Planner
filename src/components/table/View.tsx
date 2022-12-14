import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import Clipboard from 'react-clipboard.js';
import { BsCheckCircle, BsClipboardCheck } from 'react-icons/bs';

interface AuxProps {
  children: React.ReactNode;
}

import tippy from 'tippy.js';

import 'tippy.js/dist/tippy.css'; // optional for styling

const View = ({ children }: AuxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    tippy('#myButton', {
      content: "View The Client's Notes",
      theme: 'indigo',
    });
  }, []);

  function closeModal() {
    setIsOpen(false);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  function openModal() {
    setIsOpen(true);
  }

  function onSuccess() {
    setCopied(true);
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <button
          id='myButton'
          type='button'
          onClick={openModal}
          className='rounded bg-gray-100 py-3 px-5 text-sm leading-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 hover:bg-gray-200'
        >
          View
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h2'
                    className='text-xl font-medium leading-6 text-gray-900'
                  >
                    Counseling Session Notes
                  </Dialog.Title>
                  <div className='mt-2 break-words'>
                    <p className='text-lg text-gray-500'>{children}</p>
                    <br />
                  </div>

                  <div className='mt-4 flex justify-between'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 hover:bg-indigo-200'
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                    <Clipboard
                      data-clipboard-text={children}
                      onSuccess={onSuccess}
                      className='btn inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 hover:bg-indigo-200'
                    >
                      {!copied ? (
                        <BsClipboardCheck size={18} />
                      ) : (
                        <BsCheckCircle
                          className='text-green-500 transition-all duration-[2000ms]'
                          size={18}
                        />
                      )}
                      <span className='ml-3'>Copy</span>
                    </Clipboard>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default View;
