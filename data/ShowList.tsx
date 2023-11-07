export const ShowList = (input: any) => ([
    
    {
        name: '작성자',
        data: `${input.name}(${input.id})`
    },
    {
        name: '팀명',
        data: input.team
    },
    {
        name: '날짜',
        data: input.date
    },
    {
        name: '측정 지역',
        data: `${input.sido} ${input.sigungu} ${input.dong}`
    },
    {
        name: '측정 단말',
        data: input.phonetype
    },
    {
        name: '실내외',
        data: input.in_out
    },
    {
        name: 'DL속도',
        data: input.dl
    },
    {
        name: 'UL속도',
        data: input.ul
    },
])