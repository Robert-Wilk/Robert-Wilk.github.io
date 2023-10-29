import { Title } from '@angular/platform-browser';
import { RoutingTitleStrategy } from './routing-title-strategy';

describe('RoutingTitleStrategy', () => {
  it('should create an instance', () => {
    expect(new RoutingTitleStrategy(new Title(''))).toBeTruthy();
  });
});
