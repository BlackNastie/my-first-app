import { Subject } from "rxjs";
import { OnDestroy } from "@angular/core";

export class AutoUnsubscribeService extends Subject<null> implements OnDestroy {
    ngOnDestroy(): void {
        this.next(null);
        this.complete();
    }
}