
export const DATE_RANGES = {
    MIN: '2022-02-01',
    MAX: '2022-02-02',
    forDate(type: 'MIN' | 'MAX') {
        const [year, month, day] = this[type].split('-').map(Number)
        return new Date(year, month - 1, day)
    },
    parseDate(dateString: string) {
        const [year, month, day] = dateString.split('-').map(Number)
        return new Date(year, month + 1, day + 1).toLocaleDateString('fr-ca')
    }
} as const