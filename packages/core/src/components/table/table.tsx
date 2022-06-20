import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'table-component',
  styleUrl: 'table.css',
  shadow: false,
  scoped: true
})
export class TableComponent {
  @Prop() tableTitle: string;
  @Prop() headers: string;
  @Prop() rows: string;
  @Prop() sum: boolean = false;

  render() {
    const parsedHeaders = JSON.parse(this.headers);
    const parsedRows = JSON.parse(this.rows);

    return <div>
      <h1>{this.tableTitle}</h1>
      <table>
        <thead>
          {parsedHeaders.map((header: string) => <th>{header}</th>)}
        </thead>
        <tbody>
          {parsedRows.map((row: string[]) => <tr>
            {row.map((cell: string | number) => <td>{cell}</td>)}
          </tr>)}
        </tbody>
        {
          this.sum ? <tfoot>
            {
              parsedRows.reduce((prevRow, nextRow) => {
                nextRow.forEach((number, index) => {
                  prevRow[index] = (prevRow[index] || 0) + number;
                });
                return prevRow;
              }, []).map(value => <td>{value}</td>)
            }
          </tfoot> : null
        }
      </table>
    </div>;
  }
}
