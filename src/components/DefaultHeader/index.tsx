import { Container, MarqueeContainer } from './style'
import Marquee from '../Marquee'

export default function DefaultHeader() {
  return (
    <Container data-testid="header">
      <MarqueeContainer >
        <Marquee />
      </MarqueeContainer>
    </Container>
  )
}