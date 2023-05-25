import React from 'react';
import block from 'bem-cn-lite';
import {ThemeProvider, Button, Label, Dialog, Icon} from '@gravity-ui/uikit';
import iconGitHub from './assets/icons/github.svg';
import iconStorybook from './assets/icons/storybook.svg';
import iconTelegram from './assets/icons/telegram.svg';
import logo from './assets/logo.svg';
import './App.scss';

const b = block('app');

enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export const App = () => {
    const [theme, setTheme] = React.useState(Theme.Light);
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
        <ThemeProvider theme={theme}>
            <div className={b()}>
                <h1 className={b('header')}>UIKit example – Create React App</h1>
                <img src={logo} className={b('logo')} alt="logo" />
                <div className={b('buttons-block')}>
                    <Button
                        className={b('button')}
                        size="l"
                        view="outlined"
                        disabled={theme === Theme.Light}
                        onClick={() => {
                            setTheme(Theme.Light);
                        }}
                    >
                        Light theme
                    </Button>
                    <Button
                        className={b('button')}
                        size="l"
                        view="outlined"
                        disabled={theme === Theme.Dark}
                        onClick={() => {
                            setTheme(Theme.Dark);
                        }}
                    >
                        Dark theme
                    </Button>
                </div>
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
                    <div className={b('content-item')}>
                        <Button
                            onClick={() => {
                                setDialogOpen(true);
                            }}
                            view="normal"
                        >
                            Show dialog
                        </Button>
                        <Dialog
                            open={dialogOpen}
                            onClose={() => {
                                setDialogOpen(false);
                            }}
                            onEnterKeyDown={() => {
                                setDialogOpen(false);
                            }}
                        >
                            <Dialog.Header caption="Title" />
                            <Dialog.Body>Content</Dialog.Body>
                            <Dialog.Footer
                                onClickButtonApply={() => {
                                    setDialogOpen(false);
                                }}
                                onClickButtonCancel={() => {
                                    setDialogOpen(false);
                                }}
                                textButtonApply="Apply"
                                textButtonCancel="Cancel"
                            />
                        </Dialog>
                    </div>
                </div>
                <h3 className={b('header')}>Useful links</h3>
                <div className={b('buttons-block')}>
                    <Button
                        className={b('button')}
                        size="l"
                        view="outlined"
                        href="https://github.com/gravity-ui"
                        target="_blank"
                    >
                        <Icon data={iconGitHub} />
                        GitHub
                    </Button>
                    <Button
                        className={b('button')}
                        size="l"
                        view="outlined"
                        href="https://preview.gravity-ui.com/uikit/"
                        target="_blank"
                    >
                        <Icon data={iconStorybook} />
                        Storybook
                    </Button>
                    <Button
                        className={b('button')}
                        size="l"
                        view="outlined"
                        href="https://t.me/gravity_ui"
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
