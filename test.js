var subject = require('./mystery.js')
var mock = require('mock-fs');
subject.inc(-100,77);
subject.inc(-100,78);
subject.inc(-101,77);
subject.inc(-101,78);
subject.weird(87,70,42,"strictly");
subject.weird(87,70,42,"asdf");
subject.weird(87,70,42,"bob");
subject.weird(87,70,42,"asdf");
subject.weird(87,70,42,"stricter");
subject.weird(87,70,42,"asdf");
subject.weird(87,70,41,"strictly");
subject.weird(87,70,41,"asdf");
subject.weird(87,70,41,"bob");
subject.weird(87,70,41,"asdf");
subject.weird(87,70,41,"stricter");
subject.weird(87,70,41,"asdf");
subject.weird(87,69,42,"strictly");
subject.weird(87,69,42,"asdf");
subject.weird(87,69,42,"bob");
subject.weird(87,69,42,"asdf");
subject.weird(87,69,42,"stricter");
subject.weird(87,69,42,"asdf");
subject.weird(87,69,41,"strictly");
subject.weird(87,69,41,"asdf");
subject.weird(87,69,41,"bob");
subject.weird(87,69,41,"asdf");
subject.weird(87,69,41,"stricter");
subject.weird(87,69,41,"asdf");
subject.weird(88,70,42,"strictly");
subject.weird(88,70,42,"asdf");
subject.weird(88,70,42,"bob");
subject.weird(88,70,42,"asdf");
subject.weird(88,70,42,"stricter");
subject.weird(88,70,42,"asdf");
subject.weird(88,70,41,"strictly");
subject.weird(88,70,41,"asdf");
subject.weird(88,70,41,"bob");
subject.weird(88,70,41,"asdf");
subject.weird(88,70,41,"stricter");
subject.weird(88,70,41,"asdf");
subject.weird(88,69,42,"strictly");
subject.weird(88,69,42,"asdf");
subject.weird(88,69,42,"bob");
subject.weird(88,69,42,"asdf");
subject.weird(88,69,42,"stricter");
subject.weird(88,69,42,"asdf");
subject.weird(88,69,41,"strictly");
subject.weird(88,69,41,"asdf");
subject.weird(88,69,41,"bob");
subject.weird(88,69,41,"asdf");
subject.weird(88,69,41,"stricter");
subject.weird(88,69,41,"asdf");
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','path/fileExists');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','path/fileExists');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file1','path/fileExists');
mock.restore();
mock({});
	subject.fileTest('pathContent/file1','path/fileExists');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','pathContent');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','pathContent');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file1','pathContent');
mock.restore();
mock({});
	subject.fileTest('pathContent/file1','pathContent');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','NullDir');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','NullDir');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file1','NullDir');
mock.restore();
mock({});
	subject.fileTest('pathContent/file1','NullDir');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','path/fileExists');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','path/fileExists');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file1','path/fileExists');
mock.restore();
mock({});
	subject.fileTest('pathContent/file1','path/fileExists');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','pathContent');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','pathContent');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file1','pathContent');
mock.restore();
mock({});
	subject.fileTest('pathContent/file1','pathContent');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','NullDir');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file1','NullDir');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file1','NullDir');
mock.restore();
mock({});
	subject.fileTest('pathContent/file1','NullDir');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','path/fileExists');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','path/fileExists');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file2','path/fileExists');
mock.restore();
mock({});
	subject.fileTest('pathContent/file2','path/fileExists');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','pathContent');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','pathContent');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file2','pathContent');
mock.restore();
mock({});
	subject.fileTest('pathContent/file2','pathContent');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','NullDir');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','NullDir');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file2','NullDir');
mock.restore();
mock({});
	subject.fileTest('pathContent/file2','NullDir');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','path/fileExists');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','path/fileExists');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file2','path/fileExists');
mock.restore();
mock({});
	subject.fileTest('pathContent/file2','path/fileExists');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','pathContent');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','pathContent');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file2','pathContent');
mock.restore();
mock({});
	subject.fileTest('pathContent/file2','pathContent');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','NullDir');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/file2','NullDir');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/file2','NullDir');
mock.restore();
mock({});
	subject.fileTest('pathContent/file2','NullDir');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','path/fileExists');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','path/fileExists');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/NoFile','path/fileExists');
mock.restore();
mock({});
	subject.fileTest('pathContent/NoFile','path/fileExists');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','pathContent');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','pathContent');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/NoFile','pathContent');
mock.restore();
mock({});
	subject.fileTest('pathContent/NoFile','pathContent');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','NullDir');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','NullDir');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/NoFile','NullDir');
mock.restore();
mock({});
	subject.fileTest('pathContent/NoFile','NullDir');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','path/fileExists');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','path/fileExists');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/NoFile','path/fileExists');
mock.restore();
mock({});
	subject.fileTest('pathContent/NoFile','path/fileExists');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','pathContent');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','pathContent');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/NoFile','pathContent');
mock.restore();
mock({});
	subject.fileTest('pathContent/NoFile','pathContent');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','NullDir');
mock.restore();
mock({"pathContent":{"file1":"text content","file2":""}});
	subject.fileTest('pathContent/NoFile','NullDir');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('pathContent/NoFile','NullDir');
mock.restore();
mock({});
	subject.fileTest('pathContent/NoFile','NullDir');
mock.restore();
subject.normalize('981-895-8988');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined',{});
subject.format('undefined','undefined',{"normalize":true});
subject.format('undefined','undefined',{"normalize":false});
subject.format('undefined','undefined','undefined');
subject.format('undefined','undefined','undefined');
subject.blackListNumber('919-000-0000');
subject.blackListNumber('919-000-0000');
subject.blackListNumber('920-000-0000');