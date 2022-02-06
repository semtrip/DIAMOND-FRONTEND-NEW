import { makeAutoObservable } from "mobx"


class CharacterSelectionStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state = {
        info_player: [
            {
                name: "Nika Kondr1",
                id: '8317',
                timePlay: '23ч 15м 30с',
                fraction: 'GOV',
                money: "2500",
                date: "01.08.1998",
                exitLocation: 'Location',
                spawn: ["Дом", "Квартира", "Бомж"],
                index_spawn: 0
            },
            {
                name: "Nika Kondr2",
                id: '8317',
                timePlay: '23ч 15м 30с',
                fraction: 'GOV',
                money: "2500",
                date: "01.08.1998",
                exitLocation: 'Location',
                spawn: ["Дом", "Квартира", "Бомж"],
                index_spawn: 0
            },
            // {
            //     name: "Nika Kondr3",
            //     id: '8317',
            //     timePlay: '23ч 15м 30с',
            //     fraction: 'GOV',
            //     money: "2500",
            //     date: "01.08.1998",
            //     exitLocation: 'Location',
            //     spawn: ["Дом", "Квартира", "Бомж"],
            //     index_spawn: 0
            // }
        ]
    }
    setPage = (IdPage, id) => {
        this.state.info_player[IdPage].index_spawn = id
    }
    selectCharacter = (id) => {
        try {
            mp.trigger('client:events:selectPlayer', this.state.info_player[id].name, this.state.info_player[id].spawn[this.state.info_player[id].index_spawn]); // eslint-disable-line
        }
        catch (e) {
            console.log('client:events:selectPlayer', this.state.info_player[id].name, this.state.info_player[id].spawn[this.state.info_player[id].index_spawn]) 
        }
        
    }
    createCharacter = () => {
        try {
            mp.trigger('client:events:createNewPlayer'); // eslint-disable-line
        }
        catch (e) {
            console.log('client:events:createNewPlayer');
        }
    }
}
export default new CharacterSelectionStore()