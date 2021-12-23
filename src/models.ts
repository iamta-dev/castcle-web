export interface Telephone {
    country: string;
    code: string;
    phoneNumber: string;
}

export interface Country {
    code: string;
    dialCode: string;
    name: string;
    flag: string;
}
export interface DropdownOption {
    label: string,
    value: any
}
export interface Register {
    telephone: Telephone,
    otpCode: string
}

