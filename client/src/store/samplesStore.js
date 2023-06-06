import { makeAutoObservable } from 'mobx'

export default class samplesStore {
    constructor() {
        this._universities = []
        this._types = []
        this._lessons = []
        this._samples = []
        this._page = 1
        this._totalCount = 0
        this._limit = 9
        this._delete = 0

        this._selectedUniversity = {}
        this._selectedTypes = {}
        this._selectedLessons = {}
        makeAutoObservable(this)

    }

    setDelelete() {
        this._delete += 1;
    }
    setSelectedUniversity(university) {
        this.setPage(1)
        this._selectedUniversity = university
    }

    setSelectedTypes(type) {
        this.setPage(1)
        this._selectedTypes = type
    }

    setSelectedLessons(lesson) {
        this.setPage(1)
        this._selectedLessons = lesson
    }

    setUniversities(universities) {
        this._universities = universities
    }

    setTypes(types) {
        this._types = types
    }

    setLessons(lessons) {
        this._lessons = lessons
    }

    setSamples(samples) {
        this._samples = samples
    }

    setTotalCount(count) {
        this._totalCount = count
    }
    setPage(page) {
        this._page = page
    }

    get totalCount() {
        return this._totalCount
    }

    get delete() {
        return this._delete
    }
    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }

    get universities() {
        return this._universities
    }

    get types() {
        return this._types
    }
    get lessons() {
        return this._lessons
    }

    get samples() {
        return this._samples
    }

    get selectUniversity() {
        return this._selectedUniversity
    }

    get selectTypes() {
        return this._selectedTypes
    }

    get selectLessons() {
        return this._selectedLessons
    }
}