export const componentStatuses = ['info', 'success', 'warning', 'error'] as const

export const brandColors = ['primary', 'secondary', 'accent'] as const

export const componentColors = [...brandColors, 'ghost', ...componentStatuses] as const

export const componentSizes = ['lg', 'md', 'sm', 'xs'] as const
