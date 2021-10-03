const translate = require('@vitalets/google-translate-api');

async function translation(require,response){
    const {from,to,text} = require.body;
    await translate(text, {from:from, to:to}).then(res => {
        //Validation for typos
        if(res.from.text.autoCorrected){
            response.json({
                text:res.text,
                autoCorrected:res.from.text.autoCorrected,
                type:res.from.text.value,
                didYouMean:res.from.text.didYouMean,
            })
        }
        else{
            response.json({
                text:res.text,
                autoCorrected:res.from.text.autoCorrected,
                type:res.from.text.value,
                didYouMean:res.from.text.didYouMean,
            })
        }
    }).catch(err => {
        console.error(err);
    });
}

module.exports = translation;