import callWithHi from './callWithHi';

describe('callWithHi', () => {
  it('calls the passed callback with \'Hi\'', () => {
    const callback = sinon.spy();
    callWithHi(callback);
    expect(callback).to.have.been.calledWith('Hi');
  });
});
