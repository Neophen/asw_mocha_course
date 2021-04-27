// process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

describe('Alnasoft unit testing course', function () {
  it('should contain a valid booking structure', function () {
    const response = {
      bookings: [
        {
          id: 1,
          label: 'Booking 1',
          status: 'pending',
        },
        {
          id: 2,
          label: 'Booking 2',
          status: 'completed',
        },
        {
          id: 3,
          label: 'Booking 3',
          status: 'completed',
        },
        {
          id: 4,
          label: 'Booking 4',
          status: 'pending',
        },
        {
          id: 5,
          label: 'Booking 5',
          status: 'in progress',
        },
        {
          id: 6,
          label: 'Booking 6',
          status: 'pending',
        },
      ],
    };

    const expectedStatuses = ['completed', 'pending', 'in progress'];

    response.bookings.forEach((booking, i) => {
      expect(booking).to.have.property('id');
      expect(booking.id).to.be.a('number');
      expect(booking.id).to.equal(i + 1);

      expect(booking).to.have.property('label');
      expect(booking.label).to.be.a('string');

      expect(booking).to.have.property('status');
      expect(booking.status).to.be.a('string');
      expect(booking.status).to.be.oneOf(expectedStatuses);
    });
  });
});
