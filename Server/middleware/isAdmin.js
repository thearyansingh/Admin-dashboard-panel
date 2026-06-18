const isAdmin=(req,res,next)=>{
    try {
      if(req.user.userRole!=="admin") {
          return res.status(403).json({
            message:"user is not admin , access denied"
          })
      }
      next()
    } catch (error) {
      return res.status(500).json({message:"internal server error",error})  
    }

}
export default isAdmin
