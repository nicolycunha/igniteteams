import {
  ButtonIconTypeStyleProps,
  Container
} from '@components/ButtonIcon/styles'
import { TouchableOpacityProps } from 'react-native'
import * as PhosphorIcons from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

type Props = TouchableOpacityProps & {
  icon: keyof typeof PhosphorIcons
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  const IconComponent = PhosphorIcons[icon] as any
  const theme = useTheme()
  const color = type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED

  return (
    <Container {...rest}>
      <IconComponent size={24} color={color} />
    </Container>
  )
}
