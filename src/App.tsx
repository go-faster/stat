import React from 'react';
import block from 'bem-cn-lite';
import {Button, Icon, Label, Table, ThemeProvider} from '@gravity-ui/uikit';
import {Container, Row} from '@gravity-ui/uikit/unstable_layout';
import iconGitHub from './assets/icons/github.svg';
import iconTelegram from './assets/icons/telegram.svg';
import './App.scss';

const b = block('app');

enum Theme {
    Dark = 'dark',
}

export const App = () => {
    return (
        <ThemeProvider theme={Theme.Dark}>
            <div className={b()}>
                <h1 className={b('header')}>Go Faster: stats</h1>
                <Container maxWidth="m">
                    <Row space="5">
                        <Table
                            columns={[
                                {
                                    id: 'stat',
                                    name: 'Stat',
                                },
                                {
                                    id: 'value',
                                    name: 'Value',
                                },
                            ]}
                            data={[
                                {
                                    stat: 'Commits',
                                    value: '1k',
                                },
                                {
                                    stat: 'PR',
                                    value: '1k',
                                },
                            ]}
                        />
                    </Row>
                </Container>
                <div className={b('content')}>
                    <div className={b('content-item')}>
                        <Label className={b('label')} theme="normal">
                            normal
                        </Label>
                        <Label className={b('label')} theme="info">
                            info
                        </Label>
                        <Label className={b('label')} theme="success">
                            success
                        </Label>
                        <Label className={b('label')} theme="warning">
                            warning
                        </Label>
                        <Label className={b('label')} theme="danger">
                            danger
                        </Label>
                        <Label className={b('label')} theme="unknown">
                            unknown
                        </Label>
                    </div>
                </div>
                <h3 className={b('header')}>Useful links</h3>
                <div className={b('buttons-block')}>
                    <Button
                        className={b('button')}
                        size="l"
                        view="outlined"
                        href="https://github.com/go-faster"
                        target="_blank"
                    >
                        <Icon data={iconGitHub} />
                        GitHub
                    </Button>
                    <Button
                        className={b('button')}
                        size="l"
                        view="outlined"
                        href="https://t.me/go_faster_dev"
                        target="_blank"
                    >
                        <Icon data={iconTelegram} />
                        Telegram
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    );
};
