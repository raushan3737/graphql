export interface Tweet {
  id: string
  body?: string | null
  date?: Date | null
  author: User
  stats: Stat
}

export interface User {
  id: string
  username?: string | null
  first_name?: string | null
  last_name?: string | null
  full_name?: string | null
  name?: string | null
  avatar_url?: Url | null
}

export interface Stat {
  views?: number | null
  likes?: number | null
  retweets?: number | null
  responses?: number | null
}

export interface Notification {
  id?: string | null
  date?: Date | null
  type?: string | null
}

export interface Meta {
  count?: number | null
}

export type Url = string

export type Date = string
