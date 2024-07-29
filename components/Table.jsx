import React from "react";

const fakeTableData = [
  { key: 1, trade: 100, refferal: 100, total: 100, name: "Hapd..23eF" },
  { key: 1, trade: 100, refferal: 100, total: 100, name: "Hapd..23eF" },
  { key: 1, trade: 100, refferal: 100, total: 100, name: "Hapd..23eF" },
  { key: 1, trade: 100, refferal: 100, total: 100, name: "Hapd..23eF" },
  { key: 1, trade: 100, refferal: 100, total: 100, name: "Hapd..23eF" },
  { key: 1, trade: 100, refferal: 100, total: 100, name: "Hapd..23eF" },
  { key: 1, trade: 100, refferal: 100, total: 100, name: "Hapd..23eF" },
];
const tableHeaders = ["15,422", "LP", "Trade", "Refferal", "Total"];

const Table = () => {
  return (
    <div className="mt-16 max-w-[2300px]">
      <table className=" w-full overflow-hidden">
        <thead className="border-b border-gray-200 w-full text-[#9B9C9D]">
          <tr className="flex flex-row">
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className="flex items-center p-3  font-medium flex-1 text-left mr-10"
              >
                {index === 0 && (
                  <svg
                    className="mr-2"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.375 4C2.69531 4 2.08594 3.64844 1.73438 3.0625C1.40625 2.5 1.40625 1.77344 1.73438 1.1875C2.08594 0.625 2.69531 0.25 3.375 0.25C4.03125 0.25 4.64062 0.625 4.99219 1.1875C5.32031 1.77344 5.32031 2.5 4.99219 3.0625C4.64062 3.64844 4.03125 4 3.375 4ZM12 4C11.3203 4 10.7109 3.64844 10.3594 3.0625C10.0312 2.5 10.0312 1.77344 10.3594 1.1875C10.7109 0.625 11.3203 0.25 12 0.25C12.6562 0.25 13.2656 0.625 13.6172 1.1875C13.9453 1.77344 13.9453 2.5 13.6172 3.0625C13.2656 3.64844 12.6562 4 12 4ZM1.125 4.75H4.59375C4.52344 5.00781 4.5 5.24219 4.5 5.5C4.5 6.41406 4.875 7.21094 5.50781 7.75H0L1.125 4.75ZM15 7.75H9.46875C10.1016 7.21094 10.5 6.41406 10.5 5.5C10.5 5.24219 10.4531 5.00781 10.4062 4.75H13.875L15 7.75ZM7.5 4.375C7.07812 4.375 6.72656 4.60938 6.51562 4.9375C6.30469 5.28906 6.30469 5.73438 6.51562 6.0625C6.72656 6.41406 7.07812 6.625 7.5 6.625C7.89844 6.625 8.25 6.41406 8.46094 6.0625C8.67188 5.73438 8.67188 5.28906 8.46094 4.9375C8.25 4.60938 7.89844 4.375 7.5 4.375ZM7.5 7.75C6.67969 7.75 5.95312 7.32812 5.53125 6.625C5.13281 5.94531 5.13281 5.07812 5.53125 4.375C5.95312 3.69531 6.67969 3.25 7.5 3.25C8.29688 3.25 9.02344 3.69531 9.44531 4.375C9.84375 5.07812 9.84375 5.94531 9.44531 6.625C9.02344 7.32812 8.29688 7.75 7.5 7.75ZM4.94531 9.625L4.5 11.125H10.4766L10.0312 9.625H4.94531ZM10.875 8.5L11.6484 11.125L12 12.25H10.8047H4.17188H3L3.32812 11.125L4.125 8.5H10.875Z"
                      fill="#9B9C9D"
                    />
                  </svg>
                )}
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="w-full">
          {fakeTableData.map((data, index) => (
            <tr key={index} className="flex w-full text-[#EFEFEF]">
              <td className="flex-1 p-3 border-b border-opacity-5">
                {data.key}
              </td>

              <td className="flex-1 p-3 flex flex-row items-center border-b border-opacity-5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.75024L1.47456 6.4056C2.89451 7.03467 4.03734 8.15727 4.69068 9.56711L5.54427 11.4058L6.39785 9.56711C7.05119 8.15929 8.19402 7.03669 9.61397 6.4056L11.0885 5.75024L9.61397 5.09488C8.19402 4.46581 7.05119 3.34321 6.39785 1.93337L5.54427 0.0947266L4.69068 1.93337C4.03734 3.34119 2.89451 4.46379 1.47456 5.09488L0 5.75024Z"
                    fill="#FAE24D"
                  />
                </svg>
                <span className="ml-2">{data.name}</span>
              </td>
              <td className="flex-1 p-3 flex flex-row items-center border-b border-opacity-5 text-[#9B9C9D]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.75024L1.47456 6.4056C2.89451 7.03467 4.03734 8.15727 4.69068 9.56711L5.54427 11.4058L6.39785 9.56711C7.05119 8.15929 8.19402 7.03669 9.61397 6.4056L11.0885 5.75024L9.61397 5.09488C8.19402 4.46581 7.05119 3.34321 6.39785 1.93337L5.54427 0.0947266L4.69068 1.93337C4.03734 3.34119 2.89451 4.46379 1.47456 5.09488L0 5.75024Z"
                    fill="#FAE24D"
                  />
                </svg>
                <span className="ml-2">{data.trade}</span>
              </td>
              <td className="flex-1 p-3 flex flex-row items-center border-b border-opacity-5 text-[#9B9C9D]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.75024L1.47456 6.4056C2.89451 7.03467 4.03734 8.15727 4.69068 9.56711L5.54427 11.4058L6.39785 9.56711C7.05119 8.15929 8.19402 7.03669 9.61397 6.4056L11.0885 5.75024L9.61397 5.09488C8.19402 4.46581 7.05119 3.34321 6.39785 1.93337L5.54427 0.0947266L4.69068 1.93337C4.03734 3.34119 2.89451 4.46379 1.47456 5.09488L0 5.75024Z"
                    fill="#FAE24D"
                  />
                </svg>
                <span className="ml-2">{data.refferal}</span>
              </td>
              <td className="flex-1 p-3 flex flex-row items-center border-b border-opacity-5 text-[#9B9C9D]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.75024L1.47456 6.4056C2.89451 7.03467 4.03734 8.15727 4.69068 9.56711L5.54427 11.4058L6.39785 9.56711C7.05119 8.15929 8.19402 7.03669 9.61397 6.4056L11.0885 5.75024L9.61397 5.09488C8.19402 4.46581 7.05119 3.34321 6.39785 1.93337L5.54427 0.0947266L4.69068 1.93337C4.03734 3.34119 2.89451 4.46379 1.47456 5.09488L0 5.75024Z"
                    fill="#FAE24D"
                  />
                </svg>
                <span className="ml-2">{data.total}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
