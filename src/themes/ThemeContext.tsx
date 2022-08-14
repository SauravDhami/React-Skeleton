import React, { createContext, useLayoutEffect, useMemo, useState } from 'react'

export interface ThemeContextProps {
  theme: string
  setTheme: (theme: string) => void
}

/**
 * Global Theme Context.
 */

export const GlobalThemeContext = createContext<ThemeContextProps>({
  theme: 'default',
  setTheme: () => {},
})

/**
 * Global Theme Context Provider.
 *
 * @param value string
 * @param children ReactNode
 * @returns ReactNode
 */
export const GlobalThemeContextProvider = ({
  value = 'default',
  children,
}: {
  value?: string
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState(value)

  useLayoutEffect(() => {
    const storeTheme = localStorage.getItem('theme')
    applyTheme(storeTheme || 'default')
  }, [])

  /**
   * Apply theme to 'html' tag on DOM.
   *
   * @param themeValue string
   */
  const applyTheme = (themeValue = 'default') => {
    const newTheme = themeValue
    const html = document.getElementsByTagName('html')[0]
    localStorage.setItem('theme', themeValue)
    ;(html as any).setAttribute('data-theme', newTheme)
  }

  /**
   * Handle Theme change.
   *
   * @param themeValue string
   */
  const handleThemeChange = (themeValue: string) => {
    setTheme(themeValue)
    applyTheme(themeValue)
  }

  /**
   * Current context value for theme.
   */
  const val = useMemo(
    () => ({
      theme,
      setTheme: handleThemeChange,
    }),
    [theme],
  )

  return <GlobalThemeContext.Provider value={val}>{children}</GlobalThemeContext.Provider>
}
