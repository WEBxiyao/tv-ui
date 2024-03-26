import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>表头12</th>
              <th>表头2</th>
              <th>表头3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>内容1</td>
              <td>内容2</td>
              <td>内容3</td>
            </tr>
            <tr>
              <td>内容1</td>
              <td>内容2</td>
              <td>内容3</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}, {
  name: 'TTable',
})
