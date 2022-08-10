import { AppShell } from '@mantine/core';
import MyHeader from './components/Header';

function App() {
	return <AppShell header={<MyHeader />}>hi</AppShell>;
}

export default App;
