export const Data = Array.from({length : 10}, (_, i) => i + 1).map((i) => (
    {
        id: i,
        time: '2023/03/10 01:45:30PM',
        measure: 30 + i,
    }
))