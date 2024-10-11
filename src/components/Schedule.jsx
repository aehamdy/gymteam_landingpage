const ScheduleTable = () => {
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const times = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM"];

  const schedule = [
    {
      day: "Saturday",
      classes: [
        { time: "8 AM", duration: 1, className: "Crossfit" },
        { time: "9 AM", duration: 1, className: "Powerlifting" },
        { time: "10 AM", duration: 3, className: "Stretching" },
        { time: "1 PM", duration: 1, className: "Crossfit" },
      ],
    },
    {
      day: "Sunday",
      classes: [
        { time: "8 AM", duration: 2, className: "Open Gym" },
        { time: "12 PM", duration: 1, className: "Crossfit" },
        { time: "1 PM", duration: 1, className: "Powerlifting" },
      ],
    },
    {
      day: "Monday",
      classes: [
        { time: "8 AM", duration: 2, className: "Open Gym" },
        { time: "10 AM", duration: 1, className: "Crossfit" },
        { time: "11 AM", duration: 1, className: "Cardio" },
        { time: "1 PM", duration: 1, className: "Cardio" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { time: "8 AM", duration: 2, className: "Cardio" },
        { time: "10 AM", duration: 1, className: "Crossfit" },
        { time: "11 AM", duration: 3, className: "Open Gym" },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { time: "8 AM", duration: 3, className: "Open Gym" },
        { time: "12 PM", duration: 1, className: "Crossfit" },
        { time: "1 PM", duration: 1, className: "Cardio" },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { time: "9 AM", duration: 1, className: "Crossfit" },
        { time: "10 AM", duration: 1, className: "Powerlifting" },
        { time: "12 PM", duration: 2, className: "Open Gym" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { time: "8 AM", duration: 2, className: "Stretching" },
        { time: "10 AM", duration: 3, className: "Open Gym" },
        { time: "1 PM", duration: 1, className: "Stretching" },
      ],
    },
  ];

  // Helper function to get the class at a specific time
  const getClassAtTime = (daySchedule, time) => {
    return daySchedule.classes.find((classItem) => classItem.time === time);
  };

  // Keep track of spanned times to avoid duplicate cells
  const spannedTimes = {};

  return (
    <section className="table-section py-section-spacing px-section-horizontal-padding-sm md:px-section-horizontal-padding-md lg:px-section-horizontal-padding-lg overflow-x-auto">
      <table className="min-w-full table-scrollbar text-gray-300 border-collapse text-center">
        {/* <table className="text-gray-300 border-collapse border border-table-border-color w-full"> */}
        <thead>
          <tr>
            <th className="px-4 py-2"></th>
            {days.map((day) => (
              <th
                key={day}
                className="border border-table-border-color border-t-0 border-e-0 px-4 py-2"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className="border border-table-border-color border-s-0 px-4 py-2">
                {time}
              </td>
              {days.map((day) => {
                const daySchedule = schedule.find(
                  (d) => d.day.toLowerCase() === day.toLowerCase()
                ) || { classes: [] };

                const classAtTime = getClassAtTime(daySchedule, time);

                // Check if this time slot is already spanned by a previous row
                if (spannedTimes[day + time]) {
                  return null; // Skip this cell
                }

                if (classAtTime) {
                  // Mark the next times as spanned based on the class duration
                  for (let i = 1; i < classAtTime.duration; i++) {
                    spannedTimes[day + times[times.indexOf(time) + i]] = true;
                  }

                  // Render the class cell with rowSpan
                  return (
                    <td
                      key={day + time}
                      rowSpan={classAtTime.duration}
                      className="border border-table-border-color border-e-0 px-4 py-2"
                    >
                      {classAtTime.className}
                    </td>
                  );
                } else {
                  // Render an empty cell if no class is scheduled
                  return (
                    <td
                      key={day + time}
                      className="border border-table-border-color px-4 py-2"
                    ></td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ScheduleTable;
