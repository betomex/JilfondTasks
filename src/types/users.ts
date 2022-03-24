type UserGeoType = {
  lat: string
  lng: string
}

type UserAddressType = {
  city: string
  geo: UserGeoType
  street: string
  suite: string
  zipcode: string
}

type UserCompanyType = {
  bs: string
  catchPhrase: string
  name: string
}

export type UserType = {
  address: UserAddressType
  company: UserCompanyType
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}