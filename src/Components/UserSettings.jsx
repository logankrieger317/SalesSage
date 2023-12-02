import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Switch } from '@headlessui/react';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Header />
      <div className={`bg-green-100 dark:bg-green-900 flex flex-column p-4 m-4 rounded-2xl items-center content-center justify-center shadow-xl`}>
        <Switch.Group as="div" className="flex items-center justify-between">
          <span className="flex flex-grow flex-col">
            <Switch.Label as="span" className="text-sm w-5/6 font-medium leading-6 text-gray-900 dark:text-gray-100" passive>
              Dark Mode
            </Switch.Label>
            <Switch.Description as="span" className="text-sm w-5/6 text-gray-500 dark:text-gray-300">
              Toggle Between Light and Dark 
            </Switch.Description>
          </span>
          <Switch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className={classNames(
              theme === 'dark' ? 'bg-green-600' : 'bg-green-300',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ml-24'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-green-900 shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
        </Switch.Group>
      </div>


      <div className={`bg-green-100 dark:bg-green-900 flex flex-column p-4 m-4 rounded-2xl items-center content-center justify-center shadow-xl`}>
      <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        <Switch.Label as="span" className="text-sm w-5/6 font-medium leading-6 text-gray-900" passive>
          Push Notifications
        </Switch.Label>
        <Switch.Description as="span" className="text-sm w-5/6 text-gray-500">
          Would You Like To Recieve Push Notifications?
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-green-600' : 'bg-green-300',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ml-22'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-green-900 shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </Switch.Group>
    </div>


      <Footer />
    </>
  );
}