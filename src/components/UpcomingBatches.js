import React from 'react';
import { Container, Table } from 'react-bootstrap';

const UpcomingBatches = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2>Upcoming Batches</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Batch</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Batch 1</td>
            <td>1st Aug</td>
            <td>30th Sep</td>
          </tr>
          <tr>
            <td>Batch 2</td>
            <td>1st Oct</td>
            <td>30th Nov</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </section>
);

export default UpcomingBatches;
