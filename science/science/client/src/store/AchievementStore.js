import {makeAutoObservable} from "mobx";

export default class AchievementStore{
    constructor() {
        this._types = []
        this._subjects = []
        this._universities = []
        this._achievements = []
        this._selectedType = {}
        this._selectedSubject = {}
        this._selectedUniversity = {}
        this._page = 1
        this._totalCount = 0;
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setSubjects(subjects){
        this._subjects = subjects
    }
    setUniversities(universities){
        this._universities = universities
    }
    setAchievements(achievements){
        this._achievements = achievements
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedSubject(subject){
        this._selectedSubject = subject
    }
    setSelectedUniversity(university){
        this._selectedUniversity = university
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(totalCount){
        this._totalCount = totalCount
    }
    get types(){
        return this._types
    }
    get subjects(){
        return this._subjects
    }
    get universities(){
        return this._universities
    }
    get achievements(){
        return this._achievements
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedSubject(){
        return this._selectedSubject
    }
    get selectedUniversity(){
        return this._selectedUniversity
    }
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
}
