import { get } from '@/utils/request'
import host from './host'

const { env } = host

export type AccountType = {
  headPic: string
  account: string
  shopName: string
}

export type MoneyType = {
  balance: number
  frozen: number
  todayExpenditure: number
}

export const fetchAccountApi = () => {
  return get<{
    accountData: AccountType
    money: MoneyType
  }>(`${env}/v4/admanager/account`)
}
