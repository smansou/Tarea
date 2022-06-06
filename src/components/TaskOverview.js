import React from 'react'

export default function TaskOverview() {
  return (
    <table class="ui compact celled definition table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Deadline</th>
      <th>Description</th>
      <th>Premium Plan</th>
      <th>Completed</th>
    </tr>
  </thead>
  {/* <tbody>
  
  </tbody> */}
  <tfoot class="full-width">
    <tr>
      <th colspan="4">
        <div class="ui right floated small primary labeled icon button">
          <i class="user icon"></i> Add User
        </div>
        <div class="ui small button">
          Approve
        </div>
        <div class="ui small  disabled button">
          Approve All
        </div>
      </th>
    </tr>
  </tfoot>
</table>
  )
}

