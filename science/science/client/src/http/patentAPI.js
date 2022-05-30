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

export const createPatent = async (patent) => {
    const {data} = await $authHost.post('api/patent',patent)
    return data
}

export const fetchPatents = async (typeId, subjectId, universityId) =>{
    const {data} = await $host.get('api/patent', {params:{
            typeId,subjectId, universityId
        }})
    return data
}

export const fetchOnePatent = async (id) => {
    const {data} = await $host.get('api/patent/' + id)
    return data
}
