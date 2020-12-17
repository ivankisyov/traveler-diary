export function AutoUnsubscribe(constructor: Function): void {
  const original = constructor.prototype.ngOnDestroy;

  if (!original) {
    throw new Error('OnDestroy is not implemented');
  }

  constructor.prototype.ngOnDestroy = function (
    ...args: any[]
  ): void {
    for (const prop in this) {
      const property = this[prop];
      if (typeof property.unsubscribe === 'function') {
        property.unsubscribe();
      }
    }

    !!original && original.apply(this, args);
  };
}
