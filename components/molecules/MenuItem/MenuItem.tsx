import { Text } from '@chakra-ui/react'

type MenuItemProps = {
  children: string | React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <Text color='#0E80D2'>{children}</Text>
)
