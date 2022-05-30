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

export const createExhibition = async (exhibition) => {
    const {data} = await $authHost.post('api/exhibition',exhibition)
    return data
}

export const fetchExhibitions = async (typeId, subjectId, universityId) =>{
    const {data} = await $host.get('api/exhibition', {params:{
            typeId,subjectId, universityId
        }})
    return data
}

export const fetchOneExhibition = async (id) => {
    const {data} = await $host.get('api/exhibition/' + id)
    return data
}

