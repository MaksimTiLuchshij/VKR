import {$authHost, $host} from "./index";

export const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
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

export const createArticle = async (article) => {
    const {data} = await $authHost.post('api/article',article)
    return data
}

export const fetchArticles = async (typeId, subjectId, universityId) =>{
    const {data} = await $host.get('api/article', {params:{
            typeId,subjectId, universityId
        }})
    return data
}

export const fetchOneArticle = async (id) => {
    const {data} = await $host.get('api/article/' + id)
    return data
}

