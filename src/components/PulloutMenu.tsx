import { NavLink } from "react-router-dom"

function PulloutMenu() {
    return (
        <div className="absolute flex flex-col items-center gap-11 my-6 w-[70px]">
            <NavLink
                title="Меню">
                <img src="src/assets/images/menu_icons/Иконка-Выдвижное меню.png" alt="" />
            </NavLink>
        </div>
    )
}

export default PulloutMenu
