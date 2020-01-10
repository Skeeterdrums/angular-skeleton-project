import { Observable } from 'rxjs';

export class TimerUtilities {
  static showPerformance(func: Function, args: any[], thisArg: any): any {
    console.log(func);

    const startTime: Date = new Date();
    const result = func.apply(thisArg, args);

    const finishTime: Date = new Date();

    const timeTaken = finishTime.getTime() - startTime.getTime();
    console.log(`function ${func.name} took ${timeTaken / 1000} seconds`);

    return result;
  }

  static showPerformanceOfObservable(func: Function, args: any[], thisArg: any): Observable<any> {
    return TimerUtilities.showPerformance(func, args, thisArg);
  }
}
