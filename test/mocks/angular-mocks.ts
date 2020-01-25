import { EMPTY } from 'rxjs';

export function createActivatedRouteMock() {
  return {
    snapshot: {
      paramMap: jasmine.createSpyObj('Snapshot', ['get'])
    }
  };
}

export function createSwUpdateMock() {
  const mock = jasmine.createSpyObj('SwUpdate', {
    activateUpdate: Promise.resolve()
  });
  (mock as any).available = EMPTY;
  return mock;
}
