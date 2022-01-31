import React from 'react'
import { addNumbers } from '@antti/utils'
import './index.scss'

const Header = React.lazy(() => import('header/Header'))

const HostApp = () => {
  const n = addNumbers({first: 1, second: 2})

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl h-screen bg-indigo-50 ">
      <React.Suspense fallback="Loading Header...">
        <Header title="Foo" />
      </React.Suspense>
      <div className="mx-auto bg-blue-100 h-full">
        <div className="font-bold">Host</div>
        <p className="text-base">Add numbers result from @antti/utils : {n} </p>
      </div>
    </div>
  )
}

export default HostApp
