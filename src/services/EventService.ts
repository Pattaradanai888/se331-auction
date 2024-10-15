import axios, { type AxiosResponse } from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: Number, page: Number) {
    return apiClient.get('/auctions?_limit=' + perPage + '&_page=' + page)
  },
  getEventsByKeyword(keyword: string, perPage: number,page: number) : Promise<AxiosResponse<Event[]>> {
    return apiClient.get<Event[]>('/auctions?description=' + keyword + '&_limit='+ perPage + '&_page=' + page)
  },
}
