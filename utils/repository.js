const axios = require("axios");
const cheerio = require("cheerio");

const headers = {
    'x-hasura-admin-secret': process.env.HASURA_TOKEN
};
module.exports = {
    async postLastPatchVersion(newVersion, database) {
        //console.log('postLastPatchVersion');
        try {
            const response = await database.ref('version/').set({
                versionName: newVersion
            });
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    },
    async getAllPatchVersions(database) {
        try {            
            const storedVersion = database.ref('version/versionName');
            let lastVersion = storedVersion.get().then((snapshot)=>{
                if(snapshot.exists()){
                    return snapshot.val();
                } else {
                    console.log('no data available');
                    return "Ainda não tem versão cadastrada"
                }
            });
            return lastVersion;
        } catch (error) {
            return error;
        }
    },
    async updateVersion() {

    },
    async getLastPatchVersion() {
        try {
            const response = await axios.get("https://br.leagueoflegends.com/pt-br/news/tags/patch-notes");
            var $ = cheerio.load(response.data);
            var notes = $('.style__List-sc-3mnuh-2 li a article div div h2').first().text();
            const data = notes.split(' ');
            return data[data.length - 1];

        } catch (error) {
            console.log(error);
            return error;
        }
    }
}