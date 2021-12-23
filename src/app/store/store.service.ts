import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable, shareReplay, Subject } from 'rxjs';
import { Register, Telephone } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private state = new BehaviorSubject<Register>({
    telephone: { country: "", code: "", phoneNumber: "" },
    otpCode: ""
  });

  private registerAction = new Subject<Register>()
  private telephoneAction = new Subject<Telephone>()
  private otpCodeAction = new Subject<string>()

  register$ = this.createSelector(state => state)
  telephone$ = this.createSelector(state => state.telephone)
  otpCode$ = this.createSelector(state => state.otpCode)

  constructor() {
    this.createReducer(this.registerAction, (state) => state)
    this.createReducer(this.telephoneAction, (state, telephone) => {
      state.telephone = telephone
      return state
    })
    this.createReducer(this.otpCodeAction, (state, otpCode) => {
      state.otpCode = otpCode
      return state
    })
  }

  setTelephone(phone: Telephone) {
    this.telephoneAction.next(phone)
  }

  setOtpCode(otpCode: string) {
    this.otpCodeAction.next(otpCode)
  }

  private createSelector<T>(selector: (state: Register) => T): Observable<T> {
    return this.state.pipe(
      map(selector),
      distinctUntilChanged(),
      shareReplay(1)
    )
  }

  private createReducer<T>(
    action$: Observable<T>,
    accumulator: (state: Register, action: T) => Register
  ) {
    action$.subscribe((action) => {
      const state = { ...this.state.value };
      const newState = accumulator(state, action);
      this.state.next(newState)
    })
  }

}
