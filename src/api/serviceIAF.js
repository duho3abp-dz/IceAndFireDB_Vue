export default class ServiceIAF {
    _url = 'https://www.anapioficeandfire.com/api/characters'

    getResourse = async (path) => {
        const result = await fetch(`${this._url}/${path}`);

        if (!result.ok) throw new Error(
            `Could not fetch ${this._url}${path}, status ${result.status}`
        );

        return await result.json();
    };

    getAllCharacters = async (page = 3) => {
        const result = await this.getResourse(`?page=${page}&pageSize=10`);
        return result.reduce((res, obj) => 
            obj.name ? [...res, this._transformAllCharacters(obj)] : [...res]
        , []);
    };

    getPerson = async (id = 14) => {
        const result = await this.getResourse(`/${id}`);
        return this._transformPerson(result);
    };

    _extractId = (url) => {
        return url.match(/\/([0-9]*)$/)[1];
    };

    _transformAllCharacters = (obj) => {
        const noInfo = 'No info';
        const id = this._extractId(obj.url);
        return { id,
            name: obj.name ? obj.name : noInfo, 
            gender: obj.gender ? obj.gender : noInfo, 
            born: obj.born ? obj.born : noInfo, 
            culture: obj.culture ? obj.culture : noInfo
        };
    };

    _transformPerson = (obj) => {
        const noInfo = 'No info';
        return {
            name: obj.name ? obj.name : noInfo, 
            info: {
                gender: obj.gender ? obj.gender : noInfo, 
                born: obj.born ? obj.born : noInfo, 
                culture: obj.culture ? obj.culture : noInfo,
                died: obj.died ? obj.died : noInfo,
                father: obj.father ? obj.father : noInfo,
                mother: obj.mother ? obj.mother : noInfo
            }
        };
    };
}