import { useEffect, useState } from "react";
import { NavItem } from "../NavItem";
import { getAllCategories } from "../../services/products";
import { Category } from "../../models/category";

function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userNavItems = [
    {
      title: "My Orders",
      redirectTo: "/my-orders",
    },
    {
      title: "My Account",
      redirectTo: "/my-account",
    },
    {
      title: "Sign In",
      redirectTo: "/sign-in",
    },
    {
      title: "Sign Up",
      redirectTo: "/sign-up",
    },
  ];

  return (
    <nav className="">
      <ul className="tablet:flex gap-3">
        <img src="" alt="logo" title="logo" />
        <NavItem title="Home" redirectTo="/" activeStyle="text-red-600" />
        {categories.map((category) => (
          <NavItem
            key={category.id}
            title={category.name}
            redirectTo={`/category/${category.id}`.toLowerCase()}
            activeStyle="text-red-600"
          />
        ))}
      </ul>

      <ul className="tablet:flex gap-3">
        {userNavItems.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            redirectTo={item.redirectTo}
            activeStyle="text-red-600"
          />
        ))}
      </ul>
    </nav>
  );
}

export { Navbar };
