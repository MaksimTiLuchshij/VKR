import {makeAutoObservable} from "mobx";

export default class PatentStore{
    constructor() {
        this._types = []
        this._subjects = []
        this._universities = []
        this._patents = []
        this._selectedType = {}
        this._selectedSubject = {}
        this._selectedUniversity = {}
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
    setPatents(patents){
        this._patents = patents
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
    get types(){
        return this._types
    }
    get subjects(){
        return this._subjects
    }
    get universities(){
        return this._universities
    }
    get patents(){
        return this._patents
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
}
