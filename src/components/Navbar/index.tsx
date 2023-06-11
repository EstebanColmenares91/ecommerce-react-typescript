import { useContext } from 'react';
import { NavItem } from '../NavItem'
import { ProductsContext } from '../../context/productsContext';


function Navbar() {
  const { shoppingCartLength } = useContext(ProductsContext);
  console.log(shoppingCartLength);
  return (
    <nav className=''>
        <ul className='tablet:flex gap-3'>
          <img src="" alt="logo" title='logo' />
            <NavItem title="Home" redirectTo="/" activeStyle="text-red-600" />
            <NavItem title='Clothes' redirectTo='/clothes' activeStyle="text-red-600" />
            <NavItem title='Electronics' redirectTo='/electronics' activeStyle="text-red-600" />
            <NavItem title='Furniture' redirectTo='/furniture' activeStyle="text-red-600" />
            <NavItem title='Toys' redirectTo='/toys' activeStyle="text-red-600" />
            <NavItem title='Others' redirectTo='/others' activeStyle="text-red-600" />
        </ul>

        <ul className='tablet:flex gap-3'>
            <NavItem title='My Orders' redirectTo='/my-orders' activeStyle="text-red-600" />
            <NavItem title='My Account' redirectTo='/my-account' activeStyle="text-red-600" />
            <NavItem title='Sign In' redirectTo='/sign-in' activeStyle="text-red-600" />
        </ul>
    </nav>
  )
}

export  { Navbar }