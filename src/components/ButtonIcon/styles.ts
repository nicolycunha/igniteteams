import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

export const Container = styled(TouchableOpacity)`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`
