import { library } from '@fortawesome/fontawesome-svg-core';
import { faWallet, faAddressBook, google } from '@fortawesome/free-solid-svg-icons';

const icons = [faWallet, faAddressBook, google]

export function initialize() {
    return library.add(...icons);
};
