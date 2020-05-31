(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{451:function(e,t,r){"use strict";r.r(t),r.d(t,"registerStorage",(function(){return Mt}));var n=r(263),o=r.n(n),i=r(149),a=r(264),s="firebasestorage.googleapis.com",u="storageBucket",c=12e4,l=6e5,p=-9007199254740991,h=function(){function e(e,t){this.code_=d(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return d(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),e}(),f={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function d(e){return"storage/"+e}function _(){var e="An unknown error occurred, please check the error payload for server response.";return new h(f.UNKNOWN,e)}function v(e){return new h(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function m(e){return new h(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(f.UNAUTHENTICATED,e)}function b(e){return new h(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function y(){return new h(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function R(){return new h(f.CANCELED,"User canceled the upload/download.")}function w(e){return new h(f.INVALID_URL,"Invalid URL '"+e+"'.")}function E(e){return new h(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function T(){return new h(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function U(){return new h(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function A(){return new h(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function k(e,t,r){return new h(f.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function O(e,t,r,n){var o,i;return e===t?(o=e,i=1===e?"argument":"arguments"):(o="between "+e+" and "+t,i="arguments"),new h(f.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}function N(){return new h(f.APP_DELETED,"The Firebase app was deleted.")}function C(e){return new h(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(e,t){return new h(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function x(e){throw new h(f.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function I(e){switch(e){case P.RAW:case P.BASE64:case P.BASE64URL:case P.DATA_URL:return;default:throw"Expected one of the event types: ["+P.RAW+", "+P.BASE64+", "+P.BASE64URL+", "+P.DATA_URL+"]."}}var L=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function D(e,t){switch(e){case P.RAW:return new L(M(t));case P.BASE64:case P.BASE64URL:return new L(B(e,t));case P.DATA_URL:return new L(j(t),q(t))}throw _()}function M(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296===(64512&n)){var o=r<e.length-1&&56320===(64512&e.charCodeAt(r+1));if(o){var i=n,a=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&a,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else 56320===(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function W(e){var t;try{t=decodeURIComponent(e)}catch(r){throw S(P.DATA_URL,"Malformed data URL.")}return M(t)}function B(e,t){switch(e){case P.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n){var o=r?"-":"_";throw S(e,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case P.BASE64URL:var i=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(i||a){o=i?"+":"/";throw S(e,"Invalid character '"+o+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(l){throw S(e,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var G=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw S(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=F(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}return e}();function j(e){var t=new G(e);return t.base64?B(P.BASE64,t.rest):W(t.rest)}function q(e){var t=new G(e);return t.contentType}function F(e,t){var r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H,z={STATE_CHANGED:"state_changed"},X={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},V={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function K(e){switch(e){case X.RUNNING:case X.PAUSING:case X.CANCELING:return V.RUNNING;case X.PAUSED:return V.PAUSED;case X.SUCCESS:return V.SUCCESS;case X.CANCELED:return V.CANCELED;case X.ERROR:return V.ERROR;default:return V.ERROR}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){return null!=e}function J(e){return void 0!==e}function Q(e){return"function"===typeof e}function $(e){return"object"===typeof e}function Y(e){return $(e)&&null!==e}function ee(e){return $(e)&&!Array.isArray(e)}function te(e){return"string"===typeof e||e instanceof String}function re(e){return ne(e)&&Number.isInteger(e)}function ne(e){return"number"===typeof e||e instanceof Number}function oe(e){return ie()&&e instanceof Blob}function ie(){return"undefined"!==typeof Blob}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(H||(H={}));
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ae=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=H.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=H.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),Z(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return Z(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw x("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){Z(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){Z(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),se=function(){function e(){}return e.prototype.createXhrIo=function(){return new ae},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ce(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=ue();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(ie())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}function le(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe=function(){function e(e,t){var r=0,n="";oe(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(oe(this.data_)){var n=this.data_,o=le(n,t,r);return null===o?null:new e(o)}var i=new Uint8Array(this.data_.buffer,t,r-t);return new e(i,!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(ie()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(ce.apply(null,n))}var o=t.map((function(e){return te(e)?D(P.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),he=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw E(t)},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var i="(/(.*))?$",a=new RegExp("^gs://"+n+i,"i"),u={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}for(var l="v[A-Za-z0-9_]+",p=s.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp("^https?://"+p+"/"+l+"/b/"+n+"/o"+h,"i"),d={bucket:1,path:3},_="(?:storage.googleapis.com|storage.cloud.google.com)",v="([^?#]*)",m=new RegExp("^https?://"+_+"/"+n+"/"+v,"i"),g={bucket:1,path:2},b=[{regex:a,indices:u,postModify:o},{regex:f,indices:d,postModify:c},{regex:m,indices:g,postModify:c}],y=0;y<b.length;y++){var R=b[y],E=R.regex.exec(t);if(E){var T=E[R.indices.bucket],U=E[R.indices.path];U||(U=""),r=new e(T,U),R.postModify(r);break}}if(null==r)throw w(t);return r},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e){var t;try{t=JSON.parse(e)}catch(r){return null}return ee(t)?t:null}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var r=e.slice(0,t);return r}function _e(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function ve(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){return"https://"+s+"/v0"+e}function ge(e){var t=encodeURIComponent,r="?";for(var n in e)if(e.hasOwnProperty(n)){var o=t(n)+"="+t(e[n]);r=r+o+"&"}return r=r.slice(0,-1),r}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){return t}var ye=function(){function e(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||be}return e}(),Re=null;function we(e){return!te(e)||e.length<2?e:ve(e)}function Ee(){if(Re)return Re;var e=[];function t(e,t){return we(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));var r=new ye("name");function n(e,t){return Z(t)?Number(t):t}r.xform=t,e.push(r);var o=new ye("size");return o.xform=n,e.push(o),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),Re=e,Re}function Te(e,t){function r(){var r=e["bucket"],n=e["fullPath"],o=new he(r,n);return t.makeStorageReference(o)}Object.defineProperty(e,"ref",{get:r})}function Ue(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return Te(n,e),n}function Ae(e,t,r){var n=fe(t);if(null===n)return null;var o=n;return Ue(e,o,r)}function ke(e,t){var r=fe(t);if(null===r)return null;if(!te(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,i=n.split(","),a=i.map((function(t){var r=e["bucket"],n=e["fullPath"],i="/b/"+o(r)+"/o/"+o(n),a=me(i),s=ge({alt:"media",token:t});return a+s}));return a[0]}function Oe(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Ne(e){if(!$(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!$(r))throw"Expected object for 'customMetadata' mapping."}else if(Y(r))throw"Mapping for '"+t+"' cannot be an object."}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce="maxResults",Se=1e3,xe="pageToken",Pe="prefixes",Ie="items";function Le(e,t,r){var n={prefixes:[],items:[],nextPageToken:r["nextPageToken"]};if(r[Pe])for(var o=0,i=r[Pe];o<i.length;o++){var a=i[o],s=a.replace(/\/$/,""),u=e.makeStorageReference(new he(t,s));n.prefixes.push(u)}if(r[Ie])for(var c=0,l=r[Ie];c<l.length;c++){var p=l[c];u=e.makeStorageReference(new he(t,p["name"]));n.items.push(u)}return n}function De(e,t,r){var n=fe(r);if(null===n)return null;var o=n;return Le(e,t,o)}function Me(e){if(!$(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===Ce){if(!re(e[Ce])||e[Ce]<=0)throw"Expected maxResults to be a positive number.";if(e[Ce]>1e3)throw"Expected maxResults to be less than or equal to "+Se+"."}else{if(t!==xe)throw"Unknown option: "+t;if(e[xe]&&!te(e[xe]))throw"Expected pageToken to be string."}}var We=function(){function e(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){if(!e)throw _()}function Ge(e,t){function r(r,n){var o=Ae(e,n,t);return Be(null!==o),o}return r}function je(e,t){function r(r,n){var o=De(e,t,n);return Be(null!==o),o}return r}function qe(e,t){function r(r,n){var o=Ae(e,n,t);return Be(null!==o),ke(o,n)}return r}function Fe(e){function t(t,r){var n;return n=401===t.getStatus()?g():402===t.getStatus()?m(e.bucket):403===t.getStatus()?b(e.path):r,n.setServerResponseProp(r.serverResponseProp()),n}return t}function He(e){var t=Fe(e);function r(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=v(e.path)),o.setServerResponseProp(n.serverResponseProp()),o}return r}function ze(e,t,r){var n=t.fullServerUrl(),o=me(n),i="GET",a=e.maxOperationRetryTime(),s=new We(o,i,Ge(e,r),a);return s.errorHandler=He(t),s}function Xe(e,t,r,n,o){var i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",r&&r.length>0&&(i["delimiter"]=r),n&&(i["pageToken"]=n),o&&(i["maxResults"]=o);var a=t.bucketOnlyServerUrl(),s=me(a),u="GET",c=e.maxOperationRetryTime(),l=new We(s,u,je(e,t.bucket),c);return l.urlParams=i,l.errorHandler=Fe(t),l}function Ve(e,t,r){var n=t.fullServerUrl(),o=me(n),i="GET",a=e.maxOperationRetryTime(),s=new We(o,i,qe(e,r),a);return s.errorHandler=He(t),s}function Ke(e,t,r,n){var o=t.fullServerUrl(),i=me(o),a="PATCH",s=Oe(r,n),u={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime(),l=new We(i,a,Ge(e,n),c);return l.headers=u,l.body=s,l.errorHandler=He(t),l}function Ze(e,t){var r=t.fullServerUrl(),n=me(r),o="DELETE",i=e.maxOperationRetryTime();function a(e,t){}var s=new We(n,o,a,i);return s.successCodes=[200,204],s.errorHandler=He(t),s}function Je(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Qe(e,t,r){var n=Object.assign({},r);return n["fullPath"]=e.path,n["size"]=t.size(),n["contentType"]||(n["contentType"]=Je(null,t)),n}function $e(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=Qe(t,n,o),l=Oe(c,r),p="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",h="\r\n--"+u+"--",f=pe.getBlob(p,n,h);if(null===f)throw T();var d={name:c["fullPath"]},_=me(i),v="POST",m=e.maxUploadRetryTime(),g=new We(_,v,Ge(e,r),m);return g.urlParams=d,g.headers=a,g.body=f.uploadData(),g.errorHandler=Fe(t),g}var Ye=function(){function e(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}return e}();function et(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){Be(!1)}var n=t||["active"];return Be(!!r&&-1!==n.indexOf(r)),r}function tt(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=Qe(t,n,o),s={name:a["fullPath"]},u=me(i),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},p=Oe(a,r),h=e.maxUploadRetryTime();function f(e){var t;et(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){Be(!1)}return Be(te(t)),t}var d=new We(u,c,f,h);return d.urlParams=s,d.headers=l,d.body=p,d.errorHandler=Fe(t),d}function rt(e,t,r,n){var o={"X-Goog-Upload-Command":"query"};function i(e){var t=et(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){Be(!1)}r||Be(!1);var o=Number(r);return Be(!isNaN(o)),new Ye(o,n.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime(),u=new We(r,a,i,s);return u.headers=o,u.errorHandler=Fe(t),u}var nt=262144;function ot(e,t,r,n,o,i,a,s){var u=new Ye(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw U();var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var p=u.current,h=p+l,f=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":u.current},_=n.slice(p,h);if(null===_)throw T();function v(e,r){var o,a=et(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?Ge(t,i)(e,r):null,new Ye(s,c,"final"===a,o)}var m="POST",g=t.maxUploadRetryTime(),b=new We(r,m,v,g);return b.headers=d,b.body=_.uploadData(),b.progressCallback=s||null,b.errorHandler=Fe(e),b}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it=function(){function e(e,t,r){var n=Q(e)||Z(t)||Z(r);if(n)this.next=e,this.error=t||null,this.complete=r||null;else{var o=e;this.next=o.next||null,this.error=o.error||null,this.complete=o.complete||null}}return e}(),at=function(){function e(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}return e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function st(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}var a=n<=r.length&&r.length<=o;if(!a)throw O(n,o,e,r.length);for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(s){throw s instanceof Error?k(i,e,s.message):k(i,e,s)}}var ut=function(){function e(e,t){var r=this;this.validator=function(t){r.optional&&!J(t)||e(t)},this.optional=!!t}return e}();function ct(e,t){return function(r){e(r),t(r)}}function lt(e,t){function r(e){if(!te(e))throw"Expected string."}var n;return n=e?ct(r,e):r,new ut(n,t)}function pt(){function e(e){var t=e instanceof Uint8Array||e instanceof ArrayBuffer||ie()&&e instanceof Blob;if(!t)throw"Expected Blob or File."}return new ut(e)}function ht(e){return new ut(Ne,e)}function ft(e){return new ut(Me,e)}function dt(){function e(e){var t=ne(e)&&e>=0;if(!t)throw"Expected a number 0 or greater."}return new ut(e)}function _t(e,t){function r(t){var r=null===t||Z(t)&&t instanceof Object;if(!r)throw"Expected an Object.";void 0!==e&&null!==e&&e(t)}return new ut(r,t)}function vt(e){function t(e){var t=null===e||Q(e);if(!t)throw"Expected a Function."}return new ut(t,e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=X.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(f.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(X.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(f.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(X.ERROR))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===X.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.authWrapper_.getAuthToken().then((function(r){switch(t.state_){case X.RUNNING:e(r);break;case X.CANCELING:t.transition_(X.CANCELED);break;case X.PAUSING:t.transition_(X.PAUSED);break}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=tt(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=rt(e.authWrapper_,e.location_,t,e.blob_),o=e.authWrapper_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=nt*this.chunkMultiplier_,r=new Ye(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=ot(e.location_,e.authWrapper_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(X.ERROR)}var a=e.authWrapper_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(X.SUCCESS)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){var e=nt*this.chunkMultiplier_;e<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=ze(e.authWrapper_,e.location_,e.mappings_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(X.SUCCESS)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=$e(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(X.SUCCESS)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case X.CANCELING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case X.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case X.RUNNING:var t=this.state_===X.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case X.PAUSED:this.state_=e,this.notifyObservers_();break;case X.CANCELED:this.error_=R(),this.state_=e,this.notifyObservers_();break;case X.ERROR:this.state_=e,this.notifyObservers_();break;case X.SUCCESS:this.state_=e,this.notifyObservers_();break}},e.prototype.completeTransitions_=function(){switch(this.state_){case X.PAUSING:this.transition_(X.PAUSED);break;case X.CANCELING:this.transition_(X.CANCELED);break;case X.RUNNING:this.start_();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=K(this.state_);return new at(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==z.STATE_CHANGED)throw"Expected one of the event types: ["+z.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=vt(!0).validator,s=_t(null,!0).validator;function u(e){try{return void a(e)}catch(r){}try{s(e);var t=J(e["next"])||J(e["error"])||J(e["complete"]);if(!t)throw"";return}catch(r){throw i}}var c=[lt(o),_t(u,!0),vt(!0),vt(!0)];st("on",c,arguments);var l=this;function p(e){function t(t,r,o){null!==e&&st("on",e,arguments);var i=new it(t,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}return t}function h(e){if(null===e)throw i;u(e)}var f=[_t(h),vt(!0),vt(!0)],d=!(J(t)||J(r)||J(n));return d?p(f):p(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_();var t=this.observers_.slice();t.forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(K(this.state_)){case V.SUCCESS:mt(this.resolve_.bind(null,this.snapshot))();break;case V.CANCELED:case V.ERROR:var t=this.reject_;mt(t.bind(null,this.error_))();break;default:e=!1;break}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){var t=K(this.state_);switch(t){case V.RUNNING:case V.PAUSED:e.next&&mt(e.next.bind(e,this.snapshot))();break;case V.SUCCESS:e.complete&&mt(e.complete.bind(e))();break;case V.CANCELED:case V.ERROR:e.error&&mt(e.error.bind(e,this.error_))();break;default:e.error&&mt(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){st("resume",[],arguments);var e=this.state_===X.PAUSED||this.state_===X.PAUSING;return e&&this.transition_(X.RUNNING),e},e.prototype.pause=function(){st("pause",[],arguments);var e=this.state_===X.RUNNING;return e&&this.transition_(X.PAUSING),e},e.prototype.cancel=function(){st("cancel",[],arguments);var e=this.state_===X.RUNNING||this.state_===X.PAUSING;return e&&this.transition_(X.CANCELING),e},e}(),bt=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof he?t:he.makeFromUrl(t)}return e.prototype.toString=function(){return st("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return Ee()},e.prototype.child=function(e){st("child",[lt()],arguments);var t=_e(this.location.path,e),r=new he(this.location.bucket,t);return this.newRef(this.authWrapper,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=de(this.location.path);if(null===e)return null;var t=new he(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new he(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return ve(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),st("put",[pt(),ht(!0)],arguments),this.throwIfRoot_("put"),new gt(this,this.authWrapper,this.location,this.mappings(),new pe(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=P.RAW),st("putString",[lt(),lt(I,!0),ht(!0)],arguments),this.throwIfRoot_("putString");var n=D(t,e),o=Object.assign({},r);return!Z(o["contentType"])&&Z(n.contentType)&&(o["contentType"]=n.contentType),new gt(this,this.authWrapper,this.location,this.mappings(),new pe(n.data,!0),o)},e.prototype.delete=function(){var e=this;return st("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then((function(t){var r=Ze(e.authWrapper,e.location);return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){st("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return Object(i["__awaiter"])(this,void 0,void 0,(function(){var r,n,o,a;return Object(i["__generator"])(this,(function(i){switch(i.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=i.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(a=e.items).push.apply(a,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){st("list",[ft(!0)],arguments);var t=this;return this.authWrapper.getAuthToken().then((function(r){var n=e||{},o=Xe(t.authWrapper,t.location,"/",n.pageToken,n.maxResults);return t.authWrapper.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return st("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then((function(t){var r=ze(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return st("updateMetadata",[ht()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then((function(r){var n=Ke(t.authWrapper,t.location,e,t.mappings());return t.authWrapper.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return st("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then((function(t){var r=Ve(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw A();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw C(e)},e}(),yt=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),Rt=function(){function e(){this.map=new Map,this.id=p}return e.prototype.addRequest=function(e){var t=this,r=this.id;this.id++,this.map.set(r,e),e.getPromise().then((function(){return t.map.delete(r)}),(function(){return t.map.delete(r)}))},e.prototype.clear=function(){this.map.forEach((function(e){e&&e.cancel(!0)})),this.map.clear()},e}(),wt=function(){function e(t,r,n,o,i,a){var s;if(this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var u=this.app_.options;Z(u)&&(this.bucket_=e.extractBucket_(u),this.appId_=null!==(s=u.appId)&&void 0!==s?s:null)}this.authProvider_=r,this.storageRefMaker_=n,this.requestMaker_=o,this.pool_=a,this.service_=i,this.maxOperationRetryTime_=c,this.maxUploadRetryTime_=l,this.requestMap_=new Rt}return e.extractBucket_=function(e){var t=e[u]||null;if(null==t)return null;var r=he.makeFromBucketSpec(t);return r.bucket},e.prototype.getAuthToken=function(){var e=this.authProvider_.getImmediate({optional:!0});return e?e.getToken().then((function(e){return null!==e?e.accessToken:null}),(function(){return null})):Promise.resolve(null)},e.prototype.bucket=function(){if(this.deleted_)throw N();return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new yt(N());var r=this.requestMaker_(e,this.appId_,t,this.pool_);return this.requestMap_.addRequest(r),r},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e,t,r){var n=1,o=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];c||(c=!0,t.apply(null,e))}function p(t){o=setTimeout((function(){o=null,e(h,u())}),t)}function h(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!c)if(e)l.call.apply(l,Object(i["__spreadArrays"])([null,e],t));else{var o,h=u()||a;if(h)l.call.apply(l,Object(i["__spreadArrays"])([null,e],t));else n<64&&(n*=2),1===s?(s=2,o=0):o=1e3*(n+Math.random()),p(o)}}var f=!1;function d(e){f||(f=!0,c||(null!==o?(e||(s=2),clearTimeout(o),p(0)):e||(s=1)))}return p(0),setTimeout((function(){a=!0,d(!0)}),r),d}function Tt(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){if(r)t(!1,new At(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null,r=r;var n=r.getErrorCode()===H.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new At(a,r))}else{var s=r.getErrorCode()===H.ABORT;t(!1,new At(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}function r(t,r){var n=e.resolve_,o=e.reject_,i=r.xhr;if(r.wasSuccessCode)try{var a=e.callback_(i,i.getResponseText());J(a)?n(a):n()}catch(u){o(u)}else if(null!==i){var s=_();s.setServerResponseProp(i.getResponseText()),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else if(r.canceled){s=e.appDelete_?N():R();o(s)}else{s=y();o(s)}}this.canceled_?r(!1,new At(!1,null,!0)):this.backoffId_=Et(t,r,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&Tt(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=[408,429],n=-1!==r.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||o},e}(),At=function(){function e(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}return e}();function kt(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Ot(e){var t="undefined"!==typeof o.a?o.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function Nt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ct(e,t,r,n){var o=ge(e.urlParams),i=e.url+o,a=Object.assign({},e.headers);return Nt(a,t),kt(a,r),Ot(a),new Ut(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St=function(){function e(e,t,r,n){function o(e,t){return new bt(e,t)}if(this.bucket_=null,this.authWrapper_=new wt(e,t,o,Ct,this,r),this.app_=e,null!=n)this.bucket_=he.makeFromBucketSpec(n);else{var i=this.authWrapper_.bucket();null!=i&&(this.bucket_=new he(i,""))}this.internals_=new xt(this)}return e.prototype.ref=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(st("ref",[lt(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new bt(this.authWrapper_,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{he.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return st("refFromURL",[lt(t,!1)],arguments),new bt(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){st("setMaxUploadRetryTime",[dt()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){st("setMaxOperationRetryTime",[dt()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),e}(),xt=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},e}(),Pt="@firebase/storage",It="0.3.32",Lt="storage";function Dt(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new St(r,n,new se,t)}function Mt(e){var t={TaskState:V,TaskEvent:z,StringFormat:P,Storage:St,Reference:bt};e.INTERNAL.registerComponent(new a["Component"](Lt,Dt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Pt,It)}Mt(o.a)}}]);