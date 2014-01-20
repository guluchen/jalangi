/*
 * Copyright 2013 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: Koushik Sen

/*jslint node: true */
/*global J$ */
var analysis = require('./../analysis');
// TODO pass in analysis name
analysis.init("replay");
require('./../InputManager');
require('./../instrument/esnstrument');
try {
//    console.log("Starting replay ...")
    var DEFAULT_TRACE_FILE_NAME = 'jalangi_trace';
    var traceFileName = process.argv[2] ? process.argv[2] : DEFAULT_TRACE_FILE_NAME;
    J$.setTraceFileName(traceFileName);
    J$.replay();
} finally {
    J$.endExecution();
}
