const axios = require("axios");
const cheerio = require("cheerio");

const headers = {
    'x-hasura-admin-secret': 'jXQlD41n04b2CRALipW5VlSuu5Jc28xiYLWHhHNl82tbkbqarkcRp3scC13FZqls'
};
module.exports = {
    async postLastPatchVersion(newVersion) {
        try {
            console.log('newVersion', newVersion);
            const response = await axios.post(`https://cosmic-muskox-80.hasura.app/api/rest/version?version_id=${newVersion}`, {}, {
                headers: headers
            });
            console.log('Response: ', response);
            return response;
        } catch (error) {
            return error;
        }
    },
    async getAllPatchVersions() {
        try {
            const response = await axios.get("https://cosmic-muskox-80.hasura.app/api/rest/version", {
                headers: headers
            });
            //console.log(response.data);
            const versions = response.data.version;
            let lastVersion;
            if (versions.length > 0) {
                lastVersion = versions[versions.length - 1].version_name;
            } else {
                lastVersion = "Ainda não tem versão cadastrada";
            }
            return lastVersion;
        } catch (error) {
            return error;
        }
    },
    async updateVersion(){

    },
    async getLastPatchVersion() {
        try {
            const response = await axios.get("https://br.leagueoflegends.com/pt-br/news/tags/patch-notes");
            var $ = cheerio.load(response.data);
            var notes = $('.style__List-sc-3mnuh-2 li a article div div h2').first().text();
            const data = notes.split(' ');
            // await this.getAllPatchVersions().then(async lastVersion => {
            //     console.log('lastVersion: ', lastVersion);
            //     if (data[data.length - 1] !== lastVersion) {
            //         console.log('Versões diferentes, atualizando...');
            //         this.postLastPatchVersion(data[data.length - 1]).then(postResponse => {
            //             console.log(postResponse);
            //         });
            //         typeReturn = data[data.length - 1];
            //     } else{
            //         typeReturn = lastVersion;
            //     }
            // });
            return data[data.length - 1];

        } catch (error) {
            console.log(error);
            return error;
        }
    }
}