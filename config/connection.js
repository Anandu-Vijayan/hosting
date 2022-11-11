const mongoClient=require('mongodb').MongoClient
const state={
    db:null

}

module.exports.connect=function(done){
    const url='mongodb+srv://study:13795891303@cluster0.u9qwutp.mongodb.net/test'
    
    const dbname='liquor'



    mongoClient.connect(url,(err,data)=>{
        if(err) done(err)
        state.db=data.db(dbname)
        done()
    })


}
module.exports.get=function(){
    return state.db
}