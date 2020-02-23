import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
describe('SharedService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SharedService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=shared.service.spec.js.map