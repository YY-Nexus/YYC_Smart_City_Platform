export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Service {
  id: string
  title: string
  description: string
  category: string
  price?: number
  rating?: number
}

export interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  actions?: ActionButton[]
}

export interface ActionButton {
  label: string
  action: string
  icon?: string
}

export interface AssistantState {
  isListening: boolean
  isThinking: boolean
  isSpeaking: boolean
  mood: "happy" | "thinking" | "helpful" | "concerned"
}

export interface CalendarEvent {
  id: string
  title: string
  date: string
  type: "festival" | "birthday" | "appointment"
}
