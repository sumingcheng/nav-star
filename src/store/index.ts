import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// 语言类型定义
type Language = 'zh' | 'en'

// 语言状态接口
interface LanguageState {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

// 创建语言状态管理store
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set((state) => ({ 
        language: state.language === 'zh' ? 'en' : 'zh' 
      })),
    }),
    {
      name: 'language-storage', // localStorage的键名
    }
  )
)
