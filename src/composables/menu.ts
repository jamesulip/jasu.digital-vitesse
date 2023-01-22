// create a menu composable
export const useMenu = () => {
  const [dropdownMenu, setDropdownMenu] = useToggle(false)
  return {
    dropdownMenu,
    setDropdownMenu,
  }
}
