import * as React from 'react';
import HomeComponent from "./pages/home/home.component";

import './styles.less';

/*
* Отдельный компонент для приложения для настройки будущего роутинга, здесь не имеет смысла, но архитектурно нужен
* */
export class AppComponent extends React.Component<{}, {}> {
    render() {
        return (
            <>
                <HomeComponent/>
            </>
        )
    }
}

export default AppComponent;
