import { Navbar, Container } from 'react-bootstrap'

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Загрузчик на яндекс диск</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
