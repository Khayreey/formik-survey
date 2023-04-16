
interface Country {
    country: string
    cities: string[]
}

export const countriesData: Country[] = [
    {
        country: "Egypt",
        cities: ["Cairo", "Zagazig", "Alexandria", "Wadi El Gdeed", "Al Giza", "Al Behera", "Banha"]
    },
    {
        country: 'India',
        cities: ["Mumbai", "Bangalore", "Vadodara", "Lucknow", "Kolkata", "Patna"]
    },
    {
        country: 'UK',
        cities: ['Los Angoles', 'New York']
    }
]

export const listOfCountries = () => {
    return countriesData.map((e) => e.country)
}
