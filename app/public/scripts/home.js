/*!
 * Copyright 2018 CoNET Technology Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const InitKeyPair = function () {
    const keyPair = {
        publicKey: null,
        privateKey: null,
        keyLength: null,
        nikeName: null,
        createDate: null,
        email: null,
        passwordOK: false,
        verified: false,
        publicKeyID: null,
        _password: null
    };
    return keyPair;
};
const makeKeyPairData = function (view, keypair) {
    const length = keypair.publicKeyID.length;
    keypair.publicKeyID = keypair.publicKeyID.substr(length - 16);
    let keyPairPasswordClass = new keyPairPassword(function (_imapData, passwd, sessionHash) {
        //      password OK
        keypair.keyPairPassword(keyPairPasswordClass = null);
        keypair.passwordOK = true;
        keypair._password = passwd;
        keypair.showLoginPasswordField(false);
        view.keyPairCalss = new encryptoClass(keypair);
        view.showKeyPair(false);
        if (_imapData && _imapData.imapTestResult) {
            return view.imapSetupClassExit(_imapData, sessionHash);
        }
        let uu = null;
        return view.imapSetup(uu = new imapForm(keypair.email, _imapData, function (imapData) {
            view.imapSetup(uu = null);
            view.imapSetupClassExit(imapData, sessionHash);
        }));
    });
    keypair.keyPairPassword = ko.observable(keyPairPasswordClass);
    keypair.showLoginPasswordField = ko.observable(false);
    keypair.delete_btn_view = ko.observable(true);
    keypair.showConform = ko.observable(false);
    keypair['showDeleteKeyPairNoite'] = ko.observable(false);
    keypair.delete_btn_click = function () {
        keypair.delete_btn_view(false);
        return keypair.showConform(true);
    };
    keypair.deleteKeyPairNext = function () {
        view.connectInformationMessage.sockEmit('deleteKeyPairNext', () => {
            view.showIconBar(false);
            view.connectedCoNET(false);
            view.connectToCoNET(false);
            view.CoNETConnect(view.CoNETConnectClass = null);
            view.imapSetup(view.imapFormClass = null);
            keypair.showDeleteKeyPairNoite(false);
            return keypair.delete_btn_view(false);
        });
    };
};
const initPopupArea = function () {
    const popItem = $('.activating.element').popup('hide');
    const inline = popItem.hasClass('inline');
    return popItem.popup({
        on: 'focus',
        movePopup: false,
        position: 'top left',
        inline: inline
    });
};
var view_layout;
(function (view_layout) {
    class view {
        constructor() {
            this.connectInformationMessage = new connectInformationMessage('/');
            this.sectionLogin = ko.observable(false);
            this.sectionAgreement = ko.observable(false);
            this.sectionWelcome = ko.observable(true);
            this.isFreeUser = ko.observable(true);
            this.QTTransferData = ko.observable(false);
            this.LocalLanguage = 'up';
            this.menu = Menu;
            this.modalContent = ko.observable('');
            this.keyPairGenerateForm = ko.observable();
            this.tLang = ko.observable(initLanguageCookie());
            this.languageIndex = ko.observable(lang[this.tLang()]);
            this.localServerConfig = ko.observable();
            this.keyPair = ko.observable(InitKeyPair());
            this.hacked = ko.observable(false);
            this.imapSetup = ko.observable();
            this.showIconBar = ko.observable(false);
            this.connectToCoNET = ko.observable(false);
            this.connectedCoNET = ko.observable(false);
            this.showKeyPair = ko.observable(false);
            this.CoNETConnectClass = null;
            this.imapFormClass = null;
            this.CoNETConnect = ko.observable(null);
            this.appMenuObj = {};
            this.bodyBlue = ko.observable(true);
            this.keyPairCalss = null;
            this.appsManager = ko.observable(null);
            this.AppList = ko.observable(false);
            this.imapData = null;
            this.newVersion = ko.observable(null);
            this.sessionHash = '';
            this.showLanguageSelect = ko.observable(true);
            this.socketListen();
        }
        afterInitConfig() {
            this.keyPair(this.localServerConfig().keypair);
            if (this.keyPair() && this.keyPair().keyPairPassword() && typeof this.keyPair().keyPairPassword().inputFocus === 'function') {
                this.keyPair().keyPairPassword().inputFocus(true);
                this.sectionLogin(false);
            }
        }
        initConfig(config) {
            const self = this;
            this.showKeyPair(true);
            if (config.keypair && config.keypair.publicKeyID) {
                /**
                 *
                 *      Key pair ready
                 *
                 */
                makeKeyPairData(this, config.keypair);
                if (!config.keypair.passwordOK) {
                    config.keypair.showLoginPasswordField(true);
                }
            }
            else {
                /**
                 *
                 *      No key pair
                 *
                 */
                this.clearImapData();
                config.keypair = null;
                let _keyPairGenerateForm = new keyPairGenerateForm(function (_keyPair, sessionHash) {
                    /**
                     *      key pair ready
                     */
                    makeKeyPairData(self, _keyPair);
                    _keyPair.passwordOK = true;
                    let keyPairPassword = _keyPair.keyPairPassword();
                    _keyPair.keyPairPassword(keyPairPassword = null);
                    config.keypair = _keyPair;
                    self.keyPair(_keyPair);
                    self.showKeyPair(false);
                    initPopupArea();
                    let uu = null;
                    self.imapSetup(uu = new imapForm(config.account, null, function (imapData) {
                        self.imapSetup(uu = null);
                        return self.imapSetupClassExit(imapData, sessionHash);
                    }));
                    return self.keyPairGenerateForm(_keyPairGenerateForm = null);
                });
                this.keyPairGenerateForm(_keyPairGenerateForm);
            }
            this.localServerConfig(config);
            this.afterInitConfig();
        }
        clearImapData() {
            let imap = this.imapSetup();
            this.imapSetup(imap = null);
        }
        socketListen() {
            let self = this;
            this.connectInformationMessage.sockEmit('init', (err, config) => {
                if (err) {
                    return;
                }
                return self.initConfig(config);
            });
            this.connectInformationMessage.socketIo.on('init', (err, config) => {
                if (err) {
                    return;
                }
                return self.initConfig(config);
            });
        }
        //          change language
        selectItem(that, site) {
            const tindex = lang[this.tLang()];
            let index = tindex + 1;
            if (index > 3) {
                index = 0;
            }
            this.languageIndex(index);
            this.tLang(lang[index]);
            $.cookie('langEH', this.tLang(), { expires: 180, path: '/' });
            const obj = $("span[ve-data-bind]");
            obj.each(function (index, element) {
                const ele = $(element);
                const data = ele.attr('ve-data-bind');
                if (data && data.length) {
                    ele.text(eval(data));
                }
            });
            $('.languageText').shape(`flip ${this.LocalLanguage}`);
            $('.KnockoutAnimation').transition('jiggle');
            return initPopupArea();
        }
        //          start click
        openClick() {
            if (!this.connectInformationMessage.socketIoOnline) {
                return this.connectInformationMessage.showSystemError();
            }
            this.sectionWelcome(false);
            /*
            if ( this.localServerConfig().firstRun ) {
                return this.sectionAgreement ( true )
            }
            */
            this.sectionLogin(true);
            return initPopupArea();
        }
        deletedKeypairResetView() {
            this.imapSetup(null);
        }
        agreeClick() {
            this.connectInformationMessage.sockEmit('agreeClick');
            this.sectionAgreement(false);
            this.localServerConfig().firstRun = false;
            return this.openClick();
        }
        refresh() {
            if (typeof require === 'undefined') {
                this.modalContent(infoDefine[this.languageIndex()].emailConform.formatError[11]);
                return this.hacked(true);
            }
            const { remote } = require('electron');
            if (remote && remote.app && typeof remote.app.quit === 'function') {
                return remote.app.quit();
            }
        }
        showKeyInfoClick() {
            this.sectionLogin(true);
            this.showKeyPair(true);
            this.AppList(false);
            this.appsManager(null);
        }
        imapSetupClassExit(_imapData, sessionHash) {
            const self = this;
            this.imapData = _imapData;
            this.sessionHash = sessionHash;
            return this.CoNETConnect(this.CoNETConnectClass = new CoNETConnect(_imapData.imapUserName, this.keyPair().verified, _imapData.confirmRisk, this.keyPair().email, function ConnectReady(err) {
                if (typeof err === 'number' && err > -1) {
                    self.CoNETConnect(this.CoNETConnectClass = null);
                    return self.imapSetup(this.imapFormClass = new imapForm(_imapData.account, null, function (imapData) {
                        self.imapSetup(this.imapFormClass = null);
                        return self.imapSetupClassExit(imapData, sessionHash);
                    }));
                }
                self.connectedCoNET(true);
                self.AppList(true);
                self.appsManager(new appsManager(self.appMenuObj));
                $('.dimmable').dimmer({ on: 'hover' });
                $('.comeSoon').popup({
                    on: 'focus',
                    movePopup: false,
                    position: 'top left',
                    inline: true
                });
                _view.connectInformationMessage.socketIo.removeEventListener('tryConnectCoNETStage', self.CoNETConnectClass.listenFun);
            }));
        }
        reFreshLocalServer() {
            location.reload();
        }
        homeClick() {
            this.AppList(true);
            this.sectionLogin(false);
            this.appsManager(new appsManager(this.appMenuObj));
            this.showKeyPair(false);
            $('.dimmable').dimmer({ on: 'hover' });
            $('.comeSoon').popup({
                on: 'focus',
                movePopup: false,
                position: 'top left',
                inline: true
            });
        }
    }
    view_layout.view = view;
})(view_layout || (view_layout = {}));
const _view = new view_layout.view();
ko.applyBindings(_view, document.getElementById('body'));
$(`.${_view.tLang()}`).addClass('active');
