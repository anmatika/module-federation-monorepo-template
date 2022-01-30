import React from "react";
import addNumbers from '@antti/utils';
import { IHeaderProps } from '@antti/types'
import "./index.scss";
// const Header = React.lazy(() =>
//   import('header/Header')
//     .then((module) => (module.default)),
// );

// const Header = React.lazy(() => import('header/Header').then((module) => (module.default = Header)));

const Header = React.lazy(() => import('header/Header'));

export default () => {
  const n = addNumbers(1, 2)

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
};
