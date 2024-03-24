import { NavBar as InternalNavBar, NavBarLogo } from './nav-bar'

type NavBarComponent = typeof InternalNavBar

export interface NavBarComponentInterface extends NavBarComponent {
  Logo: typeof NavBarLogo
}

export const NavBar = InternalNavBar as NavBarComponentInterface

NavBar.Logo = NavBarLogo

export type { NavBarElements, NavBarProps, NavBarLogoProps } from './nav-bar'
