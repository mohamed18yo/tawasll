import moment from 'moment'



function fromNow(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var years = Math.floor(seconds / 31536000);
    var months = Math.floor(seconds / 2592000);
    var days = Math.floor(seconds / 86400);
    if (days > 548) {
        return ` منذ ${years} سنين`;
    }
    if (days >= 320 && days <= 547) {
        return 'منذ سنة';
    }
    if (days >= 45 && days <= 319) {
        return ` منذ${months} اشهر`;
    }
    if (days >= 26 && days <= 45) {
        return 'ننذ شهر';
    }

    var hours = Math.floor(seconds / 3600);

    if (hours >= 36 && days <= 25) {
        return `منذ ${days} الايام`
    }
    if (hours >= 22 && hours <= 35) {
        return 'منذ  يوم واحد';
    }

    var minutes = Math.floor(seconds / 60);

    if (minutes >= 90 && hours <= 21) {
        return ` منذ  ${hours} ساعات`;
    }
    if (minutes >= 45 && minutes <= 89) {
        return 'منذ  ساعة';
    }
    if (seconds >= 90 && minutes <= 44) {
        return `منذ ${minutes} دقائق`;
    }
    if (seconds >= 45 && seconds <= 89) {
        return 'منذ دقيقة';
    }
    if (seconds >= 0 && seconds <= 45) {
        return 'قبل  عدة  دقائق';
    }
}
export const handleFoematTime = (time) => {

    return fromNow(moment(time))

}