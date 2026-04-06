export interface Menuitem {
    id: string;
    createdOn: number;
    title: string;
    imageSource: ImageSource;
    description: string;
    price: string;
    category: string;
}

export interface Settings {
    bannerMessage: string;
    mainBlurb: string;
    phone: string;
    email: string;
    address: string;
    instagram: string;
    facebook: string;
    tiktok: string;
    hoursMonday: string;
    hoursTuesday: string;
    hoursWednesday: string;
    hoursThursday: string;
    hoursFriday: string;
    hoursSaturday: string;
    hoursSunday: string;
}

export interface ImageSource {
    originalName: string;
    uuidName: string;
}

export interface ThemeSettings {
    bannerImage: ImageSource;
    selectedTheme: Theme;
}

export interface Theme {
    themeName: string;
    backgroundColor: string;
    textColor: string;
    linkColor: string;
    accentColor: string;
    buttonColor: string;
    buttonTextColor: string;
}

export interface MenuCategory {
    category: string;
    menuitems: Menuitem[];
}
