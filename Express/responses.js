//#region AfterLogin

//#endregion

//#region BeforeLogin

//#endregion

//#region Bond

//#endregion

//#region Deposit

//#endregion

//#region Exchange

//#endregion

//#region ForexProjectDeposit

//#endregion

//#region Fund

//#endregion

//#region Home

//#endregion

//#region IbrAin
const ibrAinRedeemFillInRs = {
  investmentCurrentVal: 1000000,
  returnRate: 0.12635,
  currency: "TWD",
  monthExchangeAmount: 4500,
  contractPeriod: "2023/05/04 - 2023/05/04",
  accountMaintenanceFee: 0,
  account: [
    { accountName: "我的大戶", account: "(807)18801800054321" },
    {
      accountName: "台北分行活期儲蓄存款-新臺幣TWD",
      account: " (807)16801800012345",
    },
  ],
  stockType: "30",
  bondType: "70",
  assetDetail: [
    {
      marketName: "美國股市",
      percentage: 0.1096,
      subjectName: "VIT 先鋒整體股市ETF",
      shares: 2.903084,
      amount: 213.4,
      referenceDate: "2022/05/18",
      marketAmount: 17354,
      colorClass: "orange",
    },
    {
      marketName: "美國股市",
      percentage: 0.2,
      subjectName: "Vanguard ETSE 成熟市場 ETF",
      shares: 2.903084,
      amount: 213.4,
      referenceDate: "2022/05/18",
      marketAmount: 17354,
      colorClass: "orange-light",
    },
    {
      marketName: "美國長期公債",
      percentage: 0.3,
      subjectName: "SPDR 投資組合長期美國公債 ETF",
      shares: 2.903084,
      amount: 213.4,
      referenceDate: "2022/05/18",
      marketAmount: 17354,
      colorClass: "blue",
    },
    {
      marketName: "美國中期公債",
      percentage: 0.2,
      subjectName: "Schwab 美國中期公債 ETF",
      shares: 2.903084,
      amount: 213.4,
      referenceDate: "2022/05/18",
      marketAmount: 17354,
      colorClass: "blue-middle",
    },
    {
      marketName: "美國短期公債",
      percentage: 0.2,
      subjectName: "Schwab 短期美國公債 ETF",
      shares: 2.903084,
      amount: 213.4,
      referenceDate: "2022/05/18",
      marketAmount: 17354,
      colorClass: "blue-light",
    },
  ],
};

const ibrAinRedeemConfirmRs = {
  termsContent: `
					<p>22222222222222222內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容</p>
					<div class="l-mainBlock">
						<p class="bold">標題</p>
						<div class="l-mainBlock--top8">
							<ol class="decimal">
								<li>內容</li>
								<li>內容</li>
								<li>內容</li>
							</ol>
						</div>
					</div>
					<div class="l-mainBlock">
						<p class="bold">標題</p>
						<div class="l-mainBlock--top8">
							<ol class="disc">
								<li>內容</li>
								<li>內容</li>
								<li>內容</li>
							</ol>
						</div>
					</div>
				`,
};

const ibrAinRedeemResultRs = {
  result: "Success",
  errCode: "",
  errMessage: "",
};
//#endregion

//#region Insurance

//#endregion

//#region Invest

//#endregion

//#region Loan

//#endregion

//#region Native

//#endregion

//#region OtherService

//#endregion

//#region OverseaStock

//#endregion

//#region Payment

//#endregion

//#region Profile

//#endregion

//#region Sample

//#endregion

//#region Securities

//#endregion

//#region Setting

//#endregion

//#region Transfer

//#endregion

//#region utility

//#endregion

//#region Withdrawal

//#endregion

const samplePostRs = {
	bond: [
		{
			isLiked: true,
			bondName: "測試BY2 沃爾瑪 5.6% (發行機構可提前贖回)公司債券3",
			bondDtl: {
				bondID: "BY2",
				couponRate: 5.6,
				referencePrice: 103.11,
				remainingYears: 18,
				referenceYield: 4.125,
				riskLevel: "RR4",
				currency: "USD",
				maturityDate: "2025/04/04",
				perTenThousandInterest: 300,
			},
		},
		{
			isLiked: false,
			bondName: "B0M 渣打集團金融債券 4.8% (I)",
			bondDtl: {
				bondID: "B0M",
				couponRate: 4.8,
				referencePrice: 108.11,
				remainingYears: 18,
				referenceYield: 4.033,
				riskLevel: "RR3",
				currency: "USD",
				maturityDate: "2025/04/04",
				perTenThousandInterest: 200,
			},
		},
		{
			isLiked: false,
			bondName: "B0R 蘋果公司債券 5.1% (I)",
			bondDtl: {
				bondID: "B0R",
				couponRate: 5.1,
				referencePrice: 108.37,
				remainingYears: 3,
				referenceYield: 2.033,
				riskLevel: "RR3",
				currency: "USD",
				maturityDate: "2025/04/04",
				perTenThousandInterest: 350,
			},
		},
		{
			isLiked: false,
			bondName: "B1E 摩根大通集團次順位金融債券(I) 5.1% ",
			bondDtl: {
				bondID: "B1E",
				couponRate: 5.1,
				referencePrice: 108.11,
				remainingYears: 20,
				referenceYield: 4.125,
				riskLevel: "RR5",
				currency: "USD",
				maturityDate: "2025/04/04",
				perTenThousandInterest: 150,
			},
		},
		{
			isLiked: false,
			bondName: "B0P 法國興業銀行次順位金融債券(V) 5% ",
			bondDtl: {
				bondID: "B0P",
				couponRate: 5,
				referencePrice: 108.11,
				remainingYears: 18,
				referenceYield: 4.125,
				riskLevel: "RR1",
				currency: "USD",
				maturityDate: "2025/04/04",
				perTenThousandInterest: 150,
			},
		},
		{
			isLiked: false,
			bondName: "B1X 澳洲航空公司債券(IV) 4.75%",
			bondDtl: {
				bondID: "B1X",
				couponRate: 4.75,
				referencePrice: 108.11,
				remainingYears: 18,
				referenceYield: 4.125,
				riskLevel: "RR1",
				currency: "USD",
				maturityDate: "2025/04/04",
				perTenThousandInterest: 150,
			},
		},
	],
};

module.exports = {
  post: {
    "Sample/Post": samplePostRs,
    "Sample/PostReturnString": "這是一個字串",
    "Sample/PostReturnNumber": 2,
    "Redeem/RedeemFillInRs": ibrAinRedeemFillInRs,
    "Redeem/RedeemConfirmRs": ibrAinRedeemConfirmRs,
    "Redeem/RedeemResultRs": ibrAinRedeemResultRs,
    "Bond/TargetList": "成功"
  },
  get: {
    "Sample/Get": samplePostRs,
    "Sample/GetReturnString": true,
    "Sample/GetReturnNumber": 55
  }
};