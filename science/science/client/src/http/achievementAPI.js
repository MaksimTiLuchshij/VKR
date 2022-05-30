import {$authHost, $host} from "./index";

export const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
    return data
}

export const createSubject = async (subject) => {
    const {data} = await $authHost.post('api/subject',subject)
    return data
}

export const fetchSubjects = async () =>{
    const {data} = await $host.get('api/subject')
    return data
}

export const fetchUniversities = async () =>{
    const {data} = await $host.get('api/university')
    return data
}

export const createAchievement = async (achievement) => {
    const {data} = await $authHost.post('api/achievement',achievement)
    return data
}

export const fetchAchievements = async (typeId, subjectId, universityId) =>{
    const {data} = await $host.get('api/achievement', {params:{
        typeId,subjectId, universityId
        }})
    return data
}

export const fetchOneAchievement = async (id) => {
    const {data} = await $host.get('api/achievement/' + id)
    return data
}

