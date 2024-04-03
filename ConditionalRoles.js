var user = "user";

switch(user){
    case "admin":
     console.log("You get the full access");
        break;
    case "subadmin":
     console.log("You get the access to create/delete");
        break;
    case "testprep":
     console.log("You get the access to create/delete");
        break;
    case "user":
     console.log("get access to consume the content");
        break;

        default:
            console.log("Trial User");
            break;
}