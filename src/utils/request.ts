import request from 'umi-request'
import qs from 'qs'
import { message } from 'antd'
import type { RequestOptionsInit } from 'umi-request'
import type { MessageType } from 'antd/lib/message'

type IResponse<T> = {
  data: T
  status: number
}

let msg: MessageType | null = null

type ToastType = {
  type: 'warn' | 'error'
  content: string
}

const toast = ({ type, content }: ToastType) => {
  if (!msg) {
    msg = message[type](content)
    setTimeout(() => {
      msg?.()
      msg = null
    }, 3000)
  }
}

request.interceptors.response.use(async (response) => {
  const res = await response.clone().json()
  if (res?.status === '未登录状态码') {
    // 未登录
  }
  return response
})

function fetch<T>(url: string, options: RequestOptionsInit) {
  return request<IResponse<T>>(url, {
    credentials: 'include',
    errorHandler: () => {
      toast({
        type: 'error',
        content: '出错了，请稍后重试',
      })
    },
    ...options,
  })
}

export function get<T>(url: string, params?: Record<string, any>) {
  return fetch<T>(url, {
    method: 'get',
    params,
  })
}

export function post<T>(url: string, params?: Record<string, any>) {
  return fetch<T>(url, {
    method: 'post',
    body: qs.stringify(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

export function postForm<T>(url: string, params?: Record<string, any>) {
  const formData = new FormData()
  if (params) {
    Object.keys(params).forEach((key) => {
      formData.append(key, params[key])
    })
  }
  return fetch<T>(url, {
    method: 'post',
    body: formData,
  })
}
