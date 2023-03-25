import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Smartphones"
                    itemDos = "Accesorios"
                    itemTres = "Laptops"
                    itemCuatro = "Consolas"
                />
            </nav>

            <div className="containerCart">
                    <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;