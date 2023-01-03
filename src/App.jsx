import IconCnt from "./IconCnt"
import { MdOutlineHome } from "react-icons/md"
import { IoIosAddCircleOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { CiUser } from "react-icons/ci"
import { BsBookmarkHeart } from "react-icons/bs"
import { useState } from "react"

function App() {
  const [homeIsActive, setHomeIsActive] = useState(false)
  const [bookmarkIsActive, setBookmarkIsActive] = useState(false)
  const [addIsActive, setAddIsActive] = useState(false)
  const [userIsActive, setUserIsActive] = useState(false)
  const [settingsIsActive, setSettingsIsActive] = useState(false)

  const resetState = () => {
    setHomeIsActive(false)
    setBookmarkIsActive(false)
    setAddIsActive(false)
    setUserIsActive(false)
    setSettingsIsActive(false)
  }

  const addActiveClass = (e) => {
    resetState()
    const icons = document.querySelectorAll(".icon")
    const target = e.currentTarget

    icons.forEach((el) => el.classList.remove("active"))
    Array.from(icons)[+target.dataset.index].classList.add("active")
  }

  return (
    <div className="App">
      <ul>
        <li
          onClick={(e) => {
            addActiveClass(e)
            setHomeIsActive(true)
          }}
          data-index="0"
        >
          <IconCnt
            activeColor="rgba(76, 139, 245, 1)"
            color="rgba(76, 139, 245, .3)"
            isActive={homeIsActive}
          >
            <MdOutlineHome />
          </IconCnt>
        </li>
        <li
          onClick={(e) => {
            addActiveClass(e)
            setBookmarkIsActive(true)
          }}
          data-index="1"
        >
          <IconCnt
            activeColor="rgba(222, 82, 70, 1)"
            color="rgba(222, 82, 70, .3)"
            isActive={bookmarkIsActive}
          >
            <BsBookmarkHeart />
          </IconCnt>
        </li>
        <li
          onClick={(e) => {
            addActiveClass(e)
            setAddIsActive(true)
          }}
          data-index="2"
        >
          <IconCnt
            activeColor="rgba(143, 0, 255, 1)"
            color="rgba(143, 0, 255, .3)"
            isActive={addIsActive}
          >
            <IoIosAddCircleOutline />
          </IconCnt>
        </li>
        <li
          onClick={(e) => {
            addActiveClass(e)
            setUserIsActive(true)
          }}
          data-index="3"
        >
          <IconCnt
            activeColor="rgba(255,165,0, 1)"
            color="rgba(255,165,0, .3)"
            isActive={userIsActive}
          >
            <CiUser />
          </IconCnt>
        </li>
        <li
          onClick={(e) => {
            addActiveClass(e)
            setSettingsIsActive(true)
          }}
          data-index="4"
        >
          <IconCnt
            activeColor="rgba(26, 162, 96, 1)"
            color="rgba(26, 162, 96, .3)"
            isActive={settingsIsActive}
          >
            <IoSettingsOutline />
          </IconCnt>
        </li>
      </ul>
    </div>
  )
}

export default App
