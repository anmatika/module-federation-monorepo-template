/* eslint-disable no-unused-vars */
declare module 'header/Header' {
  type IHeaderProps = import('@antti/types').IHeaderProps

  const Header: (props: IHeaderProps) => import('react').ReactElement
  export default Header
}
