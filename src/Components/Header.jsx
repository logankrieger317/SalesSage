import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: 'Home' },
  { name: 'POS', href: 'POS' },
  { name: 'Profile', href: 'Profile' },
  { name: 'Reports', href: 'Reports' },
  { name: 'Admin', href: 'Admin' },
  { name: 'Settings', href: 'UserSettings' },
  { name: 'Cart', href: 'Cart' },
  

]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="Home" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="SalesSageLogo.png" alt="" />
        </a>
        <div className="flex flex-1 justify-end">
          <h1 className='font-bold'>Sales Sage</h1>
          
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-3/4 overflow-y-auto bg-green-50 px-6 py-6 border-r-2 border-grey-100 border-solid">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="Home" className="-m-6.5 p-1.5">
              <span className="sr-only">Sales Sage</span>
              <img
                className="h-16 w-auto"
                src="SalesSageLogo.png"
                alt=""
              />
            </a>
            
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}