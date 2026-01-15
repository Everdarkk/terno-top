type Plan = {
    id: number,
    title: string,
    iconUrl: string
}

export const first: Plan ={
    id: 1,
    title: 'Встановлення потреби за медичними показаннями',
    iconUrl: '/images/utils/diagnosis.png'
}
    
export const second: Plan = {
    id: 2,
    title: 'Подання документів на отримання ДЗР',
    iconUrl: '/images/utils/licensing.png'
}
    
export const third: Plan = {
    id: 3,
    title: 'Вибір підприємства-виробника',
    iconUrl: '/images/utils/choice.png'
}