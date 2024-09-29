import * as notificationsData from "../../notifications.json";

function AllNotifications(){

    return notificationsData;
}
export function getAllNotificationsByUser(userId){
    const allNotifications = AllNotifications();
    const userIdNotifications = [];

    for (let i = 0; i < allNotifications.length; i++){
        if (allNotifications[i].author.id === userId){
            userIdNotifications.push(allNotifications[i].context);
        }
    }

    console.log('all notifications',userIdNotifications);
    return userIdNotifications;

}