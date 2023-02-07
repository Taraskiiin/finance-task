export default interface IListOfTickersItem {
	ticker: string;
	exchange: string;
	price: number;
	change: number;
	change_percent: number;
	dividend: number;
	income: number;
	last_trade_time: string;
}
