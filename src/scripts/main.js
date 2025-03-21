AOS.init();

const birthdayDate = new Date("Oct 13, 2025 19:00:00");
const timeStampBirthday = birthdayDate.getTime();

const countDown = setInterval(function () {
    const now = new Date();
    const liveTimeStamp = now.getTime();

    const birthdayTime = timeStampBirthday - liveTimeStamp;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysToBirthday = Math.floor(birthdayTime / daysInMs);
    const hoursToBirthday = Math.floor((birthdayTime % daysInMs) / hoursInMs);
    const minutesTobirthday = Math.floor((birthdayTime % hoursInMs) / minuteInMs);
    const secondsToBirthday = Math.floor((birthdayTime % minuteInMs) / 1000);

    console.log(daysToBirthday);
    console.log(hoursToBirthday);
    console.log(minutesTobirthday);
    console.log(secondsToBirthday);

    document.getElementById('countdown').innerHTML = `${daysToBirthday}d ${hoursToBirthday}h ${minutesTobirthday}m ${secondsToBirthday}s`;

    if (daysToBirthday < 0) {
        clearInterval(countDown);
        document.getElementById('countdown').innerHTML = 'You Missed! 7 years of bad luck now!';
    }

}, 1000);