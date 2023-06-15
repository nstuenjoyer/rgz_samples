import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'


export const createUniversitet = async (university) => {
    const { data } = await $authHost.post('api/university', university)
    return data
}

export const fetchUniversities = async () => {
    const { data } = await $host.get('api/university')

    return data
}

export const deleteUniversities = async (id) => {
    const { data } = await $authHost.delete('api/university', { params: { id } })
    return data
}

export const createLesson = async (lesson) => {
    const { data } = await $authHost.post('api/lesson', lesson)
    return data
}

export const fetchLessons = async () => {
    const { data } = await $host.get('api/lesson')

    return data
}
export const deleteLessons = async (id) => {
    const { data } = await $authHost.delete('api/lesson', { params: { id } })
    return data
}

export const createType = async (type) => {
    const { data } = await $authHost.post('api/sampletypes', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/sampletypes')

    return data
}

export const deleteTypes = async (id) => {
    const { data } = await $authHost.delete('api/sampletypes', { params: { id } })
    return data
}


export const createSample = async (sample) => {
    const { data } = await $authHost.post('api/docsample', sample)
    return data
}

export const fetchSamples = async (sampleTypeId, LessonId, universityId, page, limit) => {
    const { data } = await $host.get('api/docsample', { params: { sampleTypeId, LessonId, universityId, page, limit } })

    return data
}

export const deleteSample = async (id, docx_sample) => {
    const { data } = await $authHost.delete('api/docsample', { params: { id, docx_sample } })
    console.log(data)
    return data
}

