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

export const createGrant = async (grant) => {
    const {data} = await $authHost.post('api/grant',grant)
    return data
}

export const fetchGrants = async (typeId, subjectId, universityId) =>{
    const {data} = await $host.get('api/grant', {params:{
            typeId,subjectId, universityId
        }})
    return data
}

export const fetchOneGrant = async (id) => {
    const {data} = await $host.get('api/grant/' + id)
    return data
}
