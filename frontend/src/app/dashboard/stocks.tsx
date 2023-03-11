import Link from "next/link";

export async function getStockData() {
  const response = await fetch(
    "https://tradestie.com/api/v1/apps/reddit?date=2023-03-03"
  );
  const data = await response.json();
  return data;
}

export function StockData({ data }: any) {
  return (
    <div className="container mx-auto">
      <h1 className="text-lg font-bold bg-center">Stock Data</h1>
      {data.map((stock: any) => (
        <div
          key={stock.ticker}
          className="my-4 bg-slate-200 p-4 rounded shadow hover:shadow-lg flex justify-between items-center"
        >
          <div className="text-grey-500 hover:text-blue-600 border-b-2 border-blue-600 flex items-center">
            <Link href={`/stock/${stock.ticker}`} className="mr-2">
              {stock.ticker}: {stock.sentiment_score}
            </Link>
          </div>
          <div
            className={`text-grey-500 ${
              stock.sentiment === "Bearish" ? "text-red-600" : "text-green-600"
            }`}
          >
            {stock.sentiment}
          </div>
        </div>
      ))}
    </div>
  );
}
