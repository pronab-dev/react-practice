export default function TableComponent({ columns, data }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
      <table className="min-w-full">
        <thead className="bg-violet-600 text-white">
          <tr>
            {columns.length > 0 &&
              columns.map((row) => {
                return (
                  <th key={row.key} className="px-6 py-4 text-left">
                    {row.header}
                  </th>
                );
              })}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item) => {
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
