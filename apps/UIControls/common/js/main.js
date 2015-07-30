/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var busyIndicator = null;

function wlCommonInit(){
	
	busyIndicator = new WL.BusyIndicator(null, {text : 'Loading...'});
	$('#BusyIndicatorStartButton').click(busyIndicatorDemo);
	$('#SimpleDialogStartButton').click(simpleDialogDemo);	
}

function busyIndicatorDemo() {
	busyIndicator.show();
	setTimeout(function() {
		busyIndicator.hide();
	}, 5000);
}

function simpleDialogDemo() {
	var dialogTitle = "CommonControls";
	var dialogText = "This is simple dialog text; take a look at the console";

	WL.SimpleDialog.show(dialogTitle, dialogText, [ {
		text : 'I am button 1',
		handler : simpleDialogButton1Click
	}, {
		text : 'I am button 2',
		handler : simpleDialogButton2Click
	}

	]);
}

function simpleDialogButton1Click() {
	WL.Logger.debug("simpleDialogButton1 Clicked");

}

function simpleDialogButton2Click() {
	WL.Logger.debug("simpleDialogButton2 Clicked");
}

