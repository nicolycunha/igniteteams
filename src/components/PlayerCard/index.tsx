import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Icon, Name } from '@components/PlayerCard/styles'

type Props = {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon />
      <Name>{name}</Name>

      <ButtonIcon icon="X" type="SECONDARY" onPress={onRemove} />
    </Container>
  )
}
