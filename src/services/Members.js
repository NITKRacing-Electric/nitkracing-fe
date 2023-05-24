import Backend from "./backend";


class Members {
  constructor(){

  }

  static getMembers(){
    return Backend.get("/members")
  }

}

export default Members