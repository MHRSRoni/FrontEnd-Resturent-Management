
const HeaderRow = () => {
    return (
        <thead className="bg-primary text-white text-base">
            <tr className="table-row">
                <th className="table-cell">
                    CustomerId
                </th>
                <th className="table-cell">
                    Name
                </th>
                <th className="table-cell">
                    Action
                </th>
                <th className="table-cell">
                    marker
                </th>
            </tr>
        </thead>
    );
};

export default HeaderRow;