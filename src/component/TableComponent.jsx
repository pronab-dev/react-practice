export default function TableComponent({ columns, data }) {
  const [sortedData, setSortedData] = useState(data);
  const handleSort = (key) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });

    setSortedData(sorted);
  };
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
      <table className="min-w-full">
        <thead className="bg-violet-600 text-white">
          <tr>
            {columns.length > 0 &&
              columns.map((row) => {
                return (
                  <th
                    key={row.key}
                    onClick={row.sortable && (() => handleSort(row.key))}
                    className="px-6 py-4 text-left"
                  >
                    {row.header}
                  </th>
                );
              })}
          </tr>
        </thead>

        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((item) => {
              return (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  {columns.map((row) => {
                    return (
                      <td key={row.key} className="px-6 py-4">
                        {row.render ? row.render(item) : item[row.key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="py-8 text-center text-gray-500"
              >
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
