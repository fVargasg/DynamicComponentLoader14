import { Injector } from '@angular/core';

export class DataConfigurationInjector implements Injector {
  constructor(private _parentInjector: Injector, private _additionalTokens: WeakMap<any, any>) {}

  get(token: any, notFoundValue?: any, flags?: any) {
    const value = this._additionalTokens.get(token);

    if (value) return value;

    return this._parentInjector.get<any>(token, notFoundValue);
  }
}