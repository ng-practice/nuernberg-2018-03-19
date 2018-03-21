import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanLoadGuard implements CanLoad {
  canLoad(route: Route): boolean {
    return true;
    // return window.confirm('Sind Sie sich sicher?');
  }
}
