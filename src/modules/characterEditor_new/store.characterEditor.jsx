import { makeAutoObservable } from "mobx"


class CharacterEditorStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    show = true
    state = {
        input_editor_face: [
            {value: 0 }, //Eyebrow height
            {value: 0 }, //Eyebrow depth

            
            {value: 0 }, //Cheekbone height
            {value: 0 }, //Cheekbone width
            {value: 0 }, //Cheek depth

            {value: 0 }, //Jaw width
            {value: 0 }, //Jaw shape
            {value: 0 }, //Chin height
            {value: 0 }, //Chin width
            {value: 0 }, //Chin depth
            {value: 0 }, //Chin padding
            {value: 0 }, //Neck girth
        ],
        input_editor_nose: [
            {value: 0 }, //Nose width
            {value: 0 }, //Nose height
            {value: 0 }, //Nose tip length
            {value: 0 }, //Nose tip height
            {value: 0 }, //Nose Bridge depth
            {value: 0 }, //Broken nose
        ],
        input_editor_eyes_lips: [
            {value: 0 }, //Epicanthus
            {value: 0 }, //Lip thickness
        ],
        input_editor_face_last: [
            {maxVal: 72, index_help: 1 }, //Hairstyle
            {maxVal: 72, index_help: 0 }, //Hairstyle style
            {maxVal: 64, index_help: 0 }, // Hair color
            {maxVal: 64, index_help: 0 }, //Highlighting of hair
            {maxVal: 31, index_help: 0 }, //Type of eyebrows
            {maxVal: 64, index_help: 0 }, //Eyebrow color
            {maxVal: 32, index_help: 0 }, //Eyes color
            {maxVal: 17, index_help: 0 }, //Freckles
        ],
        cheked_sex: false,
        slider: [
            {index_help: 0},// мать
            {index_help: 0},// отец
            {index_help: 10}, //сходство
            {index_help: 10} // кожа
        ],
        stats_parents: [[ //22
            { endurance: 5, strength: 15, shooting: 10, stealth: 25, flying: 45, driving: 5, psychics: 5 },
            { endurance: 15, strength: 25, shooting: 50, stealth: 15, flying: 10, driving: 40, psychics: 50 },
            { endurance: 5, strength: 25, shooting: 10, stealth: 20, flying: 50, driving: 5, psychics: 15 },
            { endurance: 50, strength: 10, shooting: 15, stealth: 25, flying: 45, driving: 20, psychics: 50 },
            { endurance: 25, strength: 30, shooting: 35, stealth: 5, flying: 20, driving: 30, psychics: 45 },
            { endurance: 30, strength: 40, shooting: 35, stealth: 50, flying: 15, driving: 25, psychics: 50 },
            { endurance: 30, strength: 50, shooting: 35, stealth: 5, flying: 25, driving: 30, psychics: 50 },
            { endurance: 45, strength: 10, shooting: 20, stealth: 30, flying: 40, driving: 15, psychics: 50 },
            { endurance: 10, strength: 35, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 20 },
            { endurance: 15, strength: 35, shooting: 35, stealth: 10, flying: 10, driving: 35, psychics: 40 },
            { endurance: 35, strength: 35, shooting: 25, stealth: 40, flying: 30, driving: 25, psychics: 50 },
            { endurance: 20, strength: 40, shooting: 45, stealth: 5, flying: 15, driving: 10, psychics: 35 },
            { endurance: 25, strength: 45, shooting: 5, stealth: 50, flying: 20, driving: 35, psychics: 50 },
            { endurance: 10, strength: 20, shooting: 5, stealth: 20, flying: 5, driving: 50, psychics: 10 },
            { endurance: 40, strength: 5, shooting: 30, stealth: 40, flying: 30, driving: 25, psychics: 50 },
            { endurance: 10, strength: 10, shooting: 20, stealth: 35, flying: 35, driving: 20, psychics: 30 },
            { endurance: 40, strength: 30, shooting: 25, stealth: 35, flying: 35, driving: 20, psychics: 50 },
            { endurance: 20, strength: 25, shooting: 45, stealth: 10, flying: 15, driving: 35, psychics: 50 },
            { endurance: 25, strength: 15, shooting: 20, stealth: 10, flying: 40, driving: 15, psychics: 25 },
            { endurance: 50, strength: 20, shooting: 15, stealth: 25, flying: 45, driving: 10, psychics: 50 },
            { endurance: 5, strength: 25, shooting: 10, stealth: 35, flying: 50, driving: 5, psychics: 30 },
            { endurance: 15, strength: 30, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 15 },
        ], [ //24
            { endurance: 25, strength: 15, shooting: 20, stealth: 10, flying: 40, driving: 15, psychics: 25 },
            { endurance: 20, strength: 25, shooting: 45, stealth: 10, flying: 15, driving: 35, psychics: 50 },
            { endurance: 40, strength: 30, shooting: 25, stealth: 35, flying: 35, driving: 20, psychics: 50 },
            { endurance: 10, strength: 10, shooting: 20, stealth: 35, flying: 35, driving: 20, psychics: 30 },
            { endurance: 40, strength: 5, shooting: 30, stealth: 40, flying: 30, driving: 25, psychics: 50 },
            { endurance: 10, strength: 20, shooting: 5, stealth: 20, flying: 5, driving: 50, psychics: 10 },
            { endurance: 25, strength: 45, shooting: 5, stealth: 50, flying: 20, driving: 35, psychics: 50 },
            { endurance: 20, strength: 40, shooting: 45, stealth: 5, flying: 15, driving: 10, psychics: 35 },
            { endurance: 35, strength: 35, shooting: 25, stealth: 40, flying: 30, driving: 25, psychics: 50 },
            { endurance: 15, strength: 35, shooting: 35, stealth: 10, flying: 10, driving: 35, psychics: 40 },
            { endurance: 10, strength: 35, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 20 },
            { endurance: 45, strength: 10, shooting: 20, stealth: 30, flying: 40, driving: 15, psychics: 50 },
            { endurance: 30, strength: 50, shooting: 35, stealth: 5, flying: 25, driving: 30, psychics: 50 },
            { endurance: 30, strength: 40, shooting: 35, stealth: 50, flying: 15, driving: 25, psychics: 50 },
            { endurance: 25, strength: 30, shooting: 35, stealth: 5, flying: 20, driving: 30, psychics: 45 },
            { endurance: 50, strength: 10, shooting: 15, stealth: 25, flying: 45, driving: 20, psychics: 50 },
            { endurance: 5, strength: 25, shooting: 10, stealth: 20, flying: 50, driving: 5, psychics: 15 },
            { endurance: 15, strength: 25, shooting: 50, stealth: 15, flying: 10, driving: 40, psychics: 50 },
            { endurance: 5, strength: 15, shooting: 10, stealth: 25, flying: 45, driving: 5, psychics: 5 },
            { endurance: 15, strength: 30, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 15 },
            { endurance: 20, strength: 35, shooting: 45, stealth: 10, flying: 15, driving: 25, psychics: 50 },
            { endurance: 5, strength: 25, shooting: 10, stealth: 35, flying: 50, driving: 5, psychics: 30 },
            { endurance: 20, strength: 50, shooting: 25, stealth: 25, flying: 30, driving: 40, psychics: 50 },
            { endurance: 50, strength: 20, shooting: 15, stealth: 25, flying: 45, driving: 10, psychics: 50 },
        ]],
        stats: { endurance: 0, strength: 0, shooting: 0, stealth: 0, flying: 0, driving: 0, psychics: 0 },
        info_character: {
            first_name: '',
            last_name: '',
            old: '',
        }, 
        validInfo: {}
    }
    saveCustomization() {
        if(this.state.validInfo.name && this.state.validInfo.surname && this.state.validInfo.age) {
            try {
                mp.trigger('client:events:custom:set' // eslint-disable-line
                    , JSON.stringify(this.state.input_editor_face), JSON.stringify(this.state.input_editor_nose)
                    , JSON.stringify(this.state.input_editor_eyes_lips), JSON.stringify(this.state.input_editor_face_last), this.state.cheked_sex
                    , this.state.slider[0].index_help, this.state.slider[1].index_help, this.state.slider[2].index_help, this.state.slider[3].index_help, true,  this.state.info_character)
    
                mp.trigger('client:events:custom:save', // eslint-disable-line
                    this.state.stats.endurance, this.state.stats.driving, this.state.stats.flying, this.state.stats.psychics, this.state.stats.shooting, this.state.stats.stealth, this.state.stats.strength);
                
                mp.trigger('client:events:custom:choiceRole', // eslint-disable-line
                    0)
            } catch (e) {
                console.log('save', e);
            }
        }
    }
    setCustomization() {
        try {
            mp.trigger('client:events:custom:set' // eslint-disable-line
                , JSON.stringify(this.state.input_editor_face), JSON.stringify(this.state.input_editor_nose)
                , JSON.stringify(this.state.input_editor_eyes_lips), JSON.stringify(this.state.input_editor_face_last), this.state.cheked_sex
                , this.state.slider[0].index_help, this.state.slider[1].index_help, this.state.slider[2].index_help, this.state.slider[3].index_help, false)
        } catch (e) {
            console.log('set',e);
        }
    }
    setSex() {
        try {
            mp.trigger('client:events:custom:setSex' // eslint-disable-line
                , this.state.cheked_sex)
        } catch (e) {
            console.log('set sex',e);
        }
    }
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    randomize() {
        for (let i = 0; i < this.state.input_editor_face.length; i++) {
            this.state.input_editor_face[i].value = this.getRandomArbitrary(-100, 100)
        };
        for (let i = 0; i < this.state.input_editor_nose.length; i++) {
            this.state.input_editor_nose[i].value = this.getRandomArbitrary(-100, 100)
        };
        for (let i = 0; i < this.state.input_editor_eyes_lips.length; i++) {
            this.state.input_editor_eyes_lips[i].value = this.getRandomArbitrary(-100, 100)
        };
        for (let i = 0; i < this.state.input_editor_face_last.length; i++) {
            this.state.input_editor_face_last[i].index_help = this.getRandomArbitrary(0, this.state.input_editor_face_last[i].maxVal)
        };
        this.state.slider[0].index_help = this.getRandomArbitrary(0, 24)
        this.state.slider[1].index_help = this.getRandomArbitrary(0, 22)
        this.state.slider[2].index_help = this.getRandomArbitrary(0, 20)
        this.state.slider[3].index_help = this.getRandomArbitrary(0, 20)
        setTimeout(() => {
            this.setCustomization();
        }, 40);
    }
    resetEditorCharacter(i) {
        let copy;
        switch (i) {
            case 1:
                copy = this.state.input_editor_face;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                this.state.input_editor_face =copy
                break;
            case 2:
                copy = this.state.input_editor_nose;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                this.state.input_editor_nose = copy
                copy = this.state.input_editor_eyes_lips;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                this.state.input_editor_eyes_lips = copy
                break;
            case 3:
                copy = this.state.input_editor_face_last;
                for (i = 0; i < copy.length; i++) {
                    copy[i].index_help = 0
                }
                this.state.input_editor_face_last = copy
                break;
            default:
                break;
        }
        this.setCustomization();
    }
    resetDefaut() {
        this.resetEditorCharacter(1)
        this.resetEditorCharacter(2)
        this.resetEditorCharacter(3)
    }
}

export default new CharacterEditorStore()