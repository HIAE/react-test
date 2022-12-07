import { Container, MarqueeContainer } from './style'
import Marquee from '../Marquee'

interface DefaultHeaderProps {
  size?: 'small' | 'medium'
}

export default function DefaultHeader({ size = 'medium' }: DefaultHeaderProps) {
  return (
    <Container>
      <MarqueeContainer size={size}>
        <Marquee />
      </MarqueeContainer>
    </Container>
  )
}