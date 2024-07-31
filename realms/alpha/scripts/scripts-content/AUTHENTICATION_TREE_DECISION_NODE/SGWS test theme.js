/*
  - The script should set outcome to either "employee" or "contractor" or "Error".
 */

//Add null check for all variables and nodestate
//Display error message on the screen if no user Type is set for the user.


var username = nodeState.get('_id')
logger.error("SGWS-Username:"+username);
var profile = idRepository.getIdentity(username);
logger.error("SGWS-Profile:"+profile);
var userType = profile.getAttributeValues('fr-attr-istr3')[0];

logger.error("SGWS-User Type:"+userType);


function setTheme(stage){
    outcome = "true";
            if(callbacks.isEmpty()){
                callbacksBuilder.pollingWaitCallback("2", "Please wait ...");
                logger.error("SGWS-After polling");
                action.goTo(outcome).withStage(stage);
                logger.error("SGWS-After action");
                }
}

 if(userType==="employee"){
            action.goTo('Employee');  
             
            var stage = "themeId=SGWStest";   //ESV to be used
            setTheme(stage);
            
 }else if(userType==="contractor"){
            action.goTo('Contractor');
            
            var theme = "themeId=Robroy";     //ESV to be used
            setTheme(theme);

    }else{
            alert("User Type is not set for the User");
            action.goTo('Error');
            
            logger.error("User Type is not set for the User");
    }

