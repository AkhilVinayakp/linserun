import { Injectable } from '@angular/core';
import { dataFrm } from '../../models/dataFreame'
let shell = require('shelljs');
@Injectable({
  providedIn: 'root'
})
export class DataflowService {

  constructor() { }
  flowout:dataFrm
  exec_cmd( cmd:string ):void
  {
    shell.exec(cmd,this.out_streem_cmd)
  }
  out_streem_cmd(code,stdout,stderr):any
  {
    this.flowout.run_out=stdout+stderr;
    return this.flowout;
  }
}
