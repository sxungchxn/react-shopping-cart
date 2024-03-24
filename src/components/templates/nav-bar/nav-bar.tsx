import { Flex, FlexProps, PolymorphicRef, Text } from '@sxungchxn/react-payments'
import { IconShoppingCart } from '@tabler/icons-react'
import { vars } from '@sxungchxn/react-payments'
import * as styles from './nav-bar.css'
import { forwardRef } from 'react'

export type NavBarElements = 'nav' | 'header'

export interface NavBarProps extends FlexProps<NavBarElements> {}

export const NavBar = ({ children, as = 'nav', ...props }: NavBarProps) => {
  return (
    <Flex
      {...props}
      as={as}
      backgroundColor="aqua"
      justifyContent="center"
      alignItems="center"
      paddingY="12px"
      className={styles.container}
    >
      <Flex width="100%" justifyContent="space-between" alignItems="center" maxWidth="1200px">
        {children}
      </Flex>
    </Flex>
  )
}

export interface NavBarLogoProps extends FlexProps {}

export const NavBarLogo = forwardRef((props: FlexProps, ref: PolymorphicRef<'div'>) => {
  return (
    <Flex {...props} gap="2px" alignItems="center" ref={ref}>
      <IconShoppingCart size={36} color={vars.color.white} />
      <Text as="h1" variant="heading1" color="white">
        NEXTSTEP
      </Text>
    </Flex>
  )
})
