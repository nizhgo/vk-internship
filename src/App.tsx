import ReservationForm from "./components/ReservationForm";
import logo from './assets/logo.png';
import {AppContainer, Card, Header, Logo, Title} from '../style.ts';

const App = () => {
    return (
        <AppContainer>
            <Header>
                <Logo src={logo} alt={'logo'}/>
                <Title>Vk.Office</Title>de
            </Header>
            <Card>
                Бронируйте заранее, чтобы избежать возможных задержек.
            </Card>
            <ReservationForm/>
        </AppContainer>
    )
}


export default App;