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

// This method is invoked after loading the main HTML and successful initialization of the MobileFirst runtime.
function wlEnvInit(){
    wlCommonInit();
	
    WL.TabBar.init();
	WL.TabBar.addItem("item1", function(){ alert("item 1 pressed"); }, "item 1 title", {image : "tabButton:Search"});	
	WL.TabBar.addItem("item2", function(){ alert("item 2 pressed"); }, "item 2 title", {image : "tabButton:More"});
	WL.TabBar.addItem("item3", function(){ alert("item 3 pressed"); }, "item 3 title", {image : "tabButton:Downloads"});
	WL.TabBar.addItem("item4", function(){ alert("item 4 pressed"); }, "item 4 title", {image : "tabButton:Recents"});
	WL.TabBar.addItem("item5", function(){ alert("item 5 pressed"); }, "item 5 title", {image : "tabButton:Contacts"});
	WL.TabBar.setVisible(true);		
}