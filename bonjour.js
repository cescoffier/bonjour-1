/**
 * JBoss, Home of Professional Open Source
 * Copyright 2016, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var express = require('express');
var os = require('os');
var app = express();

function say_bonjour(){
    return "Bonjour de " + os.hostname();
}

app.get('/api/bonjour', function(req, resp) {
    resp.set('Access-Control-Allow-Origin', '*');
    resp.send(say_bonjour());
});

app.get('/api/health', function(req, resp) {
    resp.set('Access-Control-Allow-Origin', '*');
    resp.send("I'm ok");
});

var server = app.listen(8080, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Bonjour service running at http://%s:%s", host, port)
});
