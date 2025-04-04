export default function generateICalendar(scheduleData) {
    const dayOffsets = {
        Monday: 0, Tuesday: 1, Wednesday: 2,
        Thursday: 3, Friday: 4, Saturday: 5, Sunday: 6,
    };

    const pad = (n) => (n < 10 ? "0" + n : n);
    const formatDateTime = (date) =>
        date.getUTCFullYear().toString() +
        pad(date.getUTCMonth() + 1) +
        pad(date.getUTCDate()) +
        "T" +
        pad(date.getUTCHours()) +
        pad(date.getUTCMinutes()) +
        "00Z";

    const today = new Date();
    const daysUntilNextMonday = (8 - today.getDay()) % 7;
    const baseDate = new Date(today);
    baseDate.setDate(today.getDate() + daysUntilNextMonday);
    baseDate.setHours(0, 0, 0, 0);

    let uidCounter = 0;
    const events = [];

    for (const [day, classes] of Object.entries(scheduleData)) {
        const offset = dayOffsets[day];
        const sortedTimes = Object.keys(classes).sort((a, b) => {
            const getMinutes = (t) => {
                const [h, m] = t.match(/\d+/g);
                let hr = parseInt(h), min = parseInt(m);
                if (t.includes("PM") && hr !== 12) hr += 12;
                if (t.includes("AM") && hr === 12) hr = 0;
                return hr * 60 + min;
            };
            return getMinutes(a) - getMinutes(b);
        });

        for (let i = 0; i < sortedTimes.length; i++) {
            const timeStr = sortedTimes[i];
            const [code, location, subject, type] = classes[timeStr];

            const [h, m] = timeStr.match(/\d+/g);
            let hour = parseInt(h), minute = parseInt(m);
            if (timeStr.includes("PM") && hour !== 12) hour += 12;
            if (timeStr.includes("AM") && hour === 12) hour = 0;

            const start = new Date(baseDate);
            start.setDate(baseDate.getDate() + offset);
            start.setHours(hour, minute, 0);

            let duration = 50;
            const nextTime = sortedTimes[i + 1];
            if (nextTime && classes[nextTime][0] === code && type === "Practical") {
                duration = 100;
                i++; // skip next slot
            }

            const end = new Date(start.getTime() + duration * 60 * 1000);

            const event = `BEGIN:VEVENT
UID:event-${uidCounter++}@thapar.edu
DTSTAMP:${formatDateTime(new Date())}
DTSTART:${formatDateTime(start)}
DTEND:${formatDateTime(end)}
RRULE:FREQ=WEEKLY
SUMMARY:${subject} (${type})
DESCRIPTION:Course Code: ${code}
LOCATION:${location}
END:VEVENT`;
            events.push(event);
        }
    }

    return `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-TIMEZONE:Asia/Kolkata
PRODID:-//Thapar Scheduler//EN
${events.join('\n')}
END:VCALENDAR`;
}
