import { library } from '@fortawesome/fontawesome-svg-core';
import { faWallet, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const icons = [faWallet, faAddressBook]

export function initialize() {
    return library.add(...icons);
};
