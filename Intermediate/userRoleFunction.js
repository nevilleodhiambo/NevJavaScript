function getUserRole(name, role){
    switch(role){
        case "admin":
            console.log("Have Access To All Of The Things")
            return `${name} is admin with all the access`;
        break;
        
        case "subadmin":
            console.log("Have Access To All Of The Things")
            return `${name} is subadmin with access to create and delete`;

        break;
        case "testprep":
            console.log("Have Access To All Of The Things");
            return `${name} is testprep with access to create and delete test`;

        break;
        case "user":
            // console.log("Have Access To All Of The Things")
            return `${name} is user who consume the content`;

        break;

        default:
            return `${name} is a trial user`;

            break;
    }
}

var neville = getUserRole("Neville", "testprep");
console.log(neville);
