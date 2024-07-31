/*
  - Data made available by nodes that have already executed are available in the sharedState variable.
  - The script should set outcome to either "true" or "false".
 */
var javaImports = JavaImporter(org.forgerock.openam.auth.node.api.Action,org.forgerock.openam.authentication.callbacks.PollingWaitCallback);

var username = nodeState.get('_id')
logger.error("SGWS-Username:"+username);
var profile = idRepository.getIdentity(username);
logger.error("SGWS-Profile:"+profile);
var userType = profile.getAttributeValues('fr-attr-istr3')[0];
var themeId_employee = "SGWStest";
var themeId_contractor = "Robroy";
var empstage = JSON.stringify({themeId_employee: themeId_employee});
var contstage = JSON.stringify({themeId_contractor: themeId_contractor});
logger.error("SGWS-User Type:"+userType);
 if(userType==="employee"){
       //action.goTo('Employee');
       action = javaImports.Action.send(
                new javaImports.PollingWaitCallback("100", "Please wait ...")
            ).withStage(empstage).build();   
     action = javaImports.Action.goTo('Employee').build()
 }else if(userType==="contractor"){
    //action.goTo('Contractor');
     action = javaImports.Action.send(
                new javaImports.PollingWaitCallback("100", "Please wait ...")
            ).withStage(contstage).build();
     action = javaImports.Action.goTo('Contractor').build()
 }else{
    action.goTo('Failed');
 }