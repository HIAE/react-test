import { Container, MarqueeContainer } from './style'
import Marquee from '../Marquee'

export default function DefaultHeader() {
  return (
    <Container>
      <MarqueeContainer >
        <Marquee />
      </MarqueeContainer>
    </Container>
  )
}