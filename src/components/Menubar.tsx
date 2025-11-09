import { NavLink } from "react-router-dom"

function Menubar() {
    const menuLinks = [
        {
            url: "/",
            image: "src/assets/images/menu_icons/Иконка-Корзина.png", 
            name: "Корзина"
        },{ 
            url: "/",
            image: "src/assets/images/menu_icons/Иконка-Профиля.png", 
            name: "Профиль"
        },{ 
            url: "/",
            image: "src/assets/images/menu_icons/Иконка-Лайк.png", 
            name: "Лайк"
        },{ 
            url: "/",
            image: "src/assets/images/menu_icons/Иконка-Поиск.png", 
            name: "Поиск"
        }
    ]
    return (
        <div className="h-full">
            <ul className="flex flex-col justify-center items-center gap-11 my-6 w-[70px]">
                {menuLinks.map( (item) => (
                    <li key={item.name} className="w-fit">
                        <NavLink to={item.url}
                            title={item.name}
                            className="">
                            <img src={item.image} alt={item.name} />
                        </NavLink>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default Menubar
