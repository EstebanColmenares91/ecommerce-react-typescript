import { NavItem } from '../NavItem'

function Navbar() {
  return (
    <nav className='tablet:flex justify-between w-full'>
        <ul className='flex gap-3'>
          <img src="" alt="logo" title='logo' />
            <NavItem title="Home" redirectTo="/" activeStyle="text-red-600" />
            <NavItem title='Clothes' redirectTo='/clothes' activeStyle="text-red-600" />
            <NavItem title='Electronics' redirectTo='/electronics' activeStyle="text-red-600" />
            <NavItem title='Furniture' redirectTo='/furniture' activeStyle="text-red-600" />
            <NavItem title='Toys' redirectTo='/toys' activeStyle="text-red-600" />
            <NavItem title='Others' redirectTo='/others' activeStyle="text-red-600" />
        </ul>

        <ul className='flex gap-3'>
            <NavItem title='My Orders' redirectTo='/my-orders' activeStyle="text-red-600" />
            <NavItem title='My Account' redirectTo='/my-account' activeStyle="text-red-600" />
            <NavItem title='Sign In' redirectTo='/sign-in' activeStyle="text-red-600" />
        </ul>
    </nav>
  )
}

export  { Navbar }