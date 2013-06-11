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


if (typeof window === "undefined") {
    require('../../src/js/InputManager2');
    require(process.cwd()+'/inputs');
}


var area = J$.readInput("");
console.log(area.toString());

function regex_escape (text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function myIndexOf(s1, s2) {
    var reg = new RegExp(".*"+regex_escape(s2)+".*");
    if (reg.test(s1)) {
        var t1 = J$.readInput("", true);
        var t2 = J$.readInput("", true);
        J$.addAxiom(s1 === t1 + s2 + t2);
        J$.addAxiom(!reg.test(t1));
        return t1.length;
    } else {
        return -1;
    }
}

function myLastIndexOf(s1, s2) {
    var reg = new RegExp(".*"+regex_escape(s2)+".*");
    if (reg.test(s1)) {
        var t1 = J$.readInput("", true);
        var t2 = J$.readInput("", true);
        J$.addAxiom(s1 === t1 + s2 + t2);
        J$.addAxiom(!reg.test(t2));
        return t1.length;
    } else {
        return -1;
    }
}

if (area.length > 6 && (myIndexOf(area, "bb") < myLastIndexOf(area, "bb"))) {
    console.log("OK");
}
