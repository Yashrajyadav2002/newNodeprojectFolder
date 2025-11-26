class StuController{
    static getsessioninfo=(req,res)=>{
        console.log(req.session);
        console.log(req.session.id);
        console.log(req.session.cookie);
        console.log(req.session.cookie.maxAge);
        console.log(req.session.cookie.sessionmaxAge);
        console.log(req.sessionID);

        res.send("session info....")
    }


    static delete_session=(req,res)=>{
        req.session.destroy(()=>{
            console.log(`session Deleted ... canot ccess${req.sessionID}`);
        });
        res.send("session Deleatd !!")
    }
};

export default StuController;