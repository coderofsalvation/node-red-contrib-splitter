/**
 * Copyright 2014 Leon van Kammen / Coder of salvation. All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 * 
 *    1. Redistributions of source code must retain the above copyright notice, this list of
 *       conditions and the following disclaimer.
 * 
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
 *       of conditions and the following disclaimer in the documentation and/or other materials
 *       provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY Leon van Kammen AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Leon van Kammen OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * The views and conclusions contained in the software and documentation are those of the
 * authors and should not be interpreted as representing official policies, either expressed
 * or implied, of Leon van Kammen 
 */

module.exports = function(RED) {
    "use strict";

    function SplitterNode(n) {
        RED.nodes.createNode(this, n);
        this.property = n.property;
        var propertyParts = n.property.split("."),
            node = this;

        this.on('input', function (msg) {
          if( typeof propertyParts == "object" && propertyParts != undefined ){
            var prop = propertyParts.reduce(function (obj, i) {
                  return obj[i]
            }, msg);
            msg.payload_unsplit = msg.payload;
            if( prop != undefined && prop.length ){
              for( var i in prop ){
                var m = RED.util.cloneMessage(msg);
                m.payload = prop[i];
                node.send( m );
              }
            }
          }else console.error("node splitter did not receive an array");
        });
    }
    RED.nodes.registerType("splitter", SplitterNode);
}
