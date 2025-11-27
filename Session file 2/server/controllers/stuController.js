class StudentController{
    static getSessioninfo=(req,res)=>{
        console.log(req.session);
        console.log(req.session.id);
        console.log(req.session.cookie);
        console.log(req.session.cookie.maxAge);
        console.log(req.session.cookie.originalmaxAge);
        console.log(req.sessionID);
        res.send("session info...")
    }

    static delete_session = (req,res)=>{
        req.session.destroy(()=>{
            console.log(`session Deleted succesFully !!`)
        });
        res.send("session deleted !!")
    };

    static regn_session =(req,res)=>{
        req.session.regenerate(()=>{
            console.log(`session regenerated New session Id ${req.session.id}`);
        });
        res.send("Sesssion Regenerated !!")
    } ;

    static session_example = (req,res)=>{
        req.session.device='mobile';
        if(req.session.count)
        {
            req.session.count++;
        }
        else{
            req.session.count=1;
        }
        res.send(`count : ${req.session.count}`)
    }

    static get_session_data = (req,res)=>{
        if (req.session.device)
        {
            res.send(`device : ${req.session.device} count : ${req.session.count}`);
        }
        else{
            console.log("No device found");
            res.send("No Device Founded")
        }
    }
}

export default StudentController;