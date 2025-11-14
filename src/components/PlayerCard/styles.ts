import { User } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
  `};

  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};

  font-family: 'Roboto-Variable';
`

export const Icon = styled(User).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200
}))`
  margin-left: 16px;
  margin-right: 8px;
`
