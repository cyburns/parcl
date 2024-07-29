import React from "react";

const fakeData = [
  {
    name: "Points Cards",
    subtitle:
      "Lorem ipsum is a default filler test that is used by anyone who doesn’t need focus on text.",
    price: "4",
    color: "#FAE24C",
    textColor: "#6FD572",
  },
  {
    name: "Points Cards",
    subtitle:
      "Lorem ipsum is a default filler test that is used by anyone who doesn’t need focus on text.",
    price: "4",
    color: "#FF886D",
    textColor: "#FF886D",
  },
  {
    name: "Points Cards",
    subtitle:
      "Lorem ipsum is a default filler test that is used by anyone who doesn’t need focus on text.",
    price: "4",
    color: "#FAE24C",
    textColor: "#6FD572",
  },
];

const Card = () => {
  return (
    <div className="flex flex-row justify-between">
      {fakeData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col border rounded-lg  border-[#9B9C9D] m-2 p-5 max-w-[250px] space-y-3 text-[#9B9C9D] font-[21px]"
        >
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5078 3.35156C11.8828 3.9375 11.5312 4.67969 11.2188 5.34375C11.0625 5.69531 10.9453 6.04688 10.7891 6.32031L10.75 6.47656C10.3984 7.33594 10.0469 8.19531 9.22656 9.01562C8.17188 10.0312 7 10.6953 6.02344 11.1641C5.94531 11.2422 5.82812 11.2812 5.71094 11.3203C4.85156 11.7891 4.1875 12.1016 3.5625 12.6094C2.97656 13.0781 2.625 13.7031 2.625 14.5625V18.625H10.125C12.8594 18.625 15.5938 17.6094 17.7031 16.0469C19.7344 14.5234 21.375 12.3359 21.375 9.875C21.375 8 20.6328 6.16406 19.5391 4.79688C18.4453 3.46875 16.8828 2.375 15.125 2.375C14.0312 2.375 13.1719 2.72656 12.5078 3.35156ZM10.125 20.5H2.625H0.75V18.625V14.5625C0.75 13.0781 1.41406 11.9062 2.39062 11.125C3.17188 10.5391 3.99219 10.1094 4.85156 9.67969C5.94531 9.13281 7 8.58594 7.89844 7.6875C8.44531 7.14062 8.67969 6.59375 9.07031 5.61719C9.1875 5.30469 9.34375 4.95312 9.5 4.5625C9.8125 3.89844 10.3203 2.84375 11.2188 1.98438C12.2734 1.00781 13.6016 0.5 15.125 0.5C17.6641 0.5 19.6953 2.02344 20.9844 3.625C22.3125 5.30469 23.25 7.53125 23.25 9.875C23.25 13.1562 21.0625 15.8516 18.7969 17.5703C16.4531 19.3281 13.2891 20.5 10.125 20.5ZM12.6641 6.75C12.7812 6.51562 12.8594 6.28125 12.9375 6.08594C13.2109 5.46094 13.4844 5.03125 13.7969 4.71875C14.0703 4.44531 14.4609 4.28906 15.125 4.28906C16.1016 4.28906 17.1953 4.91406 18.0547 6.00781C18.9141 7.0625 19.5 8.50781 19.5 9.91406C19.5 11.4766 18.3672 13.1953 16.5703 14.5625C14.7734 15.8906 12.3906 16.75 10.125 16.75H4.5V14.5625C4.5 14.2109 4.57812 14.0547 4.73438 13.9375C4.96875 13.7422 5.32031 13.5469 5.94531 13.3125H5.98438C7.11719 12.8047 8.75781 12.1406 10.5547 10.3438C11.6484 9.21094 12.2344 7.84375 12.6641 6.75ZM17 9.25C17 8.58594 16.4141 8 15.75 8C15.0469 8 14.5 8.58594 14.5 9.25C14.5 9.95312 15.0469 10.5 15.75 10.5C16.4141 10.5 17 9.95312 17 9.25Z"
              fill={card.color}
            />
          </svg>

          <h3 className="text-lg text-white font-[23px]">{card.name}</h3>
          <p className="text-sm text-[#9B9C9D]">{card.subtitle}</p>
          <div className="flex flex-row justify-between">
            <p className="text-white">
              +{card.price}pts <span>/ dollar</span>{" "}
            </p>
            <p>per day</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
