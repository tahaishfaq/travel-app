import React from "react";
import { FaCheckCircle, FaTimesCircle, FaCar } from "react-icons/fa";

const VerticalTimeline = () => {
    return (
      <div className="relative flex flex-col items-center ">
        {/* Top Circle */}
        <div className="w-3 h-3 bg-gradient-to-r from-[#FF3131] to-[#FF914D] rounded-full"></div>
  
        {/* Dashed Line */}
        <div className="w-0.5 h-60 border-l-2 border-dashed border-[#FF507A]"></div>
  
        

      </div>
    );
  };
  

  

const Summary = () => {
  const tripDays = [
    {
      day: "Day 1-2",
      location: "Ubud",
      stay: "Stay at Danakha Villa Ubud",
      travelGuide: "Ubud Travel Guide",
      schedule: [
        {
          date: "Wed,",
          date2: "08 Jan",
          time: "Morning",
          icon: "✈️",
          activity:
            "Arrive in Denpasar Bali airport. Get transferred to your hotel in Ubud.",
          period: "Noon to Evening",
          details: "At leisure.",
        },
        {
          date: "Thu,",
          date2: "08 Jan",
          time: "Full Day",
          icon: "🌋",
          activity:
            "Ubud Wonders: Volcano, Waterfalls, Rice Fields, Monkeys & Exhilarating Swing Thrills",
        },
      ],
    },
    {
      day: "Day 3-4",
      location: "Ubud",
      stay: "Stay at Danakha Villa Ubud",
      travelGuide: "Ubud Travel Guide",
      schedule: [
        {
          date: "Wed,",
          date2: "08 Jan",
          time: "Morning",
          icon: "✈️",
          activity:
            "Arrive in Denpasar Bali airport. Get transferred to your hotel in Ubud.",
          period: "Noon to Evening",
          details: "At leisure.",
        },
        {
          date: "Thu,",
          date2: "08 Jan",
          time: "Full Day",
          icon: "🌋",
          activity:
            "Ubud Wonders: Volcano, Waterfalls, Rice Fields, Monkeys & Exhilarating Swing Thrills",
        },
      ],
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Trip Summary</h2>
        <div className="relative pt-16 ">
          {tripDays?.map((trip, index) => (
            <div key={index} className="relative flex items-start gap-x-6 ">
              <div className="w-24 h-10 flex items-center justify-center text-white font-semibold text-sm rounded-full bg-gradient-to-r from-red-500 to-orange-400">
                {trip.day}
              </div>

              <VerticalTimeline />
              <div className="flex flex-col items-center">
                {/* {index !== tripDays.length - 1 && (
                  <div className="w-1 h-16 bg-dashed border-l-2 border-red-400"></div>
                )} */}
              </div>

              <div className="flex-1 rounded-xl max-w-3xl border border-[#FF507A] border-opacity-25">
                <div className="relative rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF3131] to-[#FF914D] opacity-25"></div>
                  <div className="relative z-10 flex items-center justify-between pr-6">
                    <div className="flex items-center space-x-2">
                      <span className="py-6 px-8 flex items-center justify-center bg-[#FFDCE4]">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20 10.63C20 16.1529 15.5228 20.63 10 20.63H0.993697C0.110179 20.63 -0.332289 19.5529 0.292453 18.9229L2.2495 16.9495C0.843343 15.227 1.21409e-08 13.027 1.21409e-08 10.63C1.21409e-08 5.10716 4.47715 0.630005 10 0.630005C15.5228 0.630005 20 5.10716 20 10.63ZM13.2071 7.4229C13.5976 7.81342 13.5976 8.44659 13.2071 8.83711L11.4142 10.63L13.2071 12.4229C13.5976 12.8134 13.5976 13.4466 13.2071 13.8371C12.8166 14.2276 12.1834 14.2276 11.7929 13.8371L10 12.0442L8.20711 13.8371C7.81658 14.2276 7.18342 14.2276 6.79289 13.8371C6.40237 13.4466 6.40237 12.8134 6.79289 12.4229L8.58579 10.63L6.79289 8.83711C6.40237 8.44659 6.40237 7.81342 6.79289 7.4229C7.18342 7.03237 7.81658 7.03237 8.20711 7.4229L10 9.21579L11.7929 7.4229C12.1834 7.03237 12.8166 7.03237 13.2071 7.4229Z"
                            fill="#FF507A"
                          />
                        </svg>
                      </span>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-x-1.5">
                          <h3 className="text-lg text-[#0A0A0A] font-normal">
                            {trip.location}
                          </h3>
                          <span className="bg-[#FFFFFF] text-[#001619] px-2 py-1 text-xs rounded-full flex items-center gap-x-1.5">
                            <svg
                              width="17"
                              height="18"
                              viewBox="0 0 17 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.6 8.63007C15.6 12.4961 12.466 15.6301 8.60004 15.6301H2.29562C1.67716 15.6301 1.36743 14.8761 1.80475 14.4351L3.17468 13.0537C2.19038 11.848 1.60004 10.308 1.60004 8.63007C1.60004 4.76407 4.73404 1.63007 8.60004 1.63007C12.466 1.63007 15.6 4.76407 15.6 8.63007ZM11.195 7.72504C11.4684 7.45167 11.4684 7.00846 11.195 6.73509C10.9216 6.46172 10.4784 6.46172 10.2051 6.73509L7.90004 9.04012L6.99501 8.13509C6.72164 7.86172 6.27843 7.86172 6.00506 8.13509C5.73169 8.40846 5.73169 8.85167 6.00506 9.12504L7.40506 10.525C7.53634 10.6563 7.71438 10.7301 7.90004 10.7301C8.08569 10.7301 8.26374 10.6563 8.39501 10.525L11.195 7.72504Z"
                                fill="#31C440"
                              />
                            </svg>
                            Message sent!
                          </span>
                        </div>
                        <p className="font-normal text-[#0A0A0A] text-xs">
                          {trip.stay}
                        </p>
                      </div>
                    </div>
                    <button className="text-sm text-[#21242C] font-normal underline">
                      {trip.travelGuide}
                    </button>
                  </div>
                </div>

                <div className="px-8 space-y-3">
                  {trip.schedule.map((scheduleItem, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-4 py-3 ${
                        idx % 2 == 0 && "border-b"
                      } border-dashed border-[#FF507A]`}
                    >
                      <div className="text-sm">
                        {scheduleItem.date && (
                          <div className="space-y-1.5">
                            <p className="font-medium text-[#0A0A0A]">
                              {scheduleItem.date}
                            </p>
                            <p className="text-[#777777] font-medium">
                              {scheduleItem.date2}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 max-w-sm flex items-center gap-x-1.5">
                        {idx % 2 == 0 ? (
                          <img
                            src="/icons/morning.png"
                            alt="icon"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <img
                            src="https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="icon"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        )}
                        <div className="space-y-1">
                          <p className="text-xs text-[#0A0A0A] font-medium">
                            {scheduleItem.time}
                          </p>
                          <p className="text-[#001619] text-[10px] ">
                            {scheduleItem.activity}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1">
                        {scheduleItem.period && (
                          <div className="text-xs">
                            <p className="text-[#0A0A0A] font-medium">
                              {scheduleItem.period}
                            </p>
                            <p className="text-[#001619] text-[10px]">
                              {scheduleItem.details}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-x-6 ">
            <div className="w-24 h-10 flex items-center justify-center text-white font-semibold text-sm rounded-full bg-gradient-to-r from-red-500 to-orange-400">
              Trip Ends
            </div>

            <div className="w-3 h-3 bg-gradient-to-r from-[#FF3131] to-[#FF914D] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
