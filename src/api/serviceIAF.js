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
            obj.name ? [...res, this._transformCharacter(obj)] : [...res]
        , []);
    };

    getCharacter = async (id = 1) => {
        const res = await this.getResourse(`/${id}`);
        return this._transformCharacter(res);
    };

    _extractId = (url) => {
        return url.match(/\/([0-9]*)$/)[1];
    };

    _transformCharacter = (obj) => {
        const noInfo = 'No info';
        const id = this._extractId(obj.url);
        return { id,
            name: obj.name ? obj.name : noInfo, 
            gender: obj.gender ? obj.gender : noInfo, 
            born: obj.born ? obj.born : noInfo, 
            culture: obj.culture ? obj.culture : noInfo
        };
    };
}