m=[];s=[0,3,5,7,10];pl=0;for(i=0;16>i;i++)m[i]=0;ac=new webkitAudioContext()||new AudioContext();var nb=ac.createBuffer(1,16384,ac.sampleRate);d=nb.getChannelData(0);for(i=0;16384>i;i++)d[i]=2*Math.random()-1;d=ac.createDelay();d.delayTime.value=60/138;g=ac.createGain();g.gain.value=0.5;c=ac.createDynamicsCompressor();d.connect(g);g.connect(d);g.connect(c);c.connect(ac.destination);setInterval(function(){t=ac.currentTime;n=m[pl];0!=n&&(o=ac.createOscillator(),o.frequency.value=440*Math.pow(2,(n-69)/12),o.type="sawtooth",a=ac.createGain(),g=a.gain,g.setValueAtTime(1,t),g.linearRampToValueAtTime(0,t+1),f=ac.createBiquadFilter(),p=f.frequency,p.setValueAtTime(3E3+2E3*Math.random(),t),p.exponentialRampToValueAtTime(20,t+0.6),f.Q.value=5,o.connect(a),a.connect(f),f.connect(d),o.start(t),o.stop(t+0.5));0==pl%4?(o=ac.createOscillator(),f=o.frequency,f.setValueAtTime(200,t),f.exponentialRampToValueAtTime(10,t+0.25),a=ac.createGain(),g=a.gain,g.setValueAtTime(1.25,t),g.linearRampToValueAtTime(0,t+0.5),o.connect(a),a.connect(c),o.start(t),o.stop(t+0.5)):0==(pl+2)%4?(n=ac.createBufferSource(),n.buffer=nb,n.loop=!0,a=ac.createGain(),g=a.gain,g.setValueAtTime(1.25,t),g.linearRampToValueAtTime(0,t+0.2),f=ac.createBiquadFilter(),p=f.frequency,p.setValueAtTime(2500,t),p.exponentialRampToValueAtTime(500,t+0.1),n.connect(a),a.connect(f),f.connect(c),n.start(t),n.stop(t+1)):(o=ac.createBufferSource(),o.buffer=nb,o.loop=!0,f=ac.createBiquadFilter(),f.type="highpass",f.frequency.value=8E3+2E3*Math.random(),f.Q.value=5,o.connect(f),f.connect(c),o.start(t),o.stop(t+0.02));0==pl&&(i=Math.floor(16*Math.random()),0.1>Math.random()?m[i]=0:(j=Math.floor(Math.random()*s.length),o=Math.floor(Math.random()*Math.random()*3),m[i]=40+s[j]+12*o));pl=(pl+1)%16},60/138*1E3/2);