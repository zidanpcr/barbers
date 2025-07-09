export default function GenericTable({ columns, data, renderRow, headerColor = "bg-green-600 text-white" }) {
  return (
    <div className="overflow-x-auto rounded-b-2xl">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead>
          <tr className={`${headerColor}`}>
            {columns.map((col, i) => (
              <th key={i} className="px-6 py-3 text-left font-semibold tracking-wide uppercase">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {data.map((item, index) => (
            <tr key={index}>{renderRow(item, index)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}