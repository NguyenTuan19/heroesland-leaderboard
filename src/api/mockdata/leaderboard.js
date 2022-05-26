import { axiosMockAdapterInstance } from "..";

export const getLeaderBoardMock = () => {
  axiosMockAdapterInstance.onGet("/api/leader_board").reply(200, {
    list: [
      {
        rank: 1,
        point: 123,
        wallet_addr: null,
        username: "Guest_4389i",
      },
      {
        rank: 2,
        point: 106,
        wallet_addr: null,
        username: "Guest_4389",
      },
      {
        rank: 3,
        point: 103,
        wallet_addr: "quyen1995",
        username: "quyen1995",
      },
      {
        rank: 4,
        point: 55,
        wallet_addr: null,
        username: "Guest_438",
      },
      {
        rank: 5,
        point: 49,
        wallet_addr: null,
        username: "114",
      },
      {
        rank: 6,
        point: 47,
        wallet_addr: null,
        username: "Test102020",
      },
      {
        rank: 7,
        point: 30,
        wallet_addr: null,
        username: "atc_langtujava_0",
      },
      {
        rank: 8,
        point: 22,
        wallet_addr: null,
        username: "Test102025",
      },
      {
        rank: 9,
        point: 21,
        wallet_addr: null,
        username: "Guest_438q",
      },
      {
        rank: 10,
        point: 10,
        wallet_addr: "string",
        username: "string",
      },
      {
        rank: 11,
        point: 3,
        wallet_addr: null,
        username: "83",
      },
      {
        rank: 12,
        point: 1,
        wallet_addr: null,
        username: "test102030",
      },
      {
        rank: 13,
        point: 1,
        wallet_addr: null,
        username: "52458",
      },
      {
        rank: 14,
        point: 1,
        wallet_addr: null,
        username: "8",
      },
      {
        rank: 15,
        point: 49,
        wallet_addr: null,
        username: "114",
      },
      {
        rank: 16,
        point: 47,
        wallet_addr: null,
        username: "Test102020",
      },
      {
        rank: 17,
        point: 30,
        wallet_addr: null,
        username: "atc_langtujava_0",
      },
      {
        rank: 18,
        point: 22,
        wallet_addr: null,
        username: "Test102025",
      },
      {
        rank: 19,
        point: 21,
        wallet_addr: null,
        username: "Guest_438q",
      },
      {
        rank: 20,
        point: 10,
        wallet_addr: "string",
        username: "string",
      },
    ],
  });
};

export const getLeaderBoardDetailMock = () => {
  axiosMockAdapterInstance.onGet("/api/leader_board_detail").reply(200, {
    list: [
      {
        username: "Guest_4389i",
        logType: "Level_Of_Hero_Up",
        point: 88,
      },
      {
        username: "Guest_4389i",
        logType: "CampaignCompleted",
        point: 30,
      },
      {
        username: "Guest_4389i",
        logType: "FirstCampaignCompleted",
        point: 5,
      },
    ],
  });
};
