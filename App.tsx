import { StatusBar } from 'react-native'
import { Groups } from '@screens/Groups'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'
import { Loading } from '@components/Loading'
import { NewGroup } from '@screens/NewGroup'
import { Players } from '@screens/Players'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Groups />
      {/* <NewGroup /> */}
      {/* <Players /> */}
    </ThemeProvider>
  )
}
